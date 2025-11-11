# HW2: RESTful API with Node.js, Express, and MongoDB

## Overview

This project builds a backend system to serve and analyze city demographic data using Node.js, Express, and MongoDB. It continues from HW1 by transforming the JSON dataset into a database and exposing endpoints to answer eight analytical questions.

## Author

**Jeremy**  
**UCFID:** [Your UCFID]

## GitHub Repository

[Link to your GitHub repository]

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd COP5818-Homework2
```

2. Install dependencies:
```bash
npm install
```

3. Set up MongoDB:
   - **Local:** Ensure MongoDB is running on `mongodb://localhost:27017`
   - **Atlas:** Create a cluster and get your connection string

4. Create a `.env` file:
```
MONGO_URI=mongodb://localhost:27017/hw2db
PORT=3000
```

5. Start the server:
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

## Project Structure

```
project-root/
│
├── models/
│   └── dataModel.js         # Mongoose schema
├── routes/
│   └── api.js               # API routes
├── controllers/
│   └── dataController.js    # Business logic
├── tests/
│   └── api.test.js          # Jest unit tests
├── app.js                   # Main server file
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Jest** - Testing framework
- **Supertest** - HTTP testing

## Git Commits

This project demonstrates proper Git usage with:
- At least 5 meaningful commits
- Clear commit messages
- Regular pushes to GitHub

View commit history:
```bash
git log --oneline
```

## License

ISC

