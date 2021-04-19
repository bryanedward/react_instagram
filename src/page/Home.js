import React, { Fragment } from "react";
import { ListOfCategories } from "../components/ListOfCategory";
import { ListOfPhotoCard } from "../container/ListOfPhotoCard";

export const Home = ({ categoryId }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCard categoriesId={categoryId} />
    </Fragment>
  );
};
