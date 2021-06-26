import React, { useContext, Suspense } from 'react'
import { AppContext } from '../Context'
import { Router, Redirect } from '@reach/router'
import { Home } from '../page/Home'
import { Detail } from '../page/Detail'
import { NotRegisteredUser } from '../page/NotRegisteredUser'
// import { Favs } from "../page/Favs";
import { User } from '../page/User'
import { NotFound } from '../page/NotFound'

// Importando la pagina dde favoritos
// Utilizando lazy loading, que cargue solo cuando se necesita
const Favs = React.lazy(() => import('../page/Favs'))

export const Route = ({ detailId }) => {
  const { isAuth, activateAuth } = useContext(AppContext)

  return (
    // En vez del div que esta dentor del fallback
    // Podemos cargar un component Loading
    // Para que este cargando en lo que se van cargando
    <Suspense fallback={<div />}>
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' detailId={detailId} />
        {!isAuth && (
          <NotRegisteredUser
            path='/login'
            isAuth={isAuth}
            activateAuth={activateAuth}
          />
        )}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
    </Suspense>
  )
}
