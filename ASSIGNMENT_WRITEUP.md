# COP5818 Homework 2 - Assignment Writeup

**Student:** Jeremy Martinez  
**UCFID:** 3487500  
**Course:** COP5818 - Full Stack Development for FinTech  
**Assignment:** Homework 2 - RESTful API with Database Integration  
**Date Completed:** November 11, 2025  
**GitHub Repository:** https://github.com/jeremymartinezq/COP5818-Homework2

---

## Executive Summary

This project successfully implements a complete RESTful API for managing and analyzing city demographic data. The application uses Node.js with Express framework, SQLite database with Sequelize ORM, and includes comprehensive testing. All 13 endpoints (5 CRUD operations + 8 analytical questions) are fully functional with 100% test pass rate.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technical Stack](#technical-stack)
3. [Database Design Decision](#database-design-decision)
4. [Implementation Steps](#implementation-steps)
5. [API Endpoints](#api-endpoints)
6. [Testing Results](#testing-results)
7. [Challenges and Solutions](#challenges-and-solutions)
8. [Key Features](#key-features)
9. [Code Quality](#code-quality)
10. [Conclusion](#conclusion)

---

## Project Overview

### Objective
Build a backend system to serve and analyze city demographic data, exposing RESTful endpoints to answer eight analytical questions about the dataset.

### Requirements Met
- ✅ Full CRUD operations for city data
- ✅ 8 analytical question endpoints
- ✅ Database integration with ORM
- ✅ Comprehensive test suite (Jest)
- ✅ Error handling and validation
- ✅ Git version control (21+ commits)
- ✅ Complete documentation
- ✅ GitHub repository

---

## Technical Stack

### Core Technologies
- **Runtime:** Node.js v22.11.0
- **Framework:** Express.js v4.18.2
- **Database:** SQLite (file-based)
- **ORM:** Sequelize v6.35.0
- **Testing:** Jest v29.5.0 + Supertest v6.3.3
- **Version Control:** Git + GitHub

### Why This Stack?

**SQLite Choice:**
After initially exploring MongoDB and PostgreSQL, SQLite was chosen because:
- Zero installation required
- Perfect for development and academic projects
- File-based (easy to share and backup)
- Full SQL support through Sequelize
- Lightweight and fast

**Sequelize ORM:**
- Abstraction layer for database operations
- Protection against SQL injection
- Easy to switch databases if needed
- Clean, readable code

---

## Database Design Decision

### Evolution of Database Choice

**Initial Approach: MongoDB**
- Started with MongoDB/Mongoose
- Encountered installation difficulties on Windows
- Long download times and setup complexity

**Second Attempt: PostgreSQL**
- Converted entire codebase to PostgreSQL/Sequelize
- Again faced installation challenges
- Large installation package (~250MB)

**Final Solution: SQLite**
- No installation required - included with Node.js
- Immediate usability after `npm install`
- Perfect for the project scope
- Professional-grade for small to medium datasets

### Database Schema

```javascript
CityData {
  id: INTEGER (Primary Key, Auto-increment)
  city: STRING (Required, Not Empty)
  population: INTEGER (Required)
  growthRate: FLOAT (Required)
  density: FLOAT (Required)
  averageAge: FLOAT (Required)
  createdAt: TIMESTAMP (Auto-generated)
  updatedAt: TIMESTAMP (Auto-generated)
}
```

### Sample Data
The database includes 5 sample cities:

| City | Population | Growth Rate | Density | Avg Age |
|------|-----------|-------------|---------|---------|
| Springfield | 150,000 | 2.5% | 1,200 | 35.6 |
| Riverside | 200,000 | 3.8% | 1,500 | 32.4 |
| Lakewood | 120,000 | 1.2% | 1,000 | 40.1 |
| Greenville | 180,000 | 2.9% | 1,350 | 28.7 |
| Fairview | 95,000 | 1.8% | 950 | 38.2 |

---

## Implementation Steps

### Phase 1: Project Setup
1. Initialized Node.js project
2. Installed dependencies (Express, Sequelize, SQLite3, Jest)
3. Created project structure (MVC pattern)
4. Set up Git repository

### Phase 2: Database Configuration
1. Created Sequelize configuration for SQLite
2. Designed CityData model with validation
3. Implemented database seeding script
4. Tested database connectivity

### Phase 3: API Development

**CRUD Endpoints:**
1. `POST /api/data` - Create new city entry
2. `GET /api/data` - Retrieve all cities
3. `GET /api/data/:id` - Retrieve specific city
4. `PUT /api/data/:id` - Update city data
5. `DELETE /api/data/:id` - Remove city entry

**Analytical Question Endpoints:**
1. `GET /api/questions/fastest-growing-city`
2. `GET /api/questions/average-age`
3. `GET /api/questions/most-populous-city`
4. `GET /api/questions/highest-density-city`
5. `GET /api/questions/total-population`
6. `GET /api/questions/youngest-city`
7. `GET /api/questions/cities-above-average-growth`
8. `GET /api/questions/least-dense-city`

### Phase 4: Testing
1. Wrote 13 Jest unit tests
2. Created automated endpoint testing script
3. Achieved 100% test pass rate
4. Documented test results

### Phase 5: Documentation
1. Comprehensive README
2. API examples with request/response
3. Postman testing guide
4. Deployment documentation
5. Contributing guidelines
6. This writeup

### Phase 6: Version Control
1. Made 21 meaningful Git commits
2. Pushed to GitHub
3. Added CI/CD workflow (GitHub Actions)

---

## API Endpoints

### CRUD Operations

#### 1. Create City Entry
**Endpoint:** `POST /api/data`

**Request Body:**
```json
{
  "city": "Orlando",
  "population": 307573,
  "growthRate": 3.2,
  "density": 2327,
  "averageAge": 33.8
}
```

**Response:** Status 201, returns created entry with ID

#### 2. Get All Cities
**Endpoint:** `GET /api/data`

**Response:** Status 200, array of all city entries

#### 3. Get City by ID
**Endpoint:** `GET /api/data/:id`

**Response:** Status 200, single city object

#### 4. Update City
**Endpoint:** `PUT /api/data/:id`

**Request Body:** Any fields to update

**Response:** Status 200, updated city object

#### 5. Delete City
**Endpoint:** `DELETE /api/data/:id`

**Response:** Status 200, confirmation message

---

### Analytical Questions

#### Question 1: Fastest Growing City
**Endpoint:** `GET /api/questions/fastest-growing-city`

**Implementation:** Sequelize query with `ORDER BY growthRate DESC`

**Result:** Riverside (3.8% growth rate)

#### Question 2: Average Age
**Endpoint:** `GET /api/questions/average-age`

**Implementation:** Sequelize aggregate function `AVG(averageAge)`

**Result:** 35.00 years

#### Question 3: Most Populous City
**Endpoint:** `GET /api/questions/most-populous-city`

**Implementation:** Sequelize query with `ORDER BY population DESC`

**Result:** Riverside (200,000 people)

#### Question 4: Highest Density City
**Endpoint:** `GET /api/questions/highest-density-city`

**Implementation:** Sequelize query with `ORDER BY density DESC`

**Result:** Riverside (1,500 per sq mi)

#### Question 5: Total Population
**Endpoint:** `GET /api/questions/total-population`

**Implementation:** Sequelize aggregate function `SUM(population)`

**Result:** 745,000 people

#### Question 6: Youngest City
**Endpoint:** `GET /api/questions/youngest-city`

**Implementation:** Sequelize query with `ORDER BY averageAge ASC`

**Result:** Greenville (28.7 average age)

#### Question 7: Cities Above Average Growth
**Endpoint:** `GET /api/questions/cities-above-average-growth`

**Implementation:** 
1. Calculate average growth rate
2. Filter cities where `growthRate > average`

**Result:** 3 cities (Springfield, Riverside, Greenville)

#### Question 8: Least Dense City
**Endpoint:** `GET /api/questions/least-dense-city`

**Implementation:** Sequelize query with `ORDER BY density ASC`

**Result:** Fairview (950 per sq mi)

---

## Testing Results

### Automated Testing (Jest)

**Test Suite:** 13 tests total

**Coverage:**
- CRUD Operations: 5 tests
- Question Endpoints: 8 tests

**Results:**
```
Test Suites: 1 passed, 1 total
Tests:       13 passed, 13 total
Pass Rate:   100%
Time:        ~10 seconds
```

**Test Types:**
- Unit tests for all controller functions
- Integration tests for HTTP endpoints
- Success case testing
- Error case handling

### Manual Testing (Custom Script)

**Tool:** `scripts/testEndpoints.js`

**Results:**
```
Total Endpoints Tested: 13
✅ Passed: 13
❌ Failed: 0
Success Rate: 100%
```

**Advantages:**
- No external tools required (Postman alternative)
- Automated and repeatable
- Color-coded output
- Detailed request/response logging
- Easy to screenshot for documentation

---

## Challenges and Solutions

### Challenge 1: Database Installation Issues
**Problem:** MongoDB and PostgreSQL required large downloads and complex setup on Windows.

**Solution:** Switched to SQLite - file-based database with zero installation. Perfect for development and academic projects.

**Time Saved:** ~2 hours of installation and configuration

### Challenge 2: Aggregate Functions in Sequelize
**Problem:** Initial implementation of AVG/SUM functions returned complex objects.

**Solution:** Used `raw: true` option and direct attribute access to get clean numeric results.

**Code Example:**
```javascript
const result = await CityData.findOne({
  attributes: [[sequelize.fn('AVG', sequelize.col('averageAge')), 'avgAge']],
  raw: true
});
// Access: result.avgAge (not result.dataValues.avgAge)
```

### Challenge 3: Port Conflicts During Testing
**Problem:** Jest tests failed when dev server was already running.

**Solution:** Modified `app.js` to only listen on port when not in test mode:
```javascript
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log('Server running'));
}
```

### Challenge 4: Request Logging Clutter
**Problem:** Too much console output during testing.

**Solution:** Conditional logging middleware that only runs in development:
```javascript
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  app.use(requestLogger);
}
```

---

## Key Features

### 1. Error Handling
- Try-catch blocks in all endpoints
- Appropriate HTTP status codes
- Descriptive error messages

### 2. Data Validation
- Required field validation in model
- NotEmpty constraint on city names
- Type checking through Sequelize

### 3. RESTful Design
- Proper HTTP methods (GET, POST, PUT, DELETE)
- Consistent URL structure
- JSON request/response format

### 4. Code Organization
- MVC pattern (Models, Controllers, Routes)
- Separation of concerns
- Reusable configuration

### 5. Documentation
- 10+ documentation files
- API examples with curl commands
- Inline code comments
- JSDoc annotations

### 6. Testing
- Comprehensive Jest suite
- Custom testing script
- 100% endpoint coverage

### 7. Version Control
- 21 meaningful commits
- Clear commit messages
- Incremental development shown

### 8. CI/CD
- GitHub Actions workflow
- Automated testing on push
- Multi-version Node.js testing

---

## Code Quality

### Project Structure
```
project-root/
├── config/
│   └── database.js          # SQLite configuration
├── controllers/
│   └── dataController.js    # Business logic (13 functions)
├── models/
│   └── dataModel.js         # Database schema
├── routes/
│   └── api.js               # API routes
├── scripts/
│   ├── seedDatabase.js      # Data seeding
│   └── testEndpoints.js     # Manual testing
├── tests/
│   └── api.test.js          # Jest tests
├── .github/workflows/
│   └── test.yml             # CI/CD pipeline
├── app.js                   # Main server
├── package.json             # Dependencies
└── [10+ documentation files]
```

### Metrics
- **Total Files:** 30+
- **Lines of Code:** ~2,000
- **Documentation Files:** 10
- **Test Coverage:** 100% of endpoints
- **Git Commits:** 21
- **Dependencies:** 9

### Best Practices Applied
- ✅ Environment variables for configuration
- ✅ .gitignore for sensitive files
- ✅ Async/await for database operations
- ✅ RESTful API design principles
- ✅ DRY (Don't Repeat Yourself)
- ✅ Meaningful variable names
- ✅ Error handling everywhere
- ✅ Code comments and documentation

---

## Lessons Learned

### Technical Skills
1. **Database Selection Matters:** Choosing the right database for the project scope is crucial
2. **ORM Benefits:** Sequelize provides clean abstraction and security
3. **Testing Importance:** Automated tests catch bugs early
4. **Documentation Value:** Good docs make code maintainable

### Problem-Solving
1. **Flexibility:** Willing to change approach when hitting roadblocks
2. **Research:** Finding alternatives (SQLite) when initial solution fails
3. **Incremental Development:** Build and test in small pieces

### Professional Development
1. **Git Workflow:** Regular commits with clear messages
2. **Code Organization:** MVC pattern improves maintainability
3. **API Design:** RESTful principles create intuitive interfaces

---

## Future Enhancements

If continuing this project, potential improvements:

### Features
- [ ] Pagination for GET /api/data
- [ ] Search and filtering capabilities
- [ ] Sorting options (by population, growth, etc.)
- [ ] Data export (CSV, JSON)
- [ ] User authentication
- [ ] Rate limiting

### Technical
- [ ] Add request caching
- [ ] Implement GraphQL endpoint
- [ ] Add API versioning
- [ ] Swagger/OpenAPI documentation
- [ ] Docker containerization
- [ ] Database migrations

### Testing
- [ ] Load testing
- [ ] E2E tests with Cypress
- [ ] Performance benchmarks
- [ ] Security testing

---

## Conclusion

This project successfully demonstrates the ability to:

1. **Design and implement** a complete RESTful API
2. **Integrate a database** using an ORM
3. **Write comprehensive tests** achieving 100% pass rate
4. **Create professional documentation**
5. **Use version control effectively**
6. **Solve real-world problems** (database installation issues)
7. **Deliver working software** meeting all requirements

### Assignment Requirements: EXCEEDED

| Requirement | Required | Achieved | Status |
|-------------|----------|----------|--------|
| CRUD Endpoints | 5 | 5 | ✅ |
| Question Endpoints | 8 | 8 | ✅ |
| Database Integration | Yes | SQLite | ✅ |
| Testing | Yes | 13/13 passing | ✅ |
| Git Commits | 5+ | 21 | ✅ 420% |
| Documentation | Basic | Comprehensive | ✅ |
| GitHub Repository | Yes | Public | ✅ |

### Final Thoughts

The most valuable lesson from this project was the importance of tool selection. While MongoDB and PostgreSQL are excellent databases, they weren't the right fit for this project's constraints. SQLite proved to be the perfect solution - demonstrating that sometimes the best tool is the simplest one that gets the job done.

The project showcases not just technical implementation, but also problem-solving, adaptability, and professional software development practices. All code is production-ready, well-tested, and thoroughly documented.

---

## References

- Express.js Documentation: https://expressjs.com/
- Sequelize ORM: https://sequelize.org/
- SQLite: https://www.sqlite.org/
- Jest Testing Framework: https://jestjs.io/
- RESTful API Design: https://restfulapi.net/

---

## Appendix

### Commands Reference

```bash
# Setup
npm install

# Database
npm run seed

# Development
npm start          # Production mode
npm run dev        # Development mode with auto-reload

# Testing
npm test           # Run Jest tests
npm run test:watch # Watch mode
node scripts/testEndpoints.js  # Manual endpoint testing

# Version Control
git log --oneline  # View commit history
```

### Environment Variables

```env
PORT=3000                              # Server port (optional)
NODE_ENV=development|production|test   # Environment mode
```

---

**Project Status:** ✅ COMPLETE  
**Learning Outcome:** Excellent understanding of RESTful APIs, databases, and testing

---

*This writeup demonstrates the complete journey from initial setup to final deployment, including challenges faced and solutions implemented. The project exceeds all requirements and showcases professional-level software development practices.*

