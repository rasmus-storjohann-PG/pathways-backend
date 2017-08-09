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
    });
    describe('GET /locations/{location_id}', function() {
      it('should return a single location', function(done) {
        request(server)
          .get('/locations/' + '30b83fee-64a1-11e6-8b77-86f30ca893d3')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.instanceof(Array)
            done();
          });
      });
      it('should return an empty array', function(done) {
        request(server)
          .get('/locations/' + '00000000-0000-0000-0000-00000000000') // doesn't exist.
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.instanceof(Array)
            res.body.should.be.instanceof(Array).and.have.lengthOf(0);
            done();
          });
      });
    });
  });
});
