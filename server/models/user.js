var mongoose = require('mongoose');

var user = mongoose.model('St. Aidan of Lindisfarne', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = (user);
