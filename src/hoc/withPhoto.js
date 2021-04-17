import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

//obtiene el registro que proporciona el backend 
//si no pasa ningun categoryId en app.js obtiene todas los regitros
//si pasa algun cetegoryId obtiene  una categoria 


const GET_PHOTO = gql`
  query getPhotos($categoriesId: ID) {
    photos(categoryId: $categoriesId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;


export const withPhortis = graphql(GET_PHOTO)

