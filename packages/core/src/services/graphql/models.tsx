import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: string;
};

export type Query = {
  __typename?: 'Query';
  recipe: Recipe;
  recipes: Array<Recipe>;
};


export type QueryRecipeArgs = {
  id: Scalars['Int'];
};

export type Recipe = {
  __typename?: 'Recipe';
  heroImageUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastUpdated: Scalars['DateTime'];
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type GetRecipeQueryVariables = Exact<{
  recipeId: Scalars['Int'];
}>;


export type GetRecipeQuery = { __typename?: 'Query', recipe: { __typename?: 'Recipe', id: string, name: string, price: number, heroImageUrl?: string | null, lastUpdated: string } };


export const GetRecipeDocument = gql`
    query GetRecipe($recipeId: Int!) {
  recipe(id: $recipeId) {
    id
    name
    price
    heroImageUrl
    lastUpdated
  }
}
    `;

/**
 * __useGetRecipeQuery__
 *
 * To run a query within a React component, call `useGetRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeQuery({
 *   variables: {
 *      recipeId: // value for 'recipeId'
 *   },
 * });
 */
export function useGetRecipeQuery(baseOptions: Apollo.QueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, options);
      }
export function useGetRecipeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, options);
        }
export type GetRecipeQueryHookResult = ReturnType<typeof useGetRecipeQuery>;
export type GetRecipeLazyQueryHookResult = ReturnType<typeof useGetRecipeLazyQuery>;
export type GetRecipeQueryResult = Apollo.QueryResult<GetRecipeQuery, GetRecipeQueryVariables>;