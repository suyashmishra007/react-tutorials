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
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated && (
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
        )}
        {!isAuthenticated && (
          <ul>
            <button onClick={loginButtonHandler}>Login</button>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
