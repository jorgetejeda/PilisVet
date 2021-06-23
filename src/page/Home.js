import React from 'react'
import { ListOfCategories } from '../components/ListOFCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export const Home = ({ id }) => (
  <>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </>
)
