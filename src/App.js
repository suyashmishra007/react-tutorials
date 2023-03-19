import { useSelector } from "react-redux";
import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoggedIn = !isAuthenticated ? <Auth /> : <UserProfile />;

  return (
    <React.Fragment>
      <Header />
      {isLoggedIn}
      <Counter />
    </React.Fragment>
  );
}

export default App;
