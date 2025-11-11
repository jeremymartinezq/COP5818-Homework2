const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  city: String,
  population: Number,
  growthRate: Number,
  density: Number,
  averageAge: Number
});

module.exports = mongoose.model('CityData', DataSchema);

