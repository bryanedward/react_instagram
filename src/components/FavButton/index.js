import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Button } from "./style";

export const FavButton = ({ likeds, likes, onClickLike }) => {
  const Icon = likeds ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClickLike}>
      <Icon size="30px" />
      {likes} Gustos!!
    </Button>
  );
};
