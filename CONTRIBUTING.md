# Contributing Guidelines

Thank you for your interest in contributing to this project!

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature
4. Make your changes
5. Test thoroughly
6. Submit a pull request

## Development Setup

```bash
# Clone the repository
git clone https://github.com/jeremymartinezq/COP5818-Homework2.git
cd COP5818-Homework2

# Install dependencies
npm install

# Set up database
npm run seed

# Run tests
npm test

# Start development server
npm run dev
```

## Code Standards

### JavaScript Style
- Use ES6+ features
- Use `const` for constants, `let` for variables
- Use arrow functions where appropriate
- Follow async/await patterns for promises
- Add JSDoc comments for functions

### Example:
```javascript
/**
 * Calculate average of array
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Average value
 */
const calculateAverage = (numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
};
```

### File Organization
- Controllers in `controllers/`
- Models in `models/`
- Routes in `routes/`
- Tests in `tests/`
- Configuration in `config/`

## Testing Requirements

All new features must include tests:

```javascript
describe('New Feature', () => {
  test('should work correctly', async () => {
    // Arrange
    const input = 'test';
    
    // Act
    const result = await newFeature(input);
    
    // Assert
    expect(result).toBeDefined();
  });
});
```

## Commit Messages

Use clear, descriptive commit messages:

✅ **Good:**
- `Add validation for city name field`
- `Fix bug in population calculation`
- `Update README with new endpoint`

❌ **Bad:**
- `fix`
- `update`
- `changes`

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass
4. Update CHANGELOG.md if applicable
5. Request review from maintainers

### PR Title Format
```
[Type] Brief description

Example: [Feature] Add endpoint for city statistics
```

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] New tests added
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings generated
```

## Code Review Guidelines

### For Contributors
- Be open to feedback
- Respond promptly to review comments
- Keep PRs focused and small
- Test your changes thoroughly

### For Reviewers
- Be respectful and constructive
- Explain reasoning for requested changes
- Approve when code meets standards
- Provide suggestions, not just criticism

## Bug Reports

Use the GitHub issue template:

```markdown
**Describe the bug**
A clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment:**
- OS: [e.g. Windows 10]
- Node version: [e.g. 16.14.0]
- npm version: [e.g. 8.3.1]
```

## Feature Requests

```markdown
**Is your feature request related to a problem?**
Description of the problem

**Describe the solution you'd like**
What you want to happen

**Describe alternatives**
Other solutions you've considered

**Additional context**
Any other relevant information
```

## Questions?

- Check existing issues and documentation
- Ask in discussions
- Contact maintainers

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (ISC).

---

Thank you for contributing! 🎉

