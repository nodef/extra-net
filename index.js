const net = require('net');
const os = require('os');



const ADDRESS = {
  internal: false,
  family: 'IPv4',
};



function match(test, value) {
  for(var k in test)
    if(value[k]!==test[k]) return false;
  return true;
}

function address(options) {
  var o = Object.assign({}, ADDRESS, options);
  var nis = os.networkInterfaces();
  for(var k in nis) {
    for(var ni of nis[k])
      if(match(o, ni)) return ni;
  }
  return {};
}

function freePort(host) {
  var s = net.createServer();
  return new Promise((fres, frej) => {
    s.listen(0, host, () => {
      var {port} = s.address();
      s.once('close', () => fres(port));
      s.close();
    });
    s.on('error', frej);
  });
}

net.address = address;
net.freePort = freePort;
module.exports = net;
