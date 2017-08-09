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
            res.body.should.be.instanceof(Array);
            done();
          });
      });
      it('should return locations matching query', function(done) {
        var field = 'name';
        var value = 'Example City Hall';
        request(server)
          .get('/locations?query=' + field + '==' + value)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.forEach(function(loc){
              loc[field].should.be.equal(value);
            });
            done();
          });
      });
    });
    describe('GET /locations/{location_id}', function() {
      it('should return a single location', function(done) {
        request(server)
          .get('/locations/' + '30b84570-64a1-11e6-8b77-86f30ca893d3')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.instanceof(Array);
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
            res.body.should.be.instanceof(Array).and.have.lengthOf(0);
            done();
          });
      });
    });
    describe('GET /locations/{location_id}/phones', function() {
      it('should return a all location phones', function(done) {
        request(server)
          .get('/locations/' + '30b84570-64a1-11e6-8b77-86f30ca893d3' + '/phones')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.instanceof(Array).and.have.lengthOf(1);
            done();
          });
      });
    });
    describe('GET /locations/{location_id}/phones/{phone_id}', function() {
      it('should return a single phone', function(done) {
        request(server)
          .get('/locations/' + '30b84570-64a1-11e6-8b77-86f30ca893d3' + '/phones/' + '3733e828-58e5-4ff5-9dc6-ae24f92a0f56')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.instanceof(Array).and.have.lengthOf(1);
            done();
          });
      });
    });
  });
});
