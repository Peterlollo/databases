var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
     var queryStr = 'select m.text, u.name from messages m inner join users u on (m.user_id = u.id);';
     db.query(queryStr, function(err, result) {
      callback( result );
     });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryStr = 'insert into messages(text, user_id, room_id) values (?, ?, ?)';
      db.query(queryStr, params, function(err, result) {
        callback( result );
      });
      }
      // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
    },
    post: function (callback) {
    }
  }
};

