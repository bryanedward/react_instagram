import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

export const withPhortis = graphql(gql`
query getPhotos($categoriesId : ID){
    photos(categoryId : $categoriesId){
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`)

