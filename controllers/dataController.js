const CityData = require('../models/dataModel');
const { Op } = require('sequelize');

// CRUD operations
exports.createEntry = async (req, res) => {
  try {
    const entry = await CityData.create(req.body);
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await CityData.findAll();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEntryById = async (req, res) => {
  try {
    const entry = await CityData.findByPk(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const entry = await CityData.findByPk(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    await entry.update(req.body);
    res.json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const entry = await CityData.findByPk(req.params.id);
    if (entry) {
      await entry.destroy();
    }
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Question endpoints
exports.getFastestGrowingCity = async (req, res) => {
  try {
    const city = await CityData.findOne({
      order: [['growthRate', 'DESC']]
    });
    res.json({
      question: 'What is the fastest growing city?',
      answer: city.city
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAverageAge = async (req, res) => {
  try {
    const sequelize = require('../config/database');
    const result = await CityData.findOne({
      attributes: [[sequelize.fn('AVG', sequelize.col('averageAge')), 'avgAge']],
      raw: true
    });
    res.json({
      question: 'What is the average age across all cities?',
      answer: parseFloat(result.avgAge).toFixed(2)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMostPopulousCity = async (req, res) => {
  try {
    const city = await CityData.findOne({
      order: [['population', 'DESC']]
    });
    res.json({
      question: 'What is the most populous city?',
      answer: city.city,
      population: city.population
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHighestDensityCity = async (req, res) => {
  try {
    const city = await CityData.findOne({
      order: [['density', 'DESC']]
    });
    res.json({
      question: 'Which city has the highest population density?',
      answer: city.city,
      density: city.density
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTotalPopulation = async (req, res) => {
  try {
    const sequelize = require('../config/database');
    const result = await CityData.findOne({
      attributes: [[sequelize.fn('SUM', sequelize.col('population')), 'totalPop']],
      raw: true
    });
    res.json({
      question: 'What is the total population across all cities?',
      answer: parseInt(result.totalPop)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getYoungestCity = async (req, res) => {
  try {
    const city = await CityData.findOne({
      order: [['averageAge', 'ASC']]
    });
    res.json({
      question: 'Which city has the youngest average age?',
      answer: city.city,
      averageAge: city.averageAge
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCitiesAboveAverageGrowth = async (req, res) => {
  try {
    const sequelize = require('../config/database');
    const avgResult = await CityData.findOne({
      attributes: [[sequelize.fn('AVG', sequelize.col('growthRate')), 'avgGrowth']],
      raw: true
    });
    const avgGrowth = parseFloat(avgResult.avgGrowth);
    
    const citiesAboveAvg = await CityData.findAll({
      where: {
        growthRate: { [Op.gt]: avgGrowth }
      }
    });
    
    res.json({
      question: 'How many cities have growth rates above the average?',
      answer: citiesAboveAvg.length,
      averageGrowthRate: avgGrowth.toFixed(2),
      cities: citiesAboveAvg.map(c => c.city)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLeastDenseCity = async (req, res) => {
  try {
    const city = await CityData.findOne({
      order: [['density', 'ASC']]
    });
    res.json({
      question: 'Which city has the lowest population density?',
      answer: city.city,
      density: city.density
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
