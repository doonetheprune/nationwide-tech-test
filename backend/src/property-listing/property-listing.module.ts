import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyListingService } from './property-listing.service';
import { PropertyListingResolver } from './property-listing.resolver';
import { PropertyListing } from './entities/property-listing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyListing])],
  providers: [PropertyListingResolver, PropertyListingService],
})
export class PropertyListingModule {}
