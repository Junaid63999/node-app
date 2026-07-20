var request = require('supertest');
var app = require('../index.js');

describe('GET /', function () {

    it('respond with 200 success', function (done) {

        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {

                if (err) {
                    console.error(err);
                    return done(err);
                }

                done();
            });

    });

});
