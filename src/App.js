import React, { Fragment } from "react";
import { ListOfCategories } from "./components/ListOfCategory";
import { GlobalStyle } from "./GlobalStyles";
import { ListOfPhotoCard } from "./container/ListOfPhotoCard";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";
import { Logo } from "./components/Logo";
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);

  const details = urlParams.get("detail");

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {details ? (
        <PhotoCardWithQuery id={details}/>
      ) : (
        //pantalla principal
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCard />
        </Fragment>
      )}
    </div>
  );
};
