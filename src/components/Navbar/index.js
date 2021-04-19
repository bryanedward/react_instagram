import React from "react";
import { Nav, Link } from "./style";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";
export const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <MdHome size="30px" />
      </Link>
      <Link to="/fav">
        <MdFavoriteBorder size="30px" />
      </Link>
      <Link to="/profile">
        <MdPersonOutline size="30px" />
      </Link>
    </Nav>
  );
};
