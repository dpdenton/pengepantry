import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: 'localhost:3000/graphql',
  cache: new InMemoryCache(),
})
