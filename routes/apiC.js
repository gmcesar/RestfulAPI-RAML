const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

//Is an Empty Object
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}
//get customers
router.get('/customers', function(req, res, next) {
  if(req.query.copy === 'true') {
    console.log('copy');
    Customer.find({}).then(function(customers) {
      res.status(200).send(customers);
    });/*
    Customer.find(req.query).then(function(customers) {
      res.status(200).send(customers);
    })﻿;*/
  } else {
    res.status(400).send('Bad Request');
  }
});

module.exports = router;
