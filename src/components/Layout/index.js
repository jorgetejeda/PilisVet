import React from 'react'
import { Helmet } from 'react-helmet'
import {Title, Subtitle } from './style'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>Pilis's Vet | {title}</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </div>
    </>
  )
}
