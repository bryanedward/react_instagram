import React from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";

export const Details = ({ detail }) => {
  return <PhotoCardWithQuery id={detail} />;
};
