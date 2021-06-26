import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfFavs } from '../components/ListOfFavs'

export default () => {
  return (
    <>
      <Layout
        title='Tus favoritos'
        subtitle='Aqui puedes encontrar tus favoritos'
      >
        <ListOfFavs />
      </Layout>
    </>
  )
}
