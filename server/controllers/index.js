var models = require('../models');





module.exports = {

  messages: {
    get: function (req, res) {
      models.messages.get(function(results) {
        console.log('RESULTS', results);
        console.log('ROWS: ', results);
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    
    post: function (req, res) {
      var params = [req.body.text, req.body.user_id, req.body.room_id];
      console.log('PARAMS: ', params);
      models.messages.post(params, function (err, results){
        if( err ) {
          console.log('error with msg posting', err);
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function ( req, res ) {
    },
    post: function (req, res) {
    }
  }
};