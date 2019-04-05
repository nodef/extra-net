const net = require('net');
const os = require('os');



const OPTIONS = {
  internal: false
};



function match(test, value) {
  for(var k in test)
    if(value[k]!==test[k]) return false;
  return true;
}

function address(options) {
  var o = Object.assign({}, OPTIONS, options);
  var nis = os.networkInterfaces();
  for(var k in nis) {
    for(var ni of nis[k])
      if(match(o, ni)) return ni;
  }
  return {};
}
net.address = address;
module.exports = net;
