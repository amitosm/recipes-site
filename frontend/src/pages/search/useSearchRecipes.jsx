import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../../utilities/redux/auth/AuthSlice";
import { useEffect } from "react";
import useNotify from "../../components/useNotify";

function useSearchRecipes() {
  const { message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { notify } = useNotify();

  useEffect(() => {
    // alert the user when needed
    console.log("use search:", message);
    if (message === "Logged in!") {
      notify("success", message);
      dispatch(setMessage({ message: "" }));
    }
    if (message === "logout") {
      notify("info", "Successfully logout");
      dispatch(setMessage({ message: "" }));
    }
  }, [message]);

  return {
    message,
  };
}

export default useSearchRecipes;
