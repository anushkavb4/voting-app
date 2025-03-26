const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vote');

module.exports.User('./user');
module.exports.User('./poll');
