const mongoose = require('mongoose');
const CityData = require('../models/dataModel');
const sampleData = require('../sampleData.json');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/hw2db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(async () => {
    console.log('MongoDB connected');
    
    // Clear existing data
    await CityData.deleteMany({});
    console.log('Cleared existing data');
    
    // Insert sample data
    await CityData.insertMany(sampleData);
    console.log('Sample data inserted successfully');
    
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });

