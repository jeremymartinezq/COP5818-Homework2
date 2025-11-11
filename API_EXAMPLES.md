# API Examples

This document provides example requests and responses for all API endpoints.

## Base URL
```
http://localhost:3000/api
```

---

## CRUD Operations

### 1. Create City Entry

**Request:**
```http
POST /api/data
Content-Type: application/json

{
  "city": "Orlando",
  "population": 307573,
  "growthRate": 3.2,
  "density": 2327,
  "averageAge": 33.8
}
```

**Response:**
```json
{
  "id": 6,
  "city": "Orlando",
  "population": 307573,
  "growthRate": 3.2,
  "density": 2327,
  "averageAge": 33.8,
  "createdAt": "2025-11-11T20:00:00.000Z",
  "updatedAt": "2025-11-11T20:00:00.000Z"
}
```

---

### 2. Get All Cities

**Request:**
```http
GET /api/data
```

**Response:**
```json
[
  {
    "id": 1,
    "city": "Springfield",
    "population": 150000,
    "growthRate": 2.5,
    "density": 1200,
    "averageAge": 35.6
  },
  {
    "id": 2,
    "city": "Riverside",
    "population": 200000,
    "growthRate": 3.8,
    "density": 1500,
    "averageAge": 32.4
  }
]
```

---

### 3. Get City by ID

**Request:**
```http
GET /api/data/1
```

**Response:**
```json
{
  "id": 1,
  "city": "Springfield",
  "population": 150000,
  "growthRate": 2.5,
  "density": 1200,
  "averageAge": 35.6,
  "createdAt": "2025-11-11T20:00:00.000Z",
  "updatedAt": "2025-11-11T20:00:00.000Z"
}
```

---

### 4. Update City

**Request:**
```http
PUT /api/data/1
Content-Type: application/json

{
  "population": 155000,
  "growthRate": 2.8
}
```

**Response:**
```json
{
  "id": 1,
  "city": "Springfield",
  "population": 155000,
  "growthRate": 2.8,
  "density": 1200,
  "averageAge": 35.6,
  "createdAt": "2025-11-11T20:00:00.000Z",
  "updatedAt": "2025-11-11T20:05:00.000Z"
}
```

---

### 5. Delete City

**Request:**
```http
DELETE /api/data/1
```

**Response:**
```json
{
  "message": "Entry deleted"
}
```

---

## Question Endpoints

### Question 1: Fastest Growing City

**Request:**
```http
GET /api/questions/fastest-growing-city
```

**Response:**
```json
{
  "question": "What is the fastest growing city?",
  "answer": "Riverside"
}
```

---

### Question 2: Average Age

**Request:**
```http
GET /api/questions/average-age
```

**Response:**
```json
{
  "question": "What is the average age across all cities?",
  "answer": "35.00"
}
```

---

### Question 3: Most Populous City

**Request:**
```http
GET /api/questions/most-populous-city
```

**Response:**
```json
{
  "question": "What is the most populous city?",
  "answer": "Riverside",
  "population": 200000
}
```

---

### Question 4: Highest Density City

**Request:**
```http
GET /api/questions/highest-density-city
```

**Response:**
```json
{
  "question": "Which city has the highest population density?",
  "answer": "Riverside",
  "density": 1500
}
```

---

### Question 5: Total Population

**Request:**
```http
GET /api/questions/total-population
```

**Response:**
```json
{
  "question": "What is the total population across all cities?",
  "answer": 745000
}
```

---

### Question 6: Youngest City

**Request:**
```http
GET /api/questions/youngest-city
```

**Response:**
```json
{
  "question": "Which city has the youngest average age?",
  "answer": "Greenville",
  "averageAge": 28.7
}
```

---

### Question 7: Cities Above Average Growth

**Request:**
```http
GET /api/questions/cities-above-average-growth
```

**Response:**
```json
{
  "question": "How many cities have growth rates above the average?",
  "answer": 2,
  "averageGrowthRate": "2.24",
  "cities": ["Riverside", "Greenville"]
}
```

---

### Question 8: Least Dense City

**Request:**
```http
GET /api/questions/least-dense-city
```

**Response:**
```json
{
  "question": "Which city has the lowest population density?",
  "answer": "Fairview",
  "density": 950
}
```

---

## Error Responses

### 404 Not Found
```json
{
  "message": "Entry not found"
}
```

### 400 Bad Request
```json
{
  "error": "Validation error message"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error message"
}
```

---

## Testing with cURL

### Create a City
```bash
curl -X POST http://localhost:3000/api/data \
  -H "Content-Type: application/json" \
  -d '{"city":"Miami","population":467963,"growthRate":2.1,"density":4770,"averageAge":40.2}'
```

### Get All Cities
```bash
curl http://localhost:3000/api/data
```

### Get Specific Question
```bash
curl http://localhost:3000/api/questions/fastest-growing-city
```

### Update a City
```bash
curl -X PUT http://localhost:3000/api/data/1 \
  -H "Content-Type: application/json" \
  -d '{"population":160000}'
```

### Delete a City
```bash
curl -X DELETE http://localhost:3000/api/data/1
```

---

## Notes

- All timestamps are in ISO 8601 format (UTC)
- IDs are auto-incremented integers
- All numeric fields (population, growthRate, density, averageAge) are required for POST
- PUT requests can update any subset of fields
- DELETE returns success even if the entry doesn't exist

