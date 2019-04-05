const ip = require('ip');
const net = require('./');


async function address() {
  var I = 10000;
  var start = process.hrtime.bigint();
  for(var i=0; i<I; i++)
    var {address} = net.address();
  var end = process.hrtime.bigint();
  console.log('net.address() took', (end-start)/BigInt(1000*I), 'us');
}

async function freePort() {
  var I = 1000, _ports = [];
  var start = process.hrtime.bigint();
  for(var i=0; i<I; i++)
    _ports[i] = net.freePort();
  var ports = await Promise.all(_ports);
  var end = process.hrtime.bigint();
  console.log('net.freePort() took', (end-start)/BigInt(1000*I), 'us');
}

async function test() {
  await address();
  await freePort();
}
test();
