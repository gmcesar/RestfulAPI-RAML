const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create customer Schema and Model
const CustomerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  lastName: {
    type: String,
    required: [true, 'LastName field is required']
  },
  addresses: [String]
});

//Structure example


//const Customer = mongoose.model('customer', CustomerSchema);
module.exports = mongoose.model('customer', CustomerSchema);
