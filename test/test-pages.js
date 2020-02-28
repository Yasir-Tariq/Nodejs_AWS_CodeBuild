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
console.log(NODE_MAJOR_VERSION);
// const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];
var assert = require('assert');
it('should throw error when the version is not valid', function() {
    if (NODE_MAJOR_VERSION > 12)
        assert.ok(true, "Node version is compatible");
    else
        assert.fail("Node version is not compatible");
});

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the version is not valid', function() {
//       assert(NODE_MAJOR_VERSION > 12, -1);
//     });
//   });
// });

// const NODE_MAJOR_VERSION = 22;
// // const NODE_MAJOR_VERSION = process.versions.node.split('.')[0];
// console.log(NODE_MAJOR_VERSION);
// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('Node Version Check', function() {
//       assert.equal([10,11,12,13].indexOf(NODE_MAJOR_VERSION), -1);
//     });
//   });
// });



// // const NODE_MAJOR_VERSION = 22;
// // var assert = require('assert');
// // assert.equal(22, NODE_MAJOR_VERSION, "My message goes here");