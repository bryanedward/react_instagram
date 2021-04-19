import React from "react";
import { Link, Image } from "./style";

const DEFAULT_IMAGE =
  "https://i.postimg.cc/2SYFXXfG/pexels-oliver-sj-str-m-1316897.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path = "#", emoji = "?" }) => (
  //obtiene las key del json parsiado
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
);
