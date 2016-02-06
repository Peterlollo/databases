var models = require('../models');
var con = require('../db');





module.exports = {

  messages: {
    get: function (req, res) {
      models.messages.get(function(err, rows) {
        console.log('ROWS: ', rows);
      });
    }, // a function which handles a get request for all messages
    
    post: function (req, res) {
     console.log('REQ query', req.data);
      // models.messages.post(function(err, success) {
      //   console.log('success??', success);
      //   res.send('err, success', err, success);
      // });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.messages.get(function(err, rows) {
        console.log('ROWS: ', rows);
      });
      // console.log('CONTROLLER file get req');
    },
    post: function (req, res) {
      models.users.post(function(err, data){
        console.log('success with our data?', data);
        res.send('success with our data?', data);
      });
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
