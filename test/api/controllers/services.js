var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {
  describe('services', function() {
    describe('GET /services', function() {
      it('should return all services', function(done) {
        request(server)
          .get('/services')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.instanceof(Array);
            done();
          });
      });
      it('should return services matching query', function(done) {
        var field = 'name';
        var value = 'Never Homeless Helpline';
        request(server)
          .get('/services?query=' + field + '==' + value)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.forEach(function(org){
              org[field].should.be.equal(value);
            });
            done();
          });
      });
    });
    describe('GET /services/{service_id}', function() {
      it('should return a single service', function(done) {
        request(server)
          .get('/services/' + 'c89eb05c-62dd-4b64-b494-0cc347b6ea7f')
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
          .get('/services/' + '00000000-0000-0000-0000-00000000000') // doesn't exist.
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
    describe('GET /services/{service_id}/phones', function() {
      it('should return a all service phones', function(done) {
        request(server)
          .get('/services/' + '21a1192b-abb9-45e8-bc52-c81ca4087240' + '/phones')
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
    describe('GET /services/{service_id}/phones/{phone_id}', function() {
      it('should return a single phone', function(done) {
        request(server)
          .get('/services/' + '21a1192b-abb9-45e8-bc52-c81ca4087240' + '/phones/' + '3d257b44-eff1-4a22-9465-7f96710848bf')
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
    describe('GET /services/{service_id}/contacts', function() {
      it('should return all service contacts', function(done) {
        request(server)
          .get('/services/' + '10cbc6ce-0ae5-467f-8069-18e90ec5b037' + '/contacts')
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
    describe('GET /services/{service_id}/contacts/{contact_id}', function() {
      it('should return a single contact', function(done) {
        request(server)
          .get('/services/' + '10cbc6ce-0ae5-467f-8069-18e90ec5b037' + '/contacts/' + '1ffafc60-5b50-4b86-9231-5a698413b96b')
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
