mutation CreatePropertyListing($create: CreatePropertyListingInput!) {
  createPropertyListing(createPropertyListingInput: $create) {
    id
    propertyType
    headline
    description
    addressLine1
  }
}

{
  "create": {
    "propertyType": "Animal",
    "headline": "Test",
    "addressLine1":"Test",
    "description": "test"
  }
}