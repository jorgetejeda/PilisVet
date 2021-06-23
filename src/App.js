import React from 'react'

import { GlobalStyle } from './components/styles/GlobalStyle'
import { PhotoCardWithQuery } from './components/PhotoCardWithQuery'
import { Logo } from './components/Logo'

import { Home } from './page/Home'

import { Router } from '@reach/router'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <div style={{ margin: '0 10px' }}>
      <GlobalStyle />
      <a href='/'>
        <Logo />
      </a>
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
          </Router>
      }
    </div>
  )
}
export default App
