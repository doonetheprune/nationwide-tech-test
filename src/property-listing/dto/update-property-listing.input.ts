import { CreatePropertyListingInput } from './create-property-listing.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePropertyListingInput extends PartialType(CreatePropertyListingInput) {
  @Field(() => Int)
  id: number;
}
