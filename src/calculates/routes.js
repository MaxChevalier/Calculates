const express = require('express');
const router = express.Router();
const calculates = require('./calculates');

router.get('/add/:a/:b', (req, res) => {
  const result = calculates.add(parseInt(req.params.a), parseInt(req.params.b));
  res.send("Result: " + result);
});

router.get('/subtract/:a/:b', (req, res) => {
    const result = calculates.subtract(parseInt(req.params.a), parseInt(req.params.b));
    res.send("Result: " + result);
  });
  
  router.get('/multiply/:a/:b', (req, res) => {
    const result = calculates.multiply(parseInt(req.params.a), parseInt(req.params.b));
    res.send("Result: " + result);
  });
  
  router.get('/divide/:a/:b', (req, res) => {
    const result = calculates.divide(parseInt(req.params.a), parseInt(req.params.b));
    res.send("Result: " + result);
  });
  
  module.exports = router;