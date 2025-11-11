const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Request logging middleware (development only)
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });
}

// Test database connection and sync models
sequelize.authenticate()
  .then(() => {
    console.log('PostgreSQL connected');
    return sequelize.sync({ alter: false });
  })
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api', require('./routes/api'));

// Start server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
