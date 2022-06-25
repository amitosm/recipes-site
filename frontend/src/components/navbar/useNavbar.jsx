import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { checkIsAuth, logout } from "../../utilities/redux/auth/AuthSlice";

function useNavbar() {
  const { isAuth, user, needToCheckAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    if (needToCheckAuth) {
      dispatch(checkIsAuth());
    }
  }, [needToCheckAuth]);

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
  };

  const handleMenuOpen = (event) => {
    setUserMenuOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setUserMenuOpen(false);
  };

  return {
    isAuth,
    userMenuOpen,
    handleMenuOpen,
    handleMenuClose,
    handleLogout,
    username: user?.username || null,
  };
}

export default useNavbar;
