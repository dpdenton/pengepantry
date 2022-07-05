import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field(() => ID)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  price: number;

  @Field({ nullable: true })
  heroImageUrl?: string;

  @Field(() => GraphQLISODateTime)
  lastUpdated: string;
}
