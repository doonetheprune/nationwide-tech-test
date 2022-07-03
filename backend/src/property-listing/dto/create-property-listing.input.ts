import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreatePropertyListingInput {
  @Field(() => String, {
    description: 'Type of property i.e Detached, Semi-Detached etc or not.',
  })
  propertyType: string;

  @Field(() => String, {
    description:
      'Headline for the listing, what is shown when all the listing are shown',
  })
  headline: string;

  @Field(() => String, {
    description:
      'Description for the listing, this would be what they see when click into the listing',
  })
  description: string;

  @Field(() => String)
  addressLine1: string;

  addressLine2: string;

  addressLine3: string;
}
