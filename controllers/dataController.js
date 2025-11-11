const CityData = require('../models/dataModel');

// CRUD operations
exports.createEntry = async (req, res) => {
  try {
    const entry = new CityData(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await CityData.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEntryById = async (req, res) => {
  try {
    const entry = await CityData.findById(req.params.id);
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
    const updated = await CityData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    await CityData.findByIdAndDelete(req.params.id);
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Question endpoints
exports.getFastestGrowingCity = async (req, res) => {
  try {
    const city = await CityData.findOne().sort({ growthRate: -1 });
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
    const entries = await CityData.find();
    const avgAge = entries.reduce((sum, entry) => sum + entry.averageAge, 0) / entries.length;
    res.json({
      question: 'What is the average age across all cities?',
      answer: avgAge.toFixed(2)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMostPopulousCity = async (req, res) => {
  try {
    const city = await CityData.findOne().sort({ population: -1 });
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
    const city = await CityData.findOne().sort({ density: -1 });
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
    const entries = await CityData.find();
    const totalPop = entries.reduce((sum, entry) => sum + entry.population, 0);
    res.json({
      question: 'What is the total population across all cities?',
      answer: totalPop
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getYoungestCity = async (req, res) => {
  try {
    const city = await CityData.findOne().sort({ averageAge: 1 });
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
    const entries = await CityData.find();
    const avgGrowth = entries.reduce((sum, entry) => sum + entry.growthRate, 0) / entries.length;
    const citiesAboveAvg = entries.filter(entry => entry.growthRate > avgGrowth);
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
    const city = await CityData.findOne().sort({ density: 1 });
    res.json({
      question: 'Which city has the lowest population density?',
      answer: city.city,
      density: city.density
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

