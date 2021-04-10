import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

//consulta de la query a la base de datos
const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  <PhotoCard/>
};
