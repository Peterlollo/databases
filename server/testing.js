// var express = require('express');
// var con = require('./db');
// var app = express();
// console.log('before');
// con.query('select * from messages', function(err, rows){
//   // if(err) throw err;
//   console.log('DATA RECEIVED FROM Db TESTING', rows);
// });

// console.log('after');
//       

var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}


console.log('before');
app.query('select * from messages', function(err, rows){
  // if(err) throw err;
  console.log('DATA RECEIVED FROM Db TESTING', rows);
});

console.log('after');
