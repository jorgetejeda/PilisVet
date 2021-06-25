import React from 'react'

import { GlobalStyle } from './components/styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'

import { Home } from './page/Home'
import { Detail } from './page/Detail'
import { Favs } from './page/Favs'
import { User } from './page/User'
import { NotRegisteredUser } from './page/NotRegisteredUser'

import { Router } from '@reach/router'

const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}

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
        <Detail path='/detail/:detailId' detailId={detailId} />

      </Router>
      <UserLogged>
        {
            // A children le podemos pasar un parametro
            // Este Auth que lo inicializamos en false
            // Al momento de renderizar capturamos ese paramtetro
            // Enviado desde el children
            ({ isAuth }) =>
              isAuth
                ? <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
                : <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
          }
      </UserLogged>

      <Navbar />
    </div>
  )
}
export default App
