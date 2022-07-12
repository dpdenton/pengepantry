import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  price: number;

  @Field({ nullable: true })
  heroImageUrl?: string;

  @Field()
  lastUpdated: string;
}
