const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const commonPattern = require('../helpers/common');

//get customers
router.get('/customers', function(req, res, next) {
  if(commonPattern.isEmptyObject(req.query)) {
    Customer.find({}).then(function(customers) {
      res.status(200).send(customers);
    });
  } else {
    Customer.find(req.query).then(function(customers) {
      res.status(200).send(customers);
    })﻿;
  }
});
//get a customer
router.get('/customers/:id', function(req, res, next) {
  Customer.find({_id: req.params.id}).then(function(customer) {
    res.status(200).send(customer);
  }).catch(next);
});
//add a new customer to the db
router.post('/customers', function(req, res, next) {
  Customer.create(req.body).then(function(customer) {
    res.status(201).send(customer);
  }).catch(next);
});
//update a customer in the db
router.put('/customers/:id', function(req, res, next) {
  Customer.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
    Customer.findOne({_id: req.params.id}).then(function(customer) {
      res.send(customer);
    });
  }).catch(next);
});
//delete a customer from the db
router.delete('/customers/:id', function(req, res, next) {
  Customer.findByIdAndRemove({_id: req.params.id}).then(function(customer) {
    res.send(customer);
  }).catch(next);
});

module.exports = router;
