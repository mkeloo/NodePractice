const path = require('path');

// sepator
console.log(path.sep);

// Join paths
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// Base file name: shows the last part of the path
const base = path.basename(filePath);
console.log(base);

// Absolute path (full path): shows the full path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
