const supertest = require('supertest');
const server = require('../api/server');
const faker = require('faker');

describe('server', () => {
    describe('GET /', () => {
      it('responds with 200 ok', () => {
        return supertest(server)
          .get('/')
          .expect(200);
      });
    });
});