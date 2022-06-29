import { Test, TestingModule } from '@nestjs/testing';
import { PropertyListingResolver } from './property-listing.resolver';
import { PropertyListingService } from './property-listing.service';

describe('PropertyListingResolver', () => {
  let resolver: PropertyListingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyListingResolver, PropertyListingService],
    }).compile();

    resolver = module.get<PropertyListingResolver>(PropertyListingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
