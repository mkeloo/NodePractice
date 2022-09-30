const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('user hit the resource');
  res.status(200).send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.status(200).send('<h1>About Page</h1>');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(3000, () => {
  console.log('server is listening on port 3000...');
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
