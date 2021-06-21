import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './components/styles/GlobalStyle'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)

export default App
