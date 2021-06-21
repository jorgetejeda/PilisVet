import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { useQuery, gql } from '@apollo/client'

const withPhotos = gql`
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
`

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(withPhotos)

  if (error) return (<h2>Internal Server Error</h2>)
  if (loading) return (<h2>Loading....</h2>)

  return (
    <ul style={{ margin: '0 10px' }}>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
