var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {
  describe('contacts', function() {
    describe('GET /contacts', function() {
      it('should return all contacts', function(done) {
        request(server)
          .get('/contacts')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.instanceof(Array);
            done();
          });
      });
      it('should return contacts matching query', function(done) {
        var field = 'name';
        var value = 'Betsy Barus';
        request(server)
          .get('/contacts?query=' + field + '==' + value)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.forEach(function(con){
              con.name.should.be.equal(value);
            });
            done();
          });
      });
    });
    describe('GET /contact/{contact_id}', function() {
      it('should return a single contact', function(done) {
        request(server)
          .get('/contacts/' + 'e887dde4-ce76-4a44-8057-c43bf303a332')
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
          .get('/contacts/' + '00000000-0000-0000-0000-00000000000') // doesn't exist.
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
    describe('GET /contacts/{contact_id}/phones', function() {
      it('should return a single contact', function(done) {
        request(server)
          .get('/contacts/' + '4a318a8e-b65e-4da3-800b-3d1e92407a95' + '/phones')
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
    describe('GET /contacts/{contact_id}/phones/{phone_id}', function() {
      it('should return a single contact', function(done) {
        request(server)
          .get('/contacts/' + '4a318a8e-b65e-4da3-800b-3d1e92407a95' + '/phones/' + 'e9c19752-c8d4-494f-b527-b65c9c86c8ce')
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
