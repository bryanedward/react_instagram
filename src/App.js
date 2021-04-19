import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Logo } from "./components/Logo";
import { Home } from "./page/Home";
import { Router } from "@reach/router";
import { Details } from "./page/Detail";

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
      <Navbar />
    </div>
  );
};
