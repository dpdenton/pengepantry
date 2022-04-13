import { getClient } from 'services/graphql/client'
import { GetRecipeDocument, Query, QueryRecipeArgs, Recipe } from 'services/graphql/models'

const apolloClient = getClient()

export const getRecipeById = (): Promise<Recipe> => {
  return apolloClient
    .query<Query['recipe'], QueryRecipeArgs>({
      query: GetRecipeDocument,
      variables: {
        id: 1,
      },
    })
    .then((response) => response.data)
}
