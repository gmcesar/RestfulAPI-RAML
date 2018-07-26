const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

//Is an Empty Object
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}
//get customers
router.get('/customers', function(req, res, next) {
  if(isEmptyObject(req.query)) {
    Customer.find({}).then(function(customers) {
      res.status(200).send(customers);
    });
  } else {
    Customer.find(req.query).then(function(customers) {
      res.status(200).send(customers);
    })﻿;
  }
});

module.exports = router;
