var models = require('../models');
var con = require('../db');





module.exports = {

  messages: {
    get: function (req, res) {
      // console.log('CONTROLLER from messages.get', req.url, req.method);
      // res.send('hello world');
      var data = '';
      
      con.query('select * from messages', function(err, rows){
        // if(err) throw err;
        data += rows;
        console.log('DATA RECEIVED FROM Db', data);
      });
      
      // // req.on('data', function(chunk) {
      //   data += chunk;
      // });
      // req.on('end', function(data) { console.log(data); });
      // con.end(function(rows) {console.log('DATA RECEIVED FROM DB?????', data);});
      res.end('data', data);
    }, // a function which handles a get request for all messages
    

    post: function (req, res) {

      // var data = "";

      // req.on('data', function(chunk) {
      //   data += chunk;
      // });
      // req.on('end', function(data){
      //   console.log("data", data);
      // });
      // console.log('CONTROLLER from messages.post', req.url, req.method);


      // res.end('CONTROLLER file get method!');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // console.log('CONTROLLER file get req');
    },
    post: function (req, res) {
      // console.log('CONTROLLER file get req');
    }
  }
};


headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};


// exports.sendRedirect = function(response, location, status) {
//   status = status || 302;
//   response.writeHead(status, {Location: location});
//   response.end();
// };

// exports.sendResponse = function(response, obj, status) {
//   status = status || 200;
//   response.writeHead(status, headers);
//   response.end(obj);
// };

// exports.collectData = function(request, callback) {
//   var data = '';
//   request.on('data', function(chunk) {
//     data += chunk;
//   });
//   request.on('end', function() {
//     callback(data);
//   });
// };

// exports.send404 = function(response) {
//   exports.sendResponse(response, '404: Page not found', 404);
// };
