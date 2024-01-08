const express = require('express');
const app = express();
const port = 3000;
const dateCalculatorController = require('./DateCalculator/route');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');


// app.use(express.static('public'));
app.use(compression());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/date/', dateCalculatorController);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});