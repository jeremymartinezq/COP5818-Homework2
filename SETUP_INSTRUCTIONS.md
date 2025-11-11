# Setup Progress and Next Steps

## ✅ Completed Steps

1. **Dependencies Installed** - `node_modules` directory exists with all required packages
2. **Environment File Created** - `.env` file created from `.env.example`
3. **All 8 Question Endpoints Implemented** - See `controllers/dataController.js` and `routes/api.js`
4. **README Updated** - All 8 endpoints documented
5. **Git Initialized** - Initial commit created

## ⚠️ MongoDB Setup Required (ACTION NEEDED)

Your local MongoDB is not running. You have two options:

### Option A: MongoDB Atlas (Cloud - Recommended, Quick Setup)

1. **Sign up for MongoDB Atlas:**
   - Go to: https://www.mongodb.com/cloud/atlas/register
   - Create a FREE account

2. **Create a Free Cluster:**
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select a cloud provider and region
   - Click "Create Cluster" (takes 3-5 minutes)

3. **Set Up Database Access:**
   - Go to "Database Access" in left menu
   - Click "Add New Database User"
   - Username: `hw2user` (or any name you like)
   - Password: Create a strong password (SAVE THIS!)
   - Set privileges to "Read and write to any database"
   - Click "Add User"

4. **Set Up Network Access:**
   - Go to "Network Access" in left menu
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String:**
   - Go back to "Database"
   - Click "Connect" button on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like this):
     ```
     mongodb+srv://hw2user:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
   - Replace `<password>` with your actual password
   - Add database name before the `?`: `/hw2db?`

6. **Update .env File:**
   Open `.env` and replace the MONGO_URI line with:
   ```
   MONGO_URI=mongodb+srv://hw2user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/hw2db?retryWrites=true&w=majority
   PORT=3000
   ```

### Option B: Install MongoDB Locally

1. **Download MongoDB Community Edition:**
   - Windows: https://www.mongodb.com/try/download/community
   - Download the MSI installer

2. **Install MongoDB:**
   - Run the installer
   - Choose "Complete" installation
   - Install as a service (recommended)
   - Install MongoDB Compass (optional GUI tool)

3. **Verify Installation:**
   ```powershell
   mongosh --version
   ```

4. **Your .env file is already configured for local MongoDB:**
   ```
   MONGO_URI=mongodb://localhost:27017/hw2db
   PORT=3000
   ```

## 🚀 Once MongoDB is Set Up

Run these commands in order:

1. **Seed the Database:**
   ```powershell
   npm run seed
   ```
   You should see:
   ```
   MongoDB connected
   Cleared existing data
   Sample data inserted successfully
   ```

2. **Start the Server:**
   ```powershell
   npm start
   ```
   You should see:
   ```
   Server running on port 3000
   MongoDB connected
   ```

3. **Test the API:**
   
   Open another terminal and test with curl:
   ```powershell
   # Get all data
   curl http://localhost:3000/api/data
   
   # Test question endpoints
   curl http://localhost:3000/api/questions/fastest-growing-city
   curl http://localhost:3000/api/questions/most-populous-city
   curl http://localhost:3000/api/questions/average-age
   ```

## 📸 Testing in Postman

1. **Download Postman:** https://www.postman.com/downloads/

2. **Test All Endpoints:**
   
   **CRUD Operations:**
   - GET `http://localhost:3000/api/data` - Get all entries
   - POST `http://localhost:3000/api/data` - Create new entry
     ```json
     {
       "city": "TestCity",
       "population": 100000,
       "growthRate": 2.5,
       "density": 1200,
       "averageAge": 35
     }
     ```
   - GET `http://localhost:3000/api/data/:id` - Get by ID
   - PUT `http://localhost:3000/api/data/:id` - Update entry
   - DELETE `http://localhost:3000/api/data/:id` - Delete entry

   **Question Endpoints:**
   1. GET `http://localhost:3000/api/questions/fastest-growing-city`
   2. GET `http://localhost:3000/api/questions/average-age`
   3. GET `http://localhost:3000/api/questions/most-populous-city`
   4. GET `http://localhost:3000/api/questions/highest-density-city`
   5. GET `http://localhost:3000/api/questions/total-population`
   6. GET `http://localhost:3000/api/questions/youngest-city`
   7. GET `http://localhost:3000/api/questions/cities-above-average-growth`
   8. GET `http://localhost:3000/api/questions/least-dense-city`

3. **Take Screenshots** of each endpoint response for your submission

## 🐙 Push to GitHub

1. **Create a New Repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `COP5818-Homework2` (or similar)
   - Set to Private (for schoolwork)
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Connect and Push:**
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Make Additional Commits** (requirement: at least 5 commits):
   ```powershell
   # After making changes
   git add .
   git commit -m "Add meaningful commit message"
   git push
   ```

   Suggested additional commits:
   - "Update README with author information"
   - "Add Postman test screenshots"
   - "Fix any bugs or improve error handling"
   - "Add comments and documentation"

## 📋 Before Submission

Check off items in `SUBMISSION_CHECKLIST.md`

## 💡 Quick Reference

**All 8 Question Endpoints Implemented:**
1. Fastest growing city (by growth rate)
2. Average age across all cities
3. Most populous city
4. Highest density city
5. Total population
6. Youngest city (lowest average age)
7. Cities with above-average growth rates
8. Least dense city

**Sample Data (5 cities):**
- Springfield: 150k pop, 2.5% growth, 1200 density, 35.6 avg age
- Riverside: 200k pop, 3.8% growth, 1500 density, 32.4 avg age
- Lakewood: 120k pop, 1.2% growth, 1000 density, 40.1 avg age
- Greenville: 180k pop, 2.9% growth, 1350 density, 28.7 avg age
- Fairview: 95k pop, 1.8% growth, 950 density, 38.2 avg age

## 🆘 Troubleshooting

**MongoDB Connection Error:**
- Verify MongoDB is running (Atlas: check cluster status, Local: check service)
- Verify MONGO_URI in .env is correct
- For Atlas: Check Network Access allows your IP

**Port Already in Use:**
- Change PORT in .env to 3001 or another port

**Module Not Found:**
- Run `npm install` again

## 📞 Need Help?

Review the detailed `GETTING_STARTED.md` guide for more information.

