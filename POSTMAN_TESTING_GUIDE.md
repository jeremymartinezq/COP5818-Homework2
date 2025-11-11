# Postman Testing Guide for HW2 API

## Setup

1. **Download and Install Postman:**
   - Visit: https://www.postman.com/downloads/
   - Download for Windows
   - Install and create an account (free)

2. **Start Your Server:**
   ```powershell
   npm start
   ```
   Ensure it says "Server running on port 3000" and "MongoDB connected"

---

## Testing Workflow

### Step 1: Create a New Collection

1. Open Postman
2. Click "Collections" in the left sidebar
3. Click the "+" button or "Create Collection"
4. Name it: "COP5818 HW2 - City Data API"

---

## Part A: CRUD Operations Testing

### 1. CREATE - POST /api/data

**Request:**
- Method: `POST`
- URL: `http://localhost:3000/api/data`
- Headers: 
  - Key: `Content-Type`, Value: `application/json`
- Body (raw, JSON):
```json
{
  "city": "Tampa",
  "population": 400000,
  "growthRate": 4.2,
  "density": 1800,
  "averageAge": 34.5
}
```

**Expected Response:**
- Status: `201 Created`
- Body includes all fields plus `_id` and timestamps

**📸 Screenshot this response!**

---

### 2. READ ALL - GET /api/data

**Request:**
- Method: `GET`
- URL: `http://localhost:3000/api/data`
- No body needed

**Expected Response:**
- Status: `200 OK`
- Array of all city entries
- Should include the 5 seeded cities + any you added

**📸 Screenshot this response!**

---

### 3. READ ONE - GET /api/data/:id

**Request:**
- Method: `GET`
- URL: `http://localhost:3000/api/data/[COPY_AN_ID_FROM_PREVIOUS_RESPONSE]`
  - Example: `http://localhost:3000/api/data/507f1f77bcf86cd799439011`
- No body needed

**Expected Response:**
- Status: `200 OK`
- Single city object with matching `_id`

**📸 Screenshot this response!**

**Tip:** Copy an `_id` from the GET /api/data response

---

### 4. UPDATE - PUT /api/data/:id

**Request:**
- Method: `PUT`
- URL: `http://localhost:3000/api/data/[USE_SAME_ID]`
- Headers:
  - Key: `Content-Type`, Value: `application/json`
- Body (raw, JSON):
```json
{
  "population": 420000,
  "growthRate": 4.5
}
```

**Expected Response:**
- Status: `200 OK`
- Updated city object with new values

**📸 Screenshot this response!**

---

### 5. DELETE - DELETE /api/data/:id

**Request:**
- Method: `DELETE`
- URL: `http://localhost:3000/api/data/[USE_SAME_ID]`
- No body needed

**Expected Response:**
- Status: `200 OK`
- Message: "Entry deleted"

**📸 Screenshot this response!**

---

## Part B: Question Endpoints Testing

### Question 1: Fastest Growing City

**Request:**
- Method: `GET`
- URL: `http://localhost:3000/api/questions/fastest-growing-city`

**Expected Response:**
```json
{
  "question": "What is the fastest growing city?",
  "answer": "Riverside"
}
```

**📸 Screenshot this response!**

---

### Question 2: Average Age

**Request:**
- Method: `GET`
- URL: `http://localhost:3000/api/questions/average-age`

**Expected Response:**
```json
{
  "question": "What is the average age across all cities?",
  "answer": "35.00"
}
```

**📸 Screenshot this response!**

---

### Question 3: Most Populous City

**Request:**
- Method: `GET`
- URL: `http://localhost:3000/api/questions/most-populous-city`

**Expected Response:**
```json
{
  "question": "What is the most populous city?",
  "answer": "Riverside",
  "population": 200000
}
```

**📸 Screenshot this response!**

---

### Question 4: Highest Density City

**Request:**
- Method: `GET`
- URL: `http://localhost:3000/api/questions/highest-density-city`

**Expected Response:**
```json
{
  "question": "Which city has the highest population density?",
  "answer": "Riverside",
  "density": 1500
}
```

**📸 Screenshot this response!**

---

### Question 5: Total Population

**Request:**
- Method: `GET`
- URL: `http://localhost:3000/api/questions/total-population`

**Expected Response:**
```json
{
  "question": "What is the total population across all cities?",
  "answer": 745000
}
```

**📸 Screenshot this response!**

---

### Question 6: Youngest City

**Request:**
- Method: `GET`
- URL: `http://localhost:3000/api/questions/youngest-city`

**Expected Response:**
```json
{
  "question": "Which city has the youngest average age?",
  "answer": "Greenville",
  "averageAge": 28.7
}
```

**📸 Screenshot this response!**

---

### Question 7: Cities Above Average Growth

**Request:**
- Method: `GET`
- URL: `http://localhost:3000/api/questions/cities-above-average-growth`

**Expected Response:**
```json
{
  "question": "How many cities have growth rates above the average?",
  "answer": 2,
  "averageGrowthRate": "2.24",
  "cities": ["Riverside", "Greenville"]
}
```

**📸 Screenshot this response!**

---

### Question 8: Least Dense City

**Request:**
- Method: `GET`
- URL: `http://localhost:3000/api/questions/least-dense-city`

**Expected Response:**
```json
{
  "question": "Which city has the lowest population density?",
  "answer": "Fairview",
  "density": 950
}
```

**📸 Screenshot this response!**

---

## Screenshot Checklist

You should have **13 screenshots** total:

### CRUD Operations (5 screenshots)
- [ ] POST /api/data - Create
- [ ] GET /api/data - Read All
- [ ] GET /api/data/:id - Read One
- [ ] PUT /api/data/:id - Update
- [ ] DELETE /api/data/:id - Delete

### Question Endpoints (8 screenshots)
- [ ] Fastest Growing City
- [ ] Average Age
- [ ] Most Populous City
- [ ] Highest Density City
- [ ] Total Population
- [ ] Youngest City
- [ ] Cities Above Average Growth
- [ ] Least Dense City

---

## Tips for Good Screenshots

1. **Show the full Postman window** including:
   - The request method and URL
   - The response status code (200, 201, etc.)
   - The response body (formatted JSON)
   
2. **Use Postman's built-in formatting:**
   - Click "Pretty" view for JSON responses
   - Use "JSON" format option

3. **Organize your screenshots:**
   - Create a folder: `screenshots/`
   - Name files clearly:
     - `01-create-city.png`
     - `02-get-all-cities.png`
     - `03-get-city-by-id.png`
     - etc.

4. **Capture any errors too:**
   - If something doesn't work, screenshot it
   - It shows debugging effort

---

## Troubleshooting

### "Could not get response"
- Server isn't running → Run `npm start`
- Wrong port → Check your .env file
- Wrong URL → Verify `http://localhost:3000`

### "404 Not Found"
- Check the URL path is correct
- Check spelling of endpoints
- Verify routes are defined in `routes/api.js`

### "500 Internal Server Error"
- Check server console for error messages
- MongoDB might not be connected
- Check data format in request body

### "Cannot POST" or wrong method
- Verify you're using the correct HTTP method
- GET for reading, POST for creating, PUT for updating, DELETE for deleting

### Empty array `[]` on GET /api/data
- Database hasn't been seeded → Run `npm run seed`
- MongoDB not connected → Check `.env` MONGO_URI

---

## Postman Collection Export (Optional but Recommended)

1. Click the three dots (...) next to your collection
2. Select "Export"
3. Choose "Collection v2.1"
4. Save as `COP5818-HW2-API-Tests.postman_collection.json`
5. Include in your submission

This allows your instructor to import and test your API easily!

---

## Alternative: Testing with curl (Command Line)

If you prefer command line testing:

```powershell
# Create
curl -X POST http://localhost:3000/api/data -H "Content-Type: application/json" -d '{\"city\":\"Tampa\",\"population\":400000,\"growthRate\":4.2,\"density\":1800,\"averageAge\":34.5}'

# Read All
curl http://localhost:3000/api/data

# Read One (replace ID)
curl http://localhost:3000/api/data/507f1f77bcf86cd799439011

# Update (replace ID)
curl -X PUT http://localhost:3000/api/data/507f1f77bcf86cd799439011 -H "Content-Type: application/json" -d '{\"population\":420000}'

# Delete (replace ID)
curl -X DELETE http://localhost:3000/api/data/507f1f77bcf86cd799439011

# Questions
curl http://localhost:3000/api/questions/fastest-growing-city
curl http://localhost:3000/api/questions/average-age
# ... etc for all 8 questions
```

---

## After Testing

1. **Compile all screenshots** into a folder or document
2. **Run Jest tests:** `npm test`
3. **Screenshot the test results**
4. **Verify all commits are pushed to GitHub**
5. **Double-check SUBMISSION_CHECKLIST.md**

---

**Good luck with your testing!** 🚀

