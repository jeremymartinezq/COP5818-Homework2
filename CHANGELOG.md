# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2025-11-11

### Added
- Initial release of City Demographics API
- SQLite database integration with Sequelize ORM
- 8 analytical question endpoints
  - Fastest growing city
  - Average age across cities
  - Most populous city
  - Highest density city
  - Total population
  - Youngest city
  - Cities above average growth
  - Least dense city
- Full CRUD operations for city data
- Comprehensive test suite with Jest (13 tests, 100% passing)
- API documentation and examples
- Request logging middleware for development
- GitHub Actions CI/CD workflow
- Contributing guidelines
- Deployment guide
- Testing documentation

### Features
- RESTful API design
- SQLite file-based database (no installation required)
- Automatic database seeding
- Error handling on all endpoints
- Data validation
- Environment-based configuration
- Development and test modes

### Documentation
- Complete README with setup instructions
- API examples with request/response formats
- Postman testing guide
- Deployment guide
- Testing best practices
- Contributing guidelines
- Code comments and JSDoc

### Testing
- 13 comprehensive tests
- 100% test pass rate
- CRUD operation tests
- Question endpoint tests
- Error case handling

## [0.2.0] - 2025-11-11

### Changed
- Migrated from MongoDB to PostgreSQL
- Updated all dependencies
- Improved error messages

## [0.1.0] - 2025-11-10

### Added
- Initial project structure
- MongoDB integration (later replaced)
- Basic CRUD endpoints
- Initial test setup

---

## Release Notes

### Version 1.0.0
This is the first stable release of the City Demographics API. The project provides a complete RESTful API for managing and analyzing city demographic data.

**Key Features:**
- Zero-configuration database setup (SQLite)
- 8 analytical questions answered through API endpoints
- Complete CRUD operations
- 100% test coverage of core functionality
- Production-ready code with proper error handling
- Comprehensive documentation

**Perfect for:**
- Academic projects
- Learning RESTful API development
- Understanding SQL databases with ORMs
- Testing and CI/CD practices

---

## Upgrade Guide

### From 0.x to 1.0
The database has changed from MongoDB/PostgreSQL to SQLite. To upgrade:

1. Update dependencies:
   ```bash
   npm install
   ```

2. Remove old database files:
   ```bash
   rm -rf data/  # If you had MongoDB data
   ```

3. Seed new SQLite database:
   ```bash
   npm run seed
   ```

4. Test the migration:
   ```bash
   npm test
   ```

---

## Support

For issues, questions, or contributions:
- GitHub Issues: https://github.com/jeremymartinezq/COP5818-Homework2/issues
- GitHub Discussions: https://github.com/jeremymartinezq/COP5818-Homework2/discussions

---

## Contributors

- Jeremy Martinez (@jeremymartinezq) - Initial work and maintenance

---

## License

This project is licensed under the ISC License - see the LICENSE file for details.

