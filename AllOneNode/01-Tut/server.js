const os = require('os');
console.log(os.type());
console.log(os.version());
console.log(os.platform());
console.log(os.homedir());
console.log(os.hostname());

console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.uptime());
console.log(__dirname);
console.log(__filename);
console.log(os.arch());
console.log(os.networkInterfaces());
console.log(os.constants);
console.log(os.endianness());
console.log(os.loadavg());
console.log(os.tmpdir());
console.log(os.userInfo());

const path = require('path');
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

const math = require('./math');
console.log(math.add(1, 2));
console.log(math.subtract(1, 2));
console.log(math.multiply(1, 2));
console.log(math.divide(1, 2));

console.log('Different ways to export modules');
const { add, subtract, multiply, divide } = require('./math');
console.log(add(72, 2));
console.log(subtract(2, 2));
console.log(multiply(2, 2));
console.log(divide(13, 2));
