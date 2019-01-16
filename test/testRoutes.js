var expect = require ('chai').expect;
var request = require ('request');

describe('Status and content', function () {
	describe('tasks', function () {
		it('status', function(done){
			request('http://localhost:3001/task', function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				done();
			});
		});
		it('content', function(done) {
			request('http://localhost:3001/task', function(error, response, body) {
				expect(body).to.be.a('string');
				done();
			});
		});
	});
	describe('completed', function () {
		it('status', function(done){
			request('http://localhost:3001/completed', function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				done();
			});
		});
		it('content', function(done) {
			request('http://localhost:3001/completed', function(error, response, body) {
				expect(body).to.be.a('string');
				done();
			});
		});
	});
});