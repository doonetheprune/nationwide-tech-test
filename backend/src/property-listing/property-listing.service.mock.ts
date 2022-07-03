import { PropertyListing } from './entities/property-listing.entity';

const standardPropertyListing = new PropertyListing();
standardPropertyListing.id = 3;
standardPropertyListing.propertyType = 'Standard Detached';
standardPropertyListing.addressLine1 = 'Test';
standardPropertyListing.propertyType = 'Test';
standardPropertyListing.headline = 'Test';
standardPropertyListing.description = 'Test';
standardPropertyListing.addressLine1 = 'Test';
standardPropertyListing.addressLine2 = null;
standardPropertyListing.addressLine3 = null;
standardPropertyListing.town = null;
standardPropertyListing.postcode = null;
standardPropertyListing.numberOfBedrooms = null;
standardPropertyListing.additionalRooms = null;
standardPropertyListing.tags = null;

export { standardPropertyListing };
