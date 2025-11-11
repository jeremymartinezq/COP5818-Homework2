# Deployment Guide

## Local Development

### Quick Start
```bash
npm install
npm run seed
npm start
```

Server runs on: http://localhost:3000

### Testing
```bash
npm test
```

### Development Mode (Auto-reload)
```bash
npm run dev
```

---

## Database

### SQLite Setup
No setup required! The SQLite database file (`database.sqlite`) is automatically created when you:
- Run `npm run seed`, OR
- Start the server with `npm start`

### Resetting the Database
```bash
# Delete the database file
rm database.sqlite  # Mac/Linux
del database.sqlite  # Windows

# Re-seed
npm run seed
```

### Viewing Database Contents
You can use:
- **DB Browser for SQLite**: https://sqlitebrowser.org/
- **VS Code Extensions**: SQLite Viewer
- **Command Line**: `sqlite3 database.sqlite`

---

## API Testing

### Using curl
```bash
# Get all cities
curl http://localhost:3000/api/data

# Get fastest growing city
curl http://localhost:3000/api/questions/fastest-growing-city

# Create a new city
curl -X POST http://localhost:3000/api/data \
  -H "Content-Type: application/json" \
  -d '{"city":"Tampa","population":400000,"growthRate":4.2,"density":1800,"averageAge":34.5}'
```

### Using Postman
1. Import the collection (if provided)
2. Set base URL: `http://localhost:3000`
3. Test all endpoints
4. Export results

---

## Production Deployment (Optional)

### Environment Variables
Create a `.env` file (never commit this!):
```
PORT=3000
NODE_ENV=production
```

### Platform-Specific Notes

#### Heroku
```bash
# SQLite works on Heroku but database resets on dyno restart
# For production, consider PostgreSQL instead
```

#### Railway
```bash
# SQLite persists on Railway with volume mounts
railway up
```

#### Vercel/Netlify
```bash
# Use serverless functions
# SQLite may not persist - use external database
```

---

## Troubleshooting

### Port Already in Use
```bash
# Change port in .env
PORT=3001
```

### Database Locked
```bash
# Stop all running instances
# Delete database.sqlite
# Re-seed
```

### Module Not Found
```bash
npm install
```

### Tests Failing
```bash
# Make sure no server is running on port 3000
# Set test environment
$env:NODE_ENV="test"
npm test
```

---

## Performance

SQLite is perfect for:
- ✅ Development
- ✅ Testing
- ✅ Small applications (< 100k records)
- ✅ Single-user applications

For production at scale, consider:
- PostgreSQL (structured data, complex queries)
- MongoDB (flexible schema, horizontal scaling)
- MySQL (mature, widely supported)

---

## Backup

### Backup Database
```bash
# Simple file copy
cp database.sqlite database.backup.sqlite

# Or export to JSON
node scripts/exportData.js > backup.json
```

### Restore from Backup
```bash
# Copy backup file
cp database.backup.sqlite database.sqlite

# Or re-seed
npm run seed
```

---

## Security Notes

1. **Never commit** `.env` file
2. **Never commit** `database.sqlite` to production repos
3. **Always validate** user input
4. **Use parameterized queries** (Sequelize does this automatically)
5. **Set up rate limiting** for production
6. **Enable CORS** appropriately for production

---

## Additional Resources

- Express Docs: https://expressjs.com/
- Sequelize Docs: https://sequelize.org/
- SQLite Docs: https://www.sqlite.org/
- Jest Testing: https://jestjs.io/

---

**For this homework assignment, SQLite is perfect - no deployment needed!** ✅

