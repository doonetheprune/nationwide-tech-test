import { Test, TestingModule } from '@nestjs/testing';
import { PropertyListingResolver } from './property-listing.resolver';
import { PropertyListingService } from './property-listing.service';
import { standardPropertyListing } from './property-listing.resolver.mock';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PropertyListing } from './entities/property-listing.entity';

describe('PropertyListingResolver', () => {
  let resolver: PropertyListingResolver;
  let service: PropertyListingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PropertyListingResolver,
        PropertyListingService,
        {
          provide: getRepositoryToken(PropertyListing),
          useValue: { create: jest.fn(), save: jest.fn(), findOne: jest.fn() },
        },
      ],
    }).compile();

    resolver = module.get<PropertyListingResolver>(PropertyListingResolver);
    service = module.get<PropertyListingService>(PropertyListingService);
  });

  it('should return a property listing', async () => {
    jest
      .spyOn(service, 'create')
      .mockImplementation(() => Promise.resolve(standardPropertyListing));

    await expect(
      resolver.createPropertyListing(standardPropertyListing),
    ).resolves.toStrictEqual(standardPropertyListing);
  });
});
