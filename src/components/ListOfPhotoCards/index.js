import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  return (
    <ul style={{ margin: '0 10px' }}>
      {[1, 2, 3, 4, 5, 6, 7].map((id) => (
        <PhotoCard key={id} id={id} />
      ))}
    </ul>
  )
}
