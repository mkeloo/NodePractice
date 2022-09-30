const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('Hello World');
});

// const newServer = http.createServer((req, res) => {
//   console.log('2000 request event');
//   res.end('Hello New World');
// });

// server.listen(2000, () => {
//   console.log('Server listening on port : 5000....');
// });

server.listen(3000, () => {
  console.log('Server listening on port : 3000....');
});
