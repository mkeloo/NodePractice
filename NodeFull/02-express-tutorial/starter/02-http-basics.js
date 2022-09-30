console.log('Express Tutorial');

const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log(req.method);
  const url = req.url;

  // Home Page
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Home Page</h1>');
    res.write('<h2>Welcome to our home page</h2>');
    res.end();
  }
  // About Page
  else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.write('<h2>Welcome to our about page</h2>');
    res.end();
  }
  // 404 Page
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Page</h1>');
    res.write('<h2>Page Not Found</h2>');
    res.end();
  }
});

server.listen(3000);
