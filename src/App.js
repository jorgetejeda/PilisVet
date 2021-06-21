import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './components/styles/GlobalStyle'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { PhotoCardWithQuery } from './components/PhotoCardWithQuery'
import { Logo } from './components/Logo'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <div style={{ margin: '0 10px' }}>
      <GlobalStyle />
      <a href='/'><Logo /></a>
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={1} />
            </>)
      }
    </div>
  )
}
export default App
