import React from "react";
import { PhotoCard } from "../components/PhotoCard";
import { ListOfPhotoCardComponent } from "../components/ListPhotoCards";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_SINGLE_PHOTO = gql`
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

const renderProps = ({ loading, error, data }) => {
  if (loading || !data) return <p>Cargando...</p>;
  const { photo = {} } = data;
  return <PhotoCard {...photo} />;
};


export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProps}
  </Query>
);
