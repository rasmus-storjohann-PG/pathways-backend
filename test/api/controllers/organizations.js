var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {
  describe('organizations', function() {
    describe('GET /organizations', function() {
      it('should return all organizations', function(done) {
        request(server)
          .get('/organizations')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.instanceof(Array);
            done();
          });
      });
      it('should return organizations matching query', function(done) {
        var field = 'email';
        var value = 'sanctuary@example.com';
        request(server)
          .get('/organizations?query=' + field + '==' + value)
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
    describe('GET /organizations/{organization_id}', function() {
      it('should return a single organization', function(done) {
        request(server)
          .get('/organizations/' + '1899600a-649c-11e6-8b77-86f30ca893d3')
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
          .get('/organizations/' + '00000000-0000-0000-0000-00000000000') // doesn't exist.
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
    describe('GET /organizations/{organization_id}/phones', function() {
      it('should return a all organization phones', function(done) {
        request(server)
          .get('/organizations/' + '18997068-649c-11e6-8b77-86f30ca893d3' + '/phones')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.instanceof(Array).and.have.lengthOf(2);
            done();
          });
      });
    });
    describe('GET /organizations/{organization_id}/phones/{phone_id}', function() {
      it('should return a single phone', function(done) {
        request(server)
          .get('/organizations/' + '18997068-649c-11e6-8b77-86f30ca893d3' + '/phones/' + '7ed24899-52fb-4e7b-9e25-8d665bec23ea')
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
    describe('GET /organizations/{organization_id}/contacts', function() {
      it('should return all organization contacts', function(done) {
        request(server)
          .get('/organizations/' + '18996320-649c-11e6-8b77-86f30ca893d3' + '/contacts')
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
    describe('GET /organizations/{organization_id}/contacts/{contact_id}', function() {
      it('should return a single contact', function(done) {
        request(server)
          .get('/organizations/' + '18996320-649c-11e6-8b77-86f30ca893d3' + '/contacts/' + 'e887dde4-ce76-4a44-8057-c43bf303a332')
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
    describe('GET /organizations/{organization_id}/locations', function() {
      it('should return a all organization locations', function(done) {
        request(server)
          .get('/organizations/' + '189969f6-649c-11e6-8b77-86f30ca893d3' + '/locations')
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
    describe('GET /organizations/{organization_id}/locations/{location_id}', function() {
      it('should return a single location', function(done) {
        request(server)
          .get('/organizations/' + '189969f6-649c-11e6-8b77-86f30ca893d3' + '/locations/' + '30b843a4-64a1-11e6-8b77-86f30ca893d3')
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
    describe('GET /organizations/{organization_id}/programs/{program_id}/services', function() {
      it('should return a organization programs services', function(done) {
        request(server)
          .get('/organizations/' + '1899600a-649c-11e6-8b77-86f30ca893d3' + '/programs/' + '8822b272-6855-4091-97d3-85fb21590cb2' + '/services')
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
    describe('GET /organizations/{organization_id}/programs/{program_id}/services/{service_id}', function() {
      it('should return a single program service', function(done) {
        request(server)
          .get('/organizations/' + '1899600a-649c-11e6-8b77-86f30ca893d3' + '/programs/' + '8822b272-6855-4091-97d3-85fb21590cb2' + '/services/' + 'c89eb05c-62dd-4b64-b494-0cc347b6ea7f')
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
    describe('GET /organizations/{organization_id}/services', function() {
      it('should return a organization programs services', function(done) {
        request(server)
          .get('/organizations/' + '1899600a-649c-11e6-8b77-86f30ca893d3' + '/services')
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
    describe('GET /organizations/{organization_id}/services/{service_id}', function() {
      it('should return a single program service', function(done) {
        request(server)
          .get('/organizations/' + '1899600a-649c-11e6-8b77-86f30ca893d3' + '/services/' + 'c89eb05c-62dd-4b64-b494-0cc347b6ea7f')
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
