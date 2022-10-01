const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./starter/logger.js');
const authorize = require('./starter/authorize.js');

//  req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// app.use([logger, authorize]);
//api/home/about/products
// app.use(express.static('./public'));

// third party middleware functions
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('Items');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000....');
});
