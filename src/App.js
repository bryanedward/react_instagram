import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Logo } from "./components/Logo";
import { Home } from "./page/Home";
import { Router } from "@reach/router";
import { Details } from "./page/Detail";
import { Fav } from "./page/Fav";
import { Profile } from "./page/Profile";
import { NoAuth } from "./page/NoAuth";

const UserLoggin = ({ children }) => {
  return children({ auth: false });
};

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Details path="/detail/:detail" />
      </Router>
      <UserLoggin>
        {({ auth }) =>
          auth ? (
            <Router>
              <Fav path="fav" /> <Profile path="profile" />{" "}
            </Router>
          ) : (
            <Router>
              <NoAuth path="fav" />
              <NoAuth path="profile" />
            </Router>
          )
        }
      </UserLoggin>
      <Navbar />
    </div>
  );
};
