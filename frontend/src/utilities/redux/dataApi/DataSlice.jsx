import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;

export const fetchCategories = createAsyncThunk("api/categories", async () => {
  const response = await axios({
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    url: `${BASE_URL}/api/categories`,
  });
  return response.data;
});

export const fetchMealsByCategory = createAsyncThunk(
  "api/mealsByCategory",
  async (args) => {
    const response = await axios({
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      url: `${BASE_URL}/api/meals/${args}`,
    });
    return response.data;
  }
);

export const fetchMealById = createAsyncThunk("api/mealById", async (args) => {
  const response = await axios({
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    url: `${BASE_URL}/api/meal/${args}`,
  });
  return response.data;
});

export const freeSearch = createAsyncThunk("api/freeSearch", async (args) => {
  const response = await axios({
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    url: `${BASE_URL}/api/freeSearch/${args}`,
  });
  return response.data;
});

export const searchByLetter = createAsyncThunk(
  "api/searchByLetter",
  async (args) => {
    const response = await axios({
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      url: `${BASE_URL}/api/lettersSearch/${args}`,
    });
    return response.data;
  }
);

export const fetchAreas = createAsyncThunk("api/areas", async () => {
  const response = await axios({
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    url: `${BASE_URL}/api/areas`,
  });
  console.log(response.data);
  return response.data;
});

const initialState = {
  status: "idle",
  categories: [],
  areas: [],
  currentCategory: null,
  currentSearch: null,
  currentMeal: null,
  error: null,
};

const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducer: {
    clearCurrentCategory: (state) => {
      state.currentCategory = null;
    },
    clearCurrentMeal: (state) => {
      state.currentMeal = null;
    },
  },
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.categories = payload;
    },
    [fetchCategories.rejected]: (state, payload) => {
      state.status = "failed";
      state.error = payload;
    },
    [fetchMealsByCategory.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMealsByCategory.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.currentCategory = payload;
    },
    [fetchMealsByCategory.rejected]: (state, payload) => {
      state.status = "failed";
      state.error = payload;
    },
    [fetchMealById.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMealById.fulfilled]: (state, { payload }) => {
      state.currentMeal = payload;
      state.status = "success";
    },
    [fetchMealById.rejected]: (state, payload) => {
      state.status = "failed";
      state.error = payload;
    },
    [freeSearch.pending]: (state) => {
      state.status = "loading";
      state.currentSearch = null;
      state.error = null;
    },
    [freeSearch.fulfilled]: (state, { payload }) => {
      state.currentSearch = payload;
      state.status = "success";
    },
    [freeSearch.rejected]: (state, payload) => {
      state.status = "failed";
      state.error = payload;
    },
    [searchByLetter.pending]: (state) => {
      state.status = "loading";
      state.currentSearch = null;
      state.error = null;
    },
    [searchByLetter.fulfilled]: (state, { payload }) => {
      state.currentSearch = payload;
      state.status = "success";
    },
    [searchByLetter.rejected]: (state, payload) => {
      state.status = "failed";
      state.error = payload;
    },
    [fetchAreas.pending]: (state) => {
      state.status = "loading";
      state.currentSearch = null;
      state.error = null;
    },
    [fetchAreas.fulfilled]: (state, { payload }) => {
      state.areas = payload;
      state.status = "success";
    },
    [fetchAreas.rejected]: (state, payload) => {
      state.status = "failed";
      state.error = payload;
    },
  },
});

export default apiDataSlice.reducer;
