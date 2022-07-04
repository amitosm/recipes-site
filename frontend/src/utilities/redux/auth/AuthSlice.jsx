import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;

export const checkIsAuth = createAsyncThunk("auth/checkIsAuth", async () => {
  const response = await axios({
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    url: `${BASE_URL}/auth/check-auth`,
  });
  return response.data;
});

export const login = createAsyncThunk("login", async (args) => {
  const res = await axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: args,
    url: `${BASE_URL}/auth/login`,
  }).catch((err) => {
    if (err.response) {
      return Promise.reject("Wrong username or password.");
    } else if (err.request) {
      // The client never received a response, and the request was never left
      return Promise.reject("Please try again.");
    }
  });
  return res.data;
});

export const logout = createAsyncThunk("logout", async () => {
  const res = await axios({
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    url: `${BASE_URL}/auth/logout`,
  });
  return res.data;
});

export const register = createAsyncThunk("register", async (args) => {
  const res = await axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: args,
    url: `${BASE_URL}/db/addUser`,
  }).catch((err) => {
    if (err.response) {
      return { data: { message: err.response.data.message } };
    } else {
      // The client never received a response, and the request never left
      return { data: { message: "Please try again." } };
    }
  });
  return { data: res.data?.user || null, message: res.data.message };
});

export const addFavorites = createAsyncThunk("addFavorites", async (args) => {
  const res = await axios({
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: { favorites: args.mealId, meal: args.meal },
    url: `${BASE_URL}/db/addFavorite`,
  }).catch((err) => {
    if (err.response) {
      return { data: { message: err.response.data.message } };
    } else {
      // The client never received a response, and the request never left
      return { data: { message: "Please try again." } };
    }
  });
  return { data: res.data?.newFavorites || null, message: res.data.message };
});

export const removeFavorites = createAsyncThunk(
  "removeFavorites",
  async (args) => {
    const res = await axios({
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: { favorites: args.mealId, meal: args.meal },
      url: `${BASE_URL}/db/removeFavorite`,
    }).catch((err) => {
      if (err.response) {
        return { data: { message: err.response.data.message } };
      } else {
        // The client never received a response, and the request never left
        return { data: { message: "Please try again." } };
      }
    });
    return { data: res.data?.newFavorites || null, message: res.data.message };
  }
);

export const fetchFavorites = createAsyncThunk("fetchFavorites", async () => {
  const response = await axios({
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    url: `${BASE_URL}/db/getAllFavorites`,
  });
  return response.data;
});

export const addRecipie = createAsyncThunk("addRecipie", async (args) => {
  const response = await axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    url: `${BASE_URL}/db/addRecipie`,
    data: args,
  });
  return response.data;
});

export const fetchUserRecipes = createAsyncThunk(
  "fetchUserRecipes",
  async () => {
    const response = await axios({
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      url: `${BASE_URL}/db/userRecipes`,
    });
    return response.data.recipes;
  }
);

const initialState = {
  isAuth: false,
  needToCheckAuth: true,
  status: "idle",
  error: null,
  user: null,
  favoritesDetails: null,
  userRecipes: [],
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initState: (state) => {
      state.status = "idle";
      state.isAuth = false;
      state.error = null;
      state.user = null;
      state.userRecipes = [];
      state.favoritesDetails = null;
      state.message = "";
    },
    setMessage: (state, { payload }) => {
      state.message = payload.message;
    },
  },
  extraReducers: {
    [checkIsAuth.pending]: (state) => {
      state.status = "loading";
      state.error = null;
      state.message = "";
    },
    [checkIsAuth.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.isAuth = payload.isAuth;
      state.needToCheckAuth = false;
      state.user = payload.user;
    },
    [checkIsAuth.rejected]: (state, payload) => {
      state.status = "failed";
      state.isAuth = false;
      state.error = payload;
    },
    [login.pending]: (state) => {
      state.status = "loading";
      state.error = null;
      state.message = "";
    },
    [login.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.user = payload.user;
      state.isAuth = payload.isAuth;
      state.message = "Logged in!";
      state.userRecipes = [];
    },
    [login.rejected]: (state, payload) => {
      state.status = "rejected";
      state.error = payload;
      state.message = payload.error.message;
    },
    [logout.pending]: (state) => {
      state.status = "loading";
      state.error = null;
      state.message = "";
    },
    [logout.fulfilled]: (state) => {
      state.status = "success";
      state.message = "logout";
      state.isAuth = false;
      state.user = null;
      state.favoritesDetails = null;
      state.userRecipes = [];
    },
    [logout.rejected]: (state, payload) => {
      state.test2 = "rejected";
      state.test = payload;
    },
    [register.pending]: (state) => {
      state.status = "loading";
      state.message = "";
    },
    [register.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.message = payload.message;
    },
    [register.rejected]: (state, payload) => {
      state.status = "rejected";
      state.error = payload;
      state.message = payload.error.message;
    },
    [addFavorites.pending]: (state) => {
      state.status = "loading";
      state.message = "";
    },
    [addFavorites.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.message = payload.message;
      state.user.favorites = payload.data || state.user.favorites;
    },
    [addFavorites.rejected]: (state, payload) => {
      state.status = "rejected";
      state.error = payload;
      state.message = payload.error.message;
    },
    [removeFavorites.pending]: (state) => {
      state.status = "loading";
      state.message = "";
    },
    [removeFavorites.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.message = payload.message;
      state.user.favorites = payload.data || state.user.favorites;
    },
    [removeFavorites.rejected]: (state, payload) => {
      state.status = "rejected";
      state.error = payload;
      state.message = payload.error.message;
    },
    [fetchFavorites.pending]: (state) => {
      state.status = "loading";
      state.error = null;
      state.message = "";
    },
    [fetchFavorites.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.favoritesDetails = payload.favorites;
    },
    [addRecipie.pending]: (state) => {
      state.status = "loading";
      state.error = null;
      state.message = "";
    },
    [addRecipie.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.message = payload.message;
    },
    [fetchUserRecipes.pending]: (state) => {
      state.status = "loading";
      state.error = null;
      state.message = "";
    },
    [fetchUserRecipes.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.userRecipes = payload;
      state.message = "userRecipes";
    },
  },
});

export const { initState, setMessage, addToLocalFavorites } = authSlice.actions;
export default authSlice.reducer;
