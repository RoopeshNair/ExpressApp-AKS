var request = require('supertest');
var server = require('../app');

describe('loading express', function () {
    beforeEach(function () {
        
    });

    afterEach(function () {

    });

    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });

    it('responds to /users', function testPath(done) {
        request(server)
            .get('/users')
            .expect(200, done);
    });

    it('404 everything else', function testPath(done) {
        request(server)
            .get('/files')
            .expect(404, done);
    });
});