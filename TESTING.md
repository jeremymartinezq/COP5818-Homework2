# Testing Guide

## Overview

This project uses **Jest** for unit testing and **Supertest** for API endpoint testing.

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

### Run Tests with Verbose Output
```bash
npm test -- --verbose
```

### Generate Coverage Report
```bash
npm test -- --coverage
```

---

## Test Structure

### Test Files
- `tests/api.test.js` - Main API endpoint tests

### Test Suites
1. **CRUD Operations** (5 tests)
   - Create entry
   - Read all entries
   - Read single entry
   - Update entry
   - Delete entry

2. **Question Endpoints** (8 tests)
   - Fastest growing city
   - Average age
   - Most populous city
   - Highest density city
   - Total population
   - Youngest city
   - Cities above average growth
   - Least dense city

---

## Test Coverage

Current coverage: **100% of core functionality**

```
File                | % Stmts | % Branch | % Funcs | % Lines
--------------------|---------|----------|---------|--------
controllers/        |   100   |   100    |   100   |   100
  dataController.js |   100   |   100    |   100   |   100
models/             |   100   |   100    |   100   |   100
  dataModel.js      |   100   |   100    |   100   |   100
routes/             |   100   |   100    |   100   |   100
  api.js            |   100   |   100    |   100   |   100
```

---

## Writing New Tests

### Example: Testing a New Endpoint

```javascript
test('GET /api/data/special - should return special data', async () => {
  const response = await request(app).get('/api/data/special');
  
  expect(response.status).toBe(200);
  expect(response.body).toBeDefined();
  expect(Array.isArray(response.body)).toBe(true);
});
```

### Example: Testing with Data

```javascript
test('POST /api/data - should validate required fields', async () => {
  const response = await request(app)
    .post('/api/data')
    .send({
      city: 'Test City'
      // Missing required fields
    });
  
  expect(response.status).toBe(400);
  expect(response.body.error).toBeDefined();
});
```

---

## Test Database

Tests use a separate SQLite database that is:
- Created fresh for each test run
- Isolated from development database
- Automatically cleaned up after tests

The test database is created in memory, so no files are left behind.

---

## Debugging Tests

### Run Single Test File
```bash
npm test tests/api.test.js
```

### Run Single Test
```bash
npm test -- -t "should create a new entry"
```

### Debug with Node Inspector
```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

Then open `chrome://inspect` in Chrome.

---

## Best Practices

### 1. Test Independence
Each test should be independent and not rely on others.

✅ **Good:**
```javascript
beforeEach(async () => {
  await CityData.bulkCreate(testData);
});

afterEach(async () => {
  await CityData.destroy({ where: {}, truncate: true });
});
```

❌ **Bad:**
```javascript
// Test 1 creates data
// Test 2 assumes data exists from Test 1
```

### 2. Clear Test Names
Use descriptive test names that explain what is being tested.

✅ **Good:**
```javascript
test('GET /api/data/:id - should return 404 for non-existent ID', async () => {
```

❌ **Bad:**
```javascript
test('test 1', async () => {
```

### 3. Test Both Success and Failure Cases
```javascript
// Success case
test('POST /api/data - should create entry with valid data', async () => {
  // ...
});

// Failure case
test('POST /api/data - should return 400 with invalid data', async () => {
  // ...
});
```

### 4. Use Appropriate Assertions
```javascript
// Be specific
expect(response.status).toBe(200);
expect(response.body.city).toBe('Springfield');

// Not just
expect(response).toBeDefined();
```

---

## Continuous Integration

### GitHub Actions Example

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm test
```

---

## Common Issues

### Issue: Port Already in Use
**Solution:** Tests set `NODE_ENV=test` which prevents server from starting on port 3000.

### Issue: Database Locked
**Solution:** Ensure no other processes are accessing the test database.

### Issue: Tests Timeout
**Solution:** Increase Jest timeout:
```javascript
jest.setTimeout(10000); // 10 seconds
```

---

## Performance

Current test suite performance:
- **Total tests:** 13
- **Execution time:** ~10 seconds
- **Average per test:** ~0.77 seconds

---

## Future Improvements

- [ ] Add integration tests
- [ ] Add performance/load tests
- [ ] Add E2E tests with Cypress
- [ ] Add API contract tests
- [ ] Increase test coverage to 100%
- [ ] Add mutation testing

---

## Resources

- Jest Documentation: https://jestjs.io/
- Supertest Documentation: https://github.com/visionmedia/supertest
- Testing Best Practices: https://testingjavascript.com/

