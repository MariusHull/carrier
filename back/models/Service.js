var mongoose = require('mongoose');

var ServiceSchema = new mongoose.Schema({
    name: String,
    adress: String,
    password: String,
    logoPath: String,
    updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Service', ServiceSchema);
