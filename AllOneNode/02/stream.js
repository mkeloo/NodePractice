const fs = require('fs');

const readStream = fs.createReadStream('./lorem.txt', { encoding: 'utf8' });

const writeStream = fs.createWriteStream('./new-lorem.txt');

// readStream.on('data', (chunk) => {
//   console.log('----- NEW CHUNK -----');
//   console.log(chunk);
//   writeStream.write('\nNEW CHUNK\n');
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);
