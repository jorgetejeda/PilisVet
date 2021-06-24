import React from 'react'

import { GlobalStyle } from './components/styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'

import { Home } from './page/Home'
import { Detail } from './page/Detail'

import { Router } from '@reach/router'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <div style={{ margin: '0 10px' }}>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' detailId={detailId} />
      </Router>
      <Navbar />
    </div>
  )
}
export default App
