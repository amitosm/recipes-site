import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../utilities/redux/auth/AuthSlice";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const { isAuth, status, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [validationMsg, setValidationMsg] = useState("");
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (status === "rejected") {
      setValidationMsg(message);
    }
  }, [status]);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const handleInputChange = (prop, value) => {
    setUserForm((state) => ({ ...state, [prop]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDegault();
    dispatchLogin(userForm);
  };

  const dispatchLogin = (form) => {
    if (checkFilledInputs(userForm)) {
      dispatch(login(form));
    }
  };

  const checkFilledInputs = (form) => {
    // return false if any of the inputs are empty.
    for (const prop in form) {
      if (!form[prop]) {
        setValidationMsg("All fileds are requiered.");
        return false;
      }
    }
    return true;
  };

  return {
    handleInputChange,
    userForm,
    dispatchLogin,
    status,
    validationMsg,
  };
}

export default useLogin;
