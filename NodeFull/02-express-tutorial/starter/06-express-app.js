const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware
// static files are files that server doesnt need to change it
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
//   1. adding to static assets like public folder
//   2. Server-Side Rendering (SSR)
// });

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000....');
});
