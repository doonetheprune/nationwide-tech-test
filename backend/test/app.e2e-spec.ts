import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { _ } from 'lodash';
import {
  propertyListingMockData,
  createPropertyListingCreateQuery,
} from './mocks/propertyLising';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    //@TODO Clean up the database after each test

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('PropertyListingResolver', () => {
    it('Create a property listing', () => {
      return request(app.getHttpServer())
        .post('/graphql')
        .set('content-type', 'application/json')
        .send(createPropertyListingCreateQuery)
        .expect(200)
        .expect((res) => {
          const body = res.body;
          _.forEach(propertyListingMockData, (value, key) => {
            const valueInResult = _.get(
              body,
              ['data', 'createPropertyListing', key],
              null,
            );
            expect(valueInResult).toEqual(value);
          });
        });
    });
    it('Create a property listing', () => {
      //@TODO Create an item in the database to use to find the item
    });
  });
});
