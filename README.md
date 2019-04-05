Support methods for net module.
> - Need machine's public IP address?<br>



```javascript
const net = require('extra-net');


var {family, address} = net.address();
// family: 'IPv4', address: '192.168.1.7'

var port = await net.freePort();
// port: 37567
```
<br>



## reference

```javascript
const net = require('extra-net');
// : includes all functions of "net"


net.address([options]);
options = {
  internal: Boolean, // true | false (default)
  address: String,   // 'IPv4' | 'IPv6'
  netmask: String,   // e.g., '255.255.255.0'
}
-> {address, netmask, family, mac, internal, cidr}


net.freePort([host]);
host = String  // e.g., '127.0.0.1'
-> Promise port
```
