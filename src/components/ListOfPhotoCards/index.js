import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
  query getPhotos{
    photos{
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul style={{ margin: '0 10px' }}>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
