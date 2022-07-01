const propertyListingMockData = {
  propertyType: 'Animal',
  headline: 'Test',
  addressLine1: 'Test',
  description: 'test',
};

const createPropertyListingCreateQuery = {
  query:
    'mutation CreatePropertyListing($listing: CreatePropertyListingInput!) {\n  createPropertyListing(createPropertyListingInput: $listing) {\n    id\n    propertyType\n    headline\n    description\n    addressLine1\n  }\n}',
  variables: {
    listing: propertyListingMockData,
  },
};

export { createPropertyListingCreateQuery, propertyListingMockData };
