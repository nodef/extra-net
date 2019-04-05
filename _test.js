const ip = require('ip');
const net = require('./');


const ITERATIONS = 10000;


var start = process.hrtime.bigint();
for(var i=0; i<ITERATIONS; i++)
  var {address} = net.address();
var end = process.hrtime.bigint();
console.log('net.address() took', end-start);


var start = process.hrtime.bigint();
for(var i=0; i<ITERATIONS; i++)
  var {address} = ip.address();
var end = process.hrtime.bigint();
console.log('ip.address() took', end-start);

