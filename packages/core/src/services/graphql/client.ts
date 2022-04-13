import { apolloClient as realApolloClient } from 'services/graphql/client.real'
import { apolloClient as mockApolloClient } from 'services/graphql/client.mock'

export const getClient = () => {
  // TODO: update expression to look at USE_MOCK env variable
  return process.env.NODE_ENV === 'development' ? mockApolloClient : realApolloClient
}
