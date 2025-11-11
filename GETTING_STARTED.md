# Getting Started with HW2

This guide will walk you through setting up and running your HW2 project.

## Step 1: Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `dotenv` - Environment variables
- `jest` - Testing framework
- `supertest` - HTTP testing
- `nodemon` - Auto-reload for development

## Step 2: Set Up MongoDB

### Option A: Local MongoDB (Recommended for beginners)

1. Download and install MongoDB Community Edition:
   - Windows: https://www.mongodb.com/try/download/community
   - Mac: `brew install mongodb-community`
   - Linux: Follow MongoDB docs for your distro

2. Start MongoDB:
   - Windows: MongoDB should start automatically as a service
   - Mac/Linux: `brew services start mongodb-community` or `sudo systemctl start mongod`

3. Verify it's running:
```bash
mongosh
```

### Option B: MongoDB Atlas (Cloud)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password

## Step 3: Configure Environment Variables

1. Copy the example file:
```bash
cp .env.example .env
```

2. Edit `.env` with your MongoDB connection:

**For local MongoDB:**
```
MONGO_URI=mongodb://localhost:27017/hw2db
PORT=3000
```

**For MongoDB Atlas:**
```
MONGO_URI=mongodb+srv://username:<password>@cluster.mongodb.net/hw2db?retryWrites=true&w=majority
PORT=3000
```

## Step 4: Seed the Database

Load sample data into MongoDB:

```bash
npm run seed
```

You should see:
```
MongoDB connected
Cleared existing data
Sample data inserted successfully
```

## Step 5: Start the Server

```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

You should see:
```
Server running on port 3000
MongoDB connected
```

## Step 6: Test the API

### Using curl (Command Line)

**Create an entry:**
```bash
curl -X POST http://localhost:3000/api/data -H "Content-Type: application/json" -d "{\"city\":\"TestCity\",\"population\":100000,\"growthRate\":2.5,\"density\":1200,\"averageAge\":35}"
```

**Get all entries:**
```bash
curl http://localhost:3000/api/data
```

**Get fastest growing city:**
```bash
curl http://localhost:3000/api/questions/fastest-growing-city
```

### Using Postman

1. Download Postman: https://www.postman.com/downloads/
2. Create a new request
3. Set method (GET, POST, PUT, DELETE)
4. Enter URL: `http://localhost:3000/api/data`
5. For POST/PUT, add JSON body in the "Body" tab (select "raw" and "JSON")

## Step 7: Run Tests

```bash
npm test
```

This will run Jest tests and show coverage report.

## Step 8: Customize for Your Questions

1. Open `controllers/dataController.js`
2. Add 6 more question endpoint functions (2 are already provided)
3. Open `routes/api.js`
4. Add routes for your new question endpoints
5. Update README.md with your question descriptions

## Common Issues

### MongoDB Connection Error

**Error:** `MongooseServerSelectionError`

**Solution:**
- Verify MongoDB is running: `mongosh`
- Check your MONGO_URI in .env
- For Atlas, check your IP whitelist and password

### Port Already in Use

**Error:** `EADDRINUSE: address already in use :::3000`

**Solution:**
- Change PORT in .env to 3001 or another available port
- Or stop the process using port 3000

### Module Not Found

**Error:** `Cannot find module 'express'`

**Solution:**
```bash
npm install
```

## Git Setup

Initialize Git and make your first commit:

```bash
git init
git add .
git commit -m "Initial commit - HW2 project setup"
```

Create GitHub repository and push:

```bash
git remote add origin https://github.com/yourusername/hw2-repo.git
git branch -M main
git push -u origin main
```

## Next Steps

1. Customize the eight question endpoints
2. Test all endpoints in Postman
3. Take screenshots for submission
4. Write meaningful commit messages
5. Update README.md with your information
6. Complete the SUBMISSION_CHECKLIST.md

## Need Help?

- MongoDB Docs: https://docs.mongodb.com/
- Express Docs: https://expressjs.com/
- Mongoose Docs: https://mongoosejs.com/
- Jest Docs: https://jestjs.io/

