var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


//http://www.sitepoint.com/using-node-mysql-javascript-client/
var con = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: 'hitesh',
  database: 'chat'
});

con.connect(function(err) {
  if( err ) {
    console.log('Error connecting to db, friend', err);
    return;
  }
  console.log('Connection is like so established');
});

// con.end(function ( err ) {
//   console.log(err);
// });

module.exports = con;