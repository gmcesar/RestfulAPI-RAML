const express = require('express');             //Call express
const bodyParser = require('body-parser');      //Call body-parser
const mongoose = require('mongoose');           //Call mongoose

//set up express app
const app = express();

//conect to mongodb
mongoose.connect('mongodb://test:test123@ds243501.mlab.com:43501/njsappdb', { useNewUrlParser: true });

//mongoose.Promise = global.Promise;
app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/apicore'));
app.use('/api/m', require('./routes/apiM'));
app.use('/api/c', require('./routes/apiC'));

//error handling middleware
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(422).send({error: err._message});
});

//listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('Listening!!!');
});
