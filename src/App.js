import React from 'react'

import { GlobalStyle } from './components/styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Route } from './routes/Route'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div style={{ margin: '0 10px' }}>
      <GlobalStyle />
      <Logo />
      <Route detailId={detailId} />
      <Navbar />
    </div>
  )
}
export default App
