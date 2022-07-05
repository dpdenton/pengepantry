import { Recipe } from 'src/recipes/models/recipe.model';

export class RecipesService {
  public findOneById(id: number): Recipe {
    return {
      id,
      name: 'A product',
      price: 123,
      lastUpdated: '2022-02-02T00:00:00',
    };
  }
  public findAll(): Recipe[] {
    return [];
  }
}
