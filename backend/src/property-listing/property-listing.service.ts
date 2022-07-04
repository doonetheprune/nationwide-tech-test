import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePropertyListingInput } from './dto/create-property-listing.input';
import { UpdatePropertyListingInput } from './dto/update-property-listing.input';
import { PropertyListing } from './entities/property-listing.entity';

@Injectable()
export class PropertyListingService {
  constructor(
    @InjectRepository(PropertyListing)
    private propertyListingRepository: Repository<PropertyListing>,
  ) {}

  create(
    createPropertyListingInput: CreatePropertyListingInput,
  ): Promise<PropertyListing> {
    return this.propertyListingRepository.save(createPropertyListingInput);
  }

  update(
    id: number,
    updatePropertyListingInput: UpdatePropertyListingInput,
  ): Promise<PropertyListing> {
    this.propertyListingRepository.update({ id }, updatePropertyListingInput);
    return this.findOne(id);
  }

  findAll(): Promise<PropertyListing[]> {
    return this.propertyListingRepository.find();
  }

  findOne(id: number): Promise<PropertyListing> {
    return this.propertyListingRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.propertyListingRepository.delete(id);
  }
}
