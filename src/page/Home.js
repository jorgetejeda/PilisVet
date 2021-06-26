import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfCategories } from '../components/ListOFCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const HomePage = ({ id }) => (
  <>
    <Layout
      title='Tu app de fotos de mascotas'
      subtitle='Con petgram puedes encontrar fotos de animales domesticos muy bonitos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  </>
)

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
