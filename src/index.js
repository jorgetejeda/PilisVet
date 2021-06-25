import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import App from './App'
import AppProvider from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-api-ashy.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>
  ,
  document.getElementById('app'))
