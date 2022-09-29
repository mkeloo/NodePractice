const http = require('http');

// Create a server

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('Welcome to my server!');
  } else if (request.url === '/about') {
    response.end('Here is our short history!');
  } else {
    response.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});
// Listen for requests
server.listen(3000);
