import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class PropertyListing {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Field(() => String)
  @Column()
  propertyType: string;

  @Field(() => String)
  @Column()
  headline: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => String)
  @Column()
  addressLine1: string;

  @Column({ nullable: true })
  addressLine2: string;

  @Column({ nullable: true })
  addressLine3: string;

  @Column({ nullable: true })
  town: string;

  @Column({ nullable: true })
  postcode: string;

  @Column({ default: 0 })
  numberOfBedrooms: number;

  @Column({ nullable: true })
  additionalRooms: string;

  @Column({ nullable: true })
  tags: string;
}
