import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutButtonHandler = () => {
    dispatch(authActions.logout());
  };
  const loginButtonHandler = () => {
    dispatch(authActions.login());
  };
  const isUserAuthenticated = isAuthenticated ? (
    <ul>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button onClick={logoutButtonHandler}>Logout</button>
      </li>
    </ul>
  ) : (
    <ul>
      <button onClick={loginButtonHandler}>Login</button>
    </ul>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>{isUserAuthenticated}</nav>
    </header>
  );
};

export default Header;
