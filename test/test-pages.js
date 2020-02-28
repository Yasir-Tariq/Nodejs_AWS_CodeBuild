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


// if (NODE_MAJOR_VERSION < 13) {
//   throw new Error('Requires Node 12 (or higher)');
// }


const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];
var assert = require('assert');
it('should throw error when the version is not valid', function() {
    assert(NODE_MAJOR_VERSION > 12);
    // if (assert(NODE_MAJOR_VERSION > 12)) {
    //     console.log("OK!");
    // }
    // else{
    //     throw new Error('Requires Node 13 (or higher)');
    // }
    // assert.equal(NODE_MAJOR_VERSION, 13);
    // throw new Error('Requires Node 13 (or higher)');
  });

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the version is not valid', function() {
//       assert(NODE_MAJOR_VERSION > 12, -1);
//     });
//   });
// });