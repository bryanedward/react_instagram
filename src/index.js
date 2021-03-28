import React from 'react'
import ReactDom from 'react-dom'
import { App } from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'


const client = new ApolloClient({
    uri: 'https://node-bryan-react-server.vercel.app/graphql',
})

ReactDom.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById("root"))
