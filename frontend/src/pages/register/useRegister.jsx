import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  register,
  setMessage,
  login,
} from "../../utilities/redux/auth/AuthSlice";
import useNotify from "../../components/useNotify";

function useRegister() {
  const { isAuth, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { notify } = useNotify();

  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isAuth) {
      dispatch(setMessage({ message: "Logged in!" }));
      navigate("/");
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    if (!message || message === "Logged in!") {
      // don't do anything
    } else if (message === "Created") {
      dispatch(
        login({ password: userForm.password, username: userForm.username })
      );
    } else {
      notify("error", message);
    }
  }, [message]);

  const handleInputChange = (prop, val) => {
    setUserForm((state) => ({ ...state, [prop]: val }));
  };

  const checkFilledInputs = (form) => {
    // return false if any of the inputs are empty.
    for (const prop in form) {
      if (!form[prop]) {
        dispatch(setMessage({ message: "All fileds are requiered." }));
        return false;
      }
    }
    return true;
  };

  const dispatchRegister = (form) => {
    // if any of the inputs are empty, don't send the request
    if (checkFilledInputs(form)) {
      handleAsyncRegister(form);
    }
  };

  const handleAsyncRegister = async (form) => {
    await dispatch(register(form)).unwrap();
  };

  return {
    handleInputChange,
    userForm,
    dispatchRegister,
  };
}
export default useRegister;
