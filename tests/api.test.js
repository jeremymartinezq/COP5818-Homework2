const request = require('supertest');
const sequelize = require('../config/database');
const app = require('../app');
const CityData = require('../models/dataModel');

beforeAll(async () => {
  // SQLite test database
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  // Clean up and close connection
  await CityData.destroy({ where: {}, truncate: true });
  await sequelize.close();
});

describe('CRUD Operations', () => {
  let createdId;

  test('POST /api/data - should create a new entry', async () => {
    const response = await request(app)
      .post('/api/data')
      .send({
        city: 'Test City',
        population: 100000,
        growthRate: 3.5,
        density: 1500,
        averageAge: 32
      });
    
    expect(response.status).toBe(201);
    expect(response.body.city).toBe('Test City');
    createdId = response.body.id;
  });

  test('GET /api/data - should get all entries', async () => {
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /api/data/:id - should get entry by ID', async () => {
    const response = await request(app).get(`/api/data/${createdId}`);
    expect(response.status).toBe(200);
    expect(response.body.city).toBe('Test City');
  });

  test('PUT /api/data/:id - should update an entry', async () => {
    const response = await request(app)
      .put(`/api/data/${createdId}`)
      .send({ population: 110000 });
    
    expect(response.status).toBe(200);
    expect(response.body.population).toBe(110000);
  });

  test('DELETE /api/data/:id - should delete an entry', async () => {
    const response = await request(app).delete(`/api/data/${createdId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Entry deleted');
  });
});

describe('Question Endpoints', () => {
  beforeAll(async () => {
    // Insert test data
    await CityData.bulkCreate([
      { city: 'City A', population: 100000, growthRate: 2.5, density: 1200, averageAge: 30 },
      { city: 'City B', population: 200000, growthRate: 3.8, density: 1500, averageAge: 35 },
      { city: 'City C', population: 150000, growthRate: 1.2, density: 1000, averageAge: 40 }
    ]);
  });

  test('GET /api/questions/fastest-growing-city - should return fastest growing city', async () => {
    const response = await request(app).get('/api/questions/fastest-growing-city');
    expect(response.status).toBe(200);
    expect(response.body.question).toBeDefined();
    expect(response.body.answer).toBe('City B');
  });

  test('GET /api/questions/average-age - should return average age', async () => {
    const response = await request(app).get('/api/questions/average-age');
    expect(response.status).toBe(200);
    expect(response.body.question).toBeDefined();
    expect(parseFloat(response.body.answer)).toBeCloseTo(35, 0);
  });

  test('GET /api/questions/most-populous-city - should return most populous city', async () => {
    const response = await request(app).get('/api/questions/most-populous-city');
    expect(response.status).toBe(200);
    expect(response.body.question).toBeDefined();
    expect(response.body.answer).toBe('City B');
    expect(response.body.population).toBe(200000);
  });

  test('GET /api/questions/highest-density-city - should return highest density city', async () => {
    const response = await request(app).get('/api/questions/highest-density-city');
    expect(response.status).toBe(200);
    expect(response.body.question).toBeDefined();
    expect(response.body.answer).toBe('City B');
  });

  test('GET /api/questions/total-population - should return total population', async () => {
    const response = await request(app).get('/api/questions/total-population');
    expect(response.status).toBe(200);
    expect(response.body.question).toBeDefined();
    expect(response.body.answer).toBe(450000);
  });

  test('GET /api/questions/youngest-city - should return youngest city', async () => {
    const response = await request(app).get('/api/questions/youngest-city');
    expect(response.status).toBe(200);
    expect(response.body.question).toBeDefined();
    expect(response.body.answer).toBe('City A');
  });

  test('GET /api/questions/cities-above-average-growth - should return cities above average growth', async () => {
    const response = await request(app).get('/api/questions/cities-above-average-growth');
    expect(response.status).toBe(200);
    expect(response.body.question).toBeDefined();
    expect(response.body.answer).toBeGreaterThan(0);
  });

  test('GET /api/questions/least-dense-city - should return least dense city', async () => {
    const response = await request(app).get('/api/questions/least-dense-city');
    expect(response.status).toBe(200);
    expect(response.body.question).toBeDefined();
    expect(response.body.answer).toBe('City C');
  });
});
