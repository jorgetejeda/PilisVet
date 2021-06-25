import React from 'react'
import { Router } from '@reach/router'
import { Favs } from '../page/Favs'
import { NotRegisteredUser } from '../page/NotRegisteredUser'
import { User } from '../page/User'

export const PrivateRouter = ({ isAuth }) => {
  return (
    <Router>
      {
        isAuth
          ? <>
            <Favs path='/favs' />
            <User path='/user' />
            </>
          : <>
            <NotRegisteredUser path='/favs' />
            <NotRegisteredUser path='/user' />
          </>
      }
    </Router>
  )
}
