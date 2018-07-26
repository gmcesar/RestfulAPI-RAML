const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

//get a customer
router.get('/customers/:id', function(req, res, next) {
  Customer.find({_id: req.params.id}).then(function(customer) {
    res.status(200).send(customer);
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

module.exports = router;
