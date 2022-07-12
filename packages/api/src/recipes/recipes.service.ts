import { Recipe } from 'src/recipes/models/recipe.model';
import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

export interface IRecipesService {
  findOneById(id: number): Recipe;
  findAll: () => Recipe[];
}

export class RecipesService implements IRecipesService {
  public findOneById(id: number): Recipe {
    return {
      id,
      name: 'Real Service',
      price: parseFloat(faker.commerce.price(1, 100)),
      lastUpdated: faker.date.past().toISOString(),
      heroImageUrl: faker.image.imageUrl(),
    };
  }
  public findAll(): Recipe[] {
    return [];
  }
}

@Injectable()
export class MockRecipesService implements IRecipesService {
  public findOneById(id: number): Recipe {
    return {
      id,
      name: faker.lorem.words(5),
      price: parseFloat(faker.commerce.price(1, 100)),
      lastUpdated: faker.date.past().toISOString(),
      heroImageUrl: faker.image.imageUrl(),
    };
  }
  public findAll(): Recipe[] {
    return [];
  }
}
