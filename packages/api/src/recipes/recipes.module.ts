import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesResolver } from './recipes.resolver';

@Module({
  imports: [RecipesModule],
  providers: [RecipesService, RecipesResolver],
})
export class RecipesModule {}
