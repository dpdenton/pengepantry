import {faker} from '@faker-js/faker';
import {Recipe} from 'services/graphql/models';

const generateId = () => {
  return Math.round(Math.random() * -1000000000);
};

export const mockRecipe = (params?: {defaults?: Partial<Recipe>}): Recipe => {
  const {defaults} = params ?? {};
  return {
    id: defaults?.id ?? generateId(),
    name: defaults?.name ?? faker.name.jobDescriptor(),
    price: defaults?.price ?? parseInt(faker.commerce.price(1, 10)),
    lastUpdated: defaults?.lastUpdated ?? '2022-02-02T00:00:00.000Z',
    heroImageUrl: defaults?.heroImageUrl ?? faker.image.imageUrl(400, 400),
  };
};
