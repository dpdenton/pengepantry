import {ApolloQueryResult} from '@apollo/client';
import {createMockClient} from 'mock-apollo-client';
import {GetRecipeDocument, Query} from 'services/graphql/models';

export const apolloClient = createMockClient();

type MockApolloResult<T> = Pick<
  ApolloQueryResult<Omit<T, '__typename'>>,
  'data'
>;

apolloClient.setRequestHandler(GetRecipeDocument, request => {
  return new Promise<MockApolloResult<Pick<Query, 'recipe'>>>(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          recipe: {
            id: request.id,
            name: 'Bucking Bronco',
            price: 99.99,
            lastUpdated: new Date().toISOString(),
            heroImageUrl: 'https://image.com',
          },
        },
      });
    }, 2000);
  });
});
