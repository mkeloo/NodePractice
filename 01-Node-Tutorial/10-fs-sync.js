const { readFileSync, writeFileSync } = require('fs');

// different ways to read files
// const fs = require('fs');
// fs.readFileSync('./content/first.txt', 'utf8');
console.log('start');

// the first argument is the path to the file
// the second argument is the encoding
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.table({ first, second });

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);

console.log('done with this task');
console.log('starting the next one');
