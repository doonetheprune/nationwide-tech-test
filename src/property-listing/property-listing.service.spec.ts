import { Test, TestingModule } from '@nestjs/testing';
import { PropertyListingService } from './property-listing.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PropertyListing } from './entities/property-listing.entity';
import { Repository } from 'typeorm';
import { standardPropertyListing } from './property-listing.resolver.mock';

describe('PropertyListingService', () => {
  const REPOSITORY_TOKEN = getRepositoryToken(PropertyListing);

  let service: PropertyListingService;
  let respository: Repository<PropertyListing>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PropertyListingService,
        {
          provide: REPOSITORY_TOKEN,
          useValue: {
            save: jest.fn(),
            findOneBy: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PropertyListingService>(PropertyListingService);
    respository = module.get<Repository<PropertyListing>>(REPOSITORY_TOKEN);
  });

  it('should be defined - service', () => {
    expect(service).toBeDefined();
  });

  it('should be defined - repository', () => {
    expect(service).toBeDefined();
  });

  it('should create and return a property listing', async () => {
    jest
      .spyOn(respository, 'save')
      .mockImplementation(() => Promise.resolve(standardPropertyListing));

    await expect(
      service.create(standardPropertyListing),
    ).resolves.toStrictEqual(standardPropertyListing);
  });

  it('should return a property listing', async () => {
    jest
      .spyOn(respository, 'findOneBy')
      .mockImplementation(() => Promise.resolve(standardPropertyListing));

    await expect(service.findOne(34)).resolves.toStrictEqual(
      standardPropertyListing,
    );
  });

  it('should return a promise after delete', async () => {
    jest
      .spyOn(respository, 'delete')
      .mockImplementation(() => Promise.resolve(undefined));

    await expect(service.remove(34)).toBeInstanceOf(Promise);
  });
});
