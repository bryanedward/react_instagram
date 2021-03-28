import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'


const withPhortis = graphql(gql`
query getPhotos{
    photos{
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`)



export const ListOfPhotoCardComponent = ({ data: { photos = [] } = {} }) => {
    return (
        <ul>
            {
                photos.map(item =>
                    <PhotoCard
                        key={item.id}
                        {...item} />
                )
            }
        </ul>
    )
}

export const ListOfPhotoCard = withPhortis(ListOfPhotoCardComponent)