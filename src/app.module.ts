import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyListingModule } from './property-listing/property-listing.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyListing } from './property-listing/entities/property-listing.entity';

@Module({
  imports: [
    PropertyListingModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'property-listing',
      entities: [PropertyListing],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
