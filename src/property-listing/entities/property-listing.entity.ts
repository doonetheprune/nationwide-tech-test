import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class PropertyListing {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column()
  propertyType: string;

  @Column()
  headline: string;

  @Column()
  description: string;

  @Column()
  addressLine1: string;

  @Column()
  addressLine2: string;

  @Column()
  addressLine3: string;

  @Column()
  town: string;

  @Column()
  postcode: string;

  @Column()
  numberOfBedrooms: number;

  @Column()
  additionalRooms: number;

  @Column()
  tags: number;
}
