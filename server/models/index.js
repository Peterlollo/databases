var con = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
     var query = 'select * from messages';
     con.query(query, callback);
    }, // a function which produces all the messages
    post: function (callback, post) {
      // var post  = {id: 5, text: 'mysql dude', time: '4', user_id: 1, room_id: 1};
      callback( post );
      var query = 'INSERT INTO messages SET ?';
      callback( con.query(query, post) );
      }
      // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
     var query = 'select * from users';
     con.query(query, callback);
    },
    post: function (callback) {
      var post  = {id: 2, name: 'MySQL baby!'};
      var query = 'INSERT INTO users SET ?';
      con.query(query, post, callback);
    }
  }
};

