import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AppProvider from './Context'
import { ApolloClient, ApolloProvider, ApolloLink, InMemoryCache, from, HttpLink } from '@apollo/client'

import { onError } from '@apollo/client/link/error'

// En cada request que se vaya a realizar enviaremos nuestro token
const authMiddlewate = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })
  return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location = '/user'
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddlewate,
    new HttpLink({
      uri: 'https://petgram-api-ashy.vercel.app/graphql'
    })
  ])
})

ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>
  ,
  document.getElementById('app'))
