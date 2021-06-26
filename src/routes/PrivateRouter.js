import React, { useContext } from 'react'
import { Router } from '@reach/router'
import { Favs } from '../page/Favs'
import { NotRegisteredUser } from '../page/NotRegisteredUser'
import { User } from '../page/User'
import { AppContext } from '../Context'

export const PrivateRouter = () => {
  const { isAuth, activateAuth } = useContext(AppContext)

  return (
    <Router>
      {
        isAuth
          ? <>
            <Favs path='/favs' />
            <User path='/user' />
            </>
          : <>
            <NotRegisteredUser path='/favs' isAuth={isAuth} activateAuth={activateAuth} />
            <NotRegisteredUser path='/user' isAuth={isAuth} activateAuth={activateAuth} />
          </>
      }
    </Router>
  )
}
