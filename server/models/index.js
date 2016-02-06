var db = require('../db');

module.exports = {
  messages: {
    get: function (res, req) {
      console.log('MODEL GET RES: ', res);
      console.log('MODEL GET REQ: ', req);
      console.log('models file get req');
    }, // a function which produces all the messages
    post: function () {
      console.log('models file post req');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('models file get req');
    },
    post: function () {
      console.log('models file get req');
    }
  }
};

