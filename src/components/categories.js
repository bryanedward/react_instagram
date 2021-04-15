import React from "react";
import { Anchor, Image } from "./style";

const DEFAULT_IMAGE =
  "https://i.postimg.cc/2SYFXXfG/pexels-oliver-sj-str-m-1316897.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  //obtiene las key del json parsiado
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);
