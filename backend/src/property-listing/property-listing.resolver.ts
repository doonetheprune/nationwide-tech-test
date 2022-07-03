import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { PropertyListingService } from "./property-listing.service";
import { PropertyListing } from "./entities/property-listing.entity";
import { CreatePropertyListingInput } from "./dto/create-property-listing.input";
import { UpdatePropertyListingInput } from "./dto/update-property-listing.input";
import { ArgsPropertyListing } from "./dto/args-property-listing.input";

@Resolver((of) => PropertyListing)
export class PropertyListingResolver {
  constructor(
    private readonly propertyListingService: PropertyListingService
  ) {
  }

  @Mutation((returns) => PropertyListing)
  createPropertyListing(
    @Args("createPropertyListingInput")
      createPropertyListingInput: CreatePropertyListingInput
  ) {
    return this.propertyListingService.create(createPropertyListingInput);
  }

  @Query((returns) => PropertyListing)
  find(@Args("id", { type: () => Int }) id: number) {
    return this.propertyListingService.findOne(id);
  }

  @Query(() => [PropertyListing])
  findAll(@Args() argsPropertyListing: ArgsPropertyListing): Promise<PropertyListing[]> {
    return this.propertyListingService.findAll();
  }

  @Mutation(() => PropertyListing)
  updatePropertyListing(
    @Args("updatePropertyListingInput")
      updatePropertyListingInput: UpdatePropertyListingInput
  ) {
    // return this.propertyListingService.update(
    //   updatePropertyListingInput.id,
    //   updatePropertyListingInput,
    // );
  }

  @Mutation(() => PropertyListing)
  removePropertyListing(@Args("id", { type: () => Int }) id: number) {
    return this.propertyListingService.remove(id);
  }
}
