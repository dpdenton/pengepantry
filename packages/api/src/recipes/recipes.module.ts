import { Module } from '@nestjs/common';
import { RecipesService, MockRecipesService } from './recipes.service';
import { RecipesResolver } from './recipes.resolver';

@Module({
  imports: [RecipesModule],
  providers: [
    {
      provide: RecipesService,
      useClass: MockRecipesService,
    },
    RecipesResolver,
  ],
})
export class RecipesModule {}
