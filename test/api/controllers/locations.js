var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {
  describe('locations', function() {
    describe('GET /locations', function() {
      it('should return all locations', function(done) {
        request(server)
          .get('/locations')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            done();
          });
      });

      it('should return a single location', function(done) {
        request(server)
          .get('/locations/' + '30b83fee-64a1-11e6-8b77-86f30ca893d3')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            done();
          });
      });
    });
  });
});
