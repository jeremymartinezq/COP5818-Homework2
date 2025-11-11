const express = require('express');
const router = express.Router();
const {
  createEntry,
  getAllEntries,
  getEntryById,
  updateEntry,
  deleteEntry,
  getFastestGrowingCity,
  getAverageAge,
  getMostPopulousCity,
  getHighestDensityCity,
  getTotalPopulation,
  getYoungestCity,
  getCitiesAboveAverageGrowth,
  getLeastDenseCity
} = require('../controllers/dataController');

// CRUD routes
router.post('/data', createEntry);
router.get('/data', getAllEntries);
router.get('/data/:id', getEntryById);
router.put('/data/:id', updateEntry);
router.delete('/data/:id', deleteEntry);

// Question endpoints
router.get('/questions/fastest-growing-city', getFastestGrowingCity);
router.get('/questions/average-age', getAverageAge);
router.get('/questions/most-populous-city', getMostPopulousCity);
router.get('/questions/highest-density-city', getHighestDensityCity);
router.get('/questions/total-population', getTotalPopulation);
router.get('/questions/youngest-city', getYoungestCity);
router.get('/questions/cities-above-average-growth', getCitiesAboveAverageGrowth);
router.get('/questions/least-dense-city', getLeastDenseCity);

module.exports = router;

