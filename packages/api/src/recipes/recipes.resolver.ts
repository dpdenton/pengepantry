import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Recipe } from './models/recipe.model';
import { RecipesService } from 'src/recipes/recipes.service';

@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(private productsService: RecipesService) {}

  @Query(() => Recipe)
  async recipe(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.findOneById(id);
  }

  @Query(() => [Recipe])
  async recipes() {
    return this.productsService.findAll();
  }
}
