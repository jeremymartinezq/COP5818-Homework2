# HW2 Submission Checklist

## Before Submitting

### 1. Code Requirements
- [x] MongoDB schema created with Mongoose
- [x] RESTful CRUD endpoints implemented (POST, GET, PUT, DELETE)
- [x] Eight question endpoints created
- [x] Modular folder structure (models, routes, controllers, tests)
- [x] Error handling in all endpoints

### 2. Testing
- [ ] Test all CRUD operations in Postman or curl
- [ ] Test all 8 question endpoints
- [ ] Take screenshots of:
  - [ ] POST /api/data (Create)
  - [ ] GET /api/data (Read all)
  - [ ] GET /api/data/:id (Read one)
  - [ ] PUT /api/data/:id (Update)
  - [ ] DELETE /api/data/:id (Delete)
  - [ ] All 8 question endpoint responses
- [ ] Run Jest tests: `npm test`
- [ ] Screenshot of test results

### 3. Git & GitHub
- [ ] Initialize Git repository: `git init`
- [ ] Make at least 5 meaningful commits
- [ ] Create GitHub repository (public or private)
- [ ] Push code to GitHub
- [ ] Add GitHub repository link to README.md
- [ ] Screenshot of git log or GitHub commit history

### 4. Documentation
- [ ] Update README.md with:
  - [ ] Your name and UCFID
  - [ ] GitHub repository link
  - [ ] Complete setup instructions
  - [ ] Description of all endpoints
  - [ ] Technologies used
- [ ] Update package.json with your author info
- [ ] Create .env file (DO NOT commit this!)
- [ ] Ensure .env.example exists

### 5. MongoDB Setup
- [ ] Install MongoDB locally OR set up MongoDB Atlas
- [ ] Add MONGO_URI to .env file
- [ ] Seed database with sample data: `npm run seed`
- [ ] Test database connection

### 6. Final Checks
- [ ] Run `npm install` to verify dependencies
- [ ] Run `npm start` to verify server starts
- [ ] All endpoints return expected responses
- [ ] No console errors
- [ ] Code is well-commented
- [ ] .gitignore includes node_modules/ and .env

## Submission Files

Submit the following:
1. **Source Code** - All project files
2. **Screenshots** - CRUD operations, question endpoints, Git history
3. **README.md** - Complete documentation
4. **GitHub Link** - In README.md

## Grading Breakdown (50 points)

- MongoDB Integration: 5 points
- RESTful CRUD API: 10 points
- Eight Question Endpoints: 12 points
- Unit Tests with Jest: 8 points
- Postman/curl Screenshots: 5 points
- GitHub Usage: 5 points
- README Documentation: 5 points

**Total: 50 points**

