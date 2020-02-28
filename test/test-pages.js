var expect  = require('chai').expect;
var request = require('request');

// class Vehicle {
//     speed = 80;
//     constructor(type) {
//       this.type = type;
//     }
// }

// it('Main page content', function(done) {
//     var v = new Vehicle("test");
//     // request('http://localhost:8080' , function(error, response, body) {
//     //     expect(body).to.equal('Hello World');
//     //     done();
//     // });
// });


const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];
if (NODE_MAJOR_VERSION < 13) {
  throw new Error('Requires Node 12 (or higher)');
}
