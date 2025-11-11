const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CityData = sequelize.define('CityData', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  population: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  growthRate: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  density: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  averageAge: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'city_data',
  timestamps: true
});

module.exports = CityData;
