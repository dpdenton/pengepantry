import {QueryOptions} from '@apollo/client/core/watchQueryOptions';
import {DocumentNode} from 'graphql';
import {
  GetRecipeDocument,
  GetRecipesDocument,
  Query,
  QueryRecipeArgs,
} from './models';
import {getClient} from './client';

const makeQuery = <TData, TVariables>(query: DocumentNode) => {
  return (
    options: Omit<QueryOptions<TVariables, TData>, 'query'> = {},
  ): Promise<TData> => {
    return getClient()
      .query<TData, TVariables>({...options, query})
      .then(response => {
        return response.data;
      });
  };
};

export const getRecipeById = makeQuery<Query['recipe'], QueryRecipeArgs>(
  GetRecipeDocument,
);

export const getRecipes = makeQuery<Query['recipes'], undefined>(
  GetRecipesDocument,
);
