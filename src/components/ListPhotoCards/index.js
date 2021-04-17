import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCardComponent = ({ data: { photos = [] } = {} }) => {
  return (
    <ul>
      {photos.map((item) => (
        <PhotoCard key={item.id} {...item} />
      ))}
    </ul>
  );
};
