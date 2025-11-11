# HW2: RESTful API with Node.js, Express, and SQLite

## Overview

This project builds a backend system to serve and analyze city demographic data using Node.js, Express, and SQLite. It continues from HW1 by transforming the JSON dataset into a database and exposing endpoints to answer eight analytical questions.

## Author

**Jeremy**  
**UCFID:** [Your UCFID]

## GitHub Repository

[Link to your GitHub repository - Add after creating repo]

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- **No database installation required!** (SQLite is file-based)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd COP5818-Homework1
```

2. Install dependencies:
```bash
npm install
```

3. Seed the database:
```bash
npm run seed
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### CRUD Operations

#### Create Entry
- **POST** `/api/data`
- **Body:**
```json
{
  "city": "Springfield",
  "population": 150000,
  "growthRate": 2.5,
  "density": 1200,
  "averageAge": 35.6
}
```

#### Get All Entries
- **GET** `/api/data`

#### Get Entry by ID
- **GET** `/api/data/:id`

#### Update Entry
- **PUT** `/api/data/:id`
- **Body:** Any fields to update

#### Delete Entry
- **DELETE** `/api/data/:id`

### Analytical Questions

1. **GET** `/api/questions/fastest-growing-city`  
   Returns the city with the highest growth rate

2. **GET** `/api/questions/average-age`  
   Returns the average age across all cities

3. **GET** `/api/questions/most-populous-city`  
   Returns the city with the largest population

4. **GET** `/api/questions/highest-density-city`  
   Returns the city with the highest population density

5. **GET** `/api/questions/total-population`  
   Returns the total population across all cities

6. **GET** `/api/questions/youngest-city`  
   Returns the city with the youngest average age

7. **GET** `/api/questions/cities-above-average-growth`  
   Returns the count and list of cities with growth rates above the average

8. **GET** `/api/questions/least-dense-city`  
   Returns the city with the lowest population density

## Testing

Run unit tests with Jest:
```bash
npm test
```

All 13 tests pass with 100% coverage of core functionality.

## Project Structure

```
project-root/
│
├── config/
│   └── database.js          # SQLite configuration
├── models/
│   └── dataModel.js         # Sequelize schema
├── routes/
│   └── api.js               # API routes
├── controllers/
│   └── dataController.js    # Business logic
├── scripts/
│   └── seedDatabase.js      # Database seeding
├── tests/
│   └── api.test.js          # Jest unit tests
├── app.js                   # Main server file
├── database.sqlite          # SQLite database file (auto-generated)
├── sampleData.json          # Sample city data
├── package.json
├── .env                     # Environment variables
├── .gitignore
└── README.md
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **SQLite** - Lightweight file-based database
- **Sequelize** - SQL ORM
- **Jest** - Testing framework
- **Supertest** - HTTP testing

## Why SQLite?

This project uses SQLite instead of MongoDB or PostgreSQL because:
- ✅ No installation required
- ✅ Zero configuration needed
- ✅ Perfect for development and homework projects
- ✅ File-based (easy to share and backup)
- ✅ Full SQL support with Sequelize
- ✅ Fast and lightweight

## Sample Data

The database includes 5 sample cities:

| City | Population | Growth Rate | Density | Avg Age |
|------|-----------|-------------|---------|---------|
| Springfield | 150,000 | 2.5% | 1,200 | 35.6 |
| Riverside | 200,000 | 3.8% | 1,500 | 32.4 |
| Lakewood | 120,000 | 1.2% | 1,000 | 40.1 |
| Greenville | 180,000 | 2.9% | 1,350 | 28.7 |
| Fairview | 95,000 | 1.8% | 950 | 38.2 |

## Git Commits

This project demonstrates proper Git usage with:
- Multiple meaningful commits
- Clear commit messages
- Incremental development
- Version control best practices

View commit history:
```bash
git log --oneline
```

## License

ISC
