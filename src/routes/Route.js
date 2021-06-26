import React from 'react'
import { Router } from '@reach/router'
import { Home } from '../page/Home'
import { Detail } from '../page/Detail'
import { PrivateRouter } from './PrivateRouter'
// import Context from '../Context'

export const Route = ({ detailId }) => {
  return (
    <>
      <Router>
        <Home path='/' />
        <Detail path='/detail/:detailId' detailId={detailId} />
      </Router>
      <PrivateRouter />
    </>
  )
}
