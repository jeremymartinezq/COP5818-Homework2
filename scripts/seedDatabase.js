const sequelize = require('../config/database');
const CityData = require('../models/dataModel');
const sampleData = require('../sampleData.json');
require('dotenv').config();

// Seed the database
async function seedDatabase() {
  try {
    // Connect to PostgreSQL
    await sequelize.authenticate();
    console.log('PostgreSQL connected');
    
    // Sync database (create tables if they don't exist)
    await sequelize.sync({ force: true });
    console.log('Database synced and cleared');
    
    // Insert sample data
    await CityData.bulkCreate(sampleData);
    console.log('Sample data inserted successfully');
    console.log(`Inserted ${sampleData.length} cities`);
    
    await sequelize.close();
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

seedDatabase();
