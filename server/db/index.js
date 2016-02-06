var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


//http://www.sitepoint.com/using-node-mysql-javascript-client/
var con = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: 'peter',
  database: 'chat'
});

con.connect()



module.exports = con;