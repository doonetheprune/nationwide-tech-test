import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePropertyListingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
