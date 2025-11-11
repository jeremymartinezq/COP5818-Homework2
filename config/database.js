const { Sequelize } = require('sequelize');
require('dotenv').config();

// SQLite - simple file-based database, no server needed!
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

module.exports = sequelize;
