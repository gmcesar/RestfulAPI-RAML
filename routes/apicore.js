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
      res.send(customers);
    });
  } else {
    Customer.find(req.query).then(function(customers) {
      res.send(customers);
    })﻿;
  }
  console.log(req.query);
});
//get a customer
router.get('/customers/:id', function(req, res, next) {
  Customer.find({_id: req.params.id}).then(function(customer) {
    res.send(customer);
  });
  console.log(req.query);
});
//add a new customer to the db
router.post('/customers', function(req, res, next) {
  Customer.create(req.body).then(function(customer) {
    console.log('here');
    res.send(customer);
  }).catch(next);
});
//update a customer in the db
router.put('/customers/:id', function(req, res, next) {
  Customer.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
    Customer.findOne({_id: req.params.id}).then(function(customer) {
      res.send(customer);
    });
  });
});
//delete a customer from the db
router.delete('/customers/:id', function(req, res, next) {
  console.log(req.params.id);
  Customer.findByIdAndRemove({_id: req.params.id}).then(function(customer) {
    res.send(customer);
  });
});

module.exports = router;
