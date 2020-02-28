var expect  = require('chai').expect;
var request = require('request');

class Vehicle {
    speed = 80;
    constructor(type) {
      this.type = type;
    }
}

it('Main page content', function(done) {
    var v = new Vehicle("test");
    request('http://localhost:8080' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});
