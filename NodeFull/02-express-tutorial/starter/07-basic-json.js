const express = require('express');
const app = express();
const { products, people } = require('./data');

app.get('/', (req, res) => {
  //   res.json([{ name: 'john' }, { name: 'susan' }]);
  res.json([products, people]);
});

app.listen(3000, () => {
  console.log('server is listening on port 3000...');
});
