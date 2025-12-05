# Contributing to Sample Company Profile

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Be open to different perspectives

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/sample-company-profile.git
   cd sample-company-profile
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Workflow

1. **Make your changes** in your feature branch
2. **Test your changes**:
   ```bash
   npm run dev
   ```
3. **Build to check for errors**:
   ```bash
   npm run build
   ```
4. **Commit your changes** (see [Commit Guidelines](#commit-guidelines))
5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request** on GitHub

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible
- Use meaningful variable and function names

### React Components

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper prop types/interfaces

### Styling

- Use Tailwind CSS utility classes
- Follow the existing color scheme
- Ensure responsive design (mobile-first)
- Maintain consistency with existing styles

### Internationalization

- All user-facing text must use the i18n system
- Add translations for both Indonesian and English
- Update `app/utils/i18n.ts` with new translations

### File Structure

- Follow the existing project structure
- Place components in appropriate directories
- Use descriptive file names
- Group related files together

## 📝 Commit Guidelines

Use clear and descriptive commit messages:

```
feat: Add new feature description
fix: Fix bug description
docs: Update documentation
style: Code style changes (formatting, etc.)
refactor: Code refactoring
test: Add or update tests
chore: Maintenance tasks
```

Examples:
- `feat: Add dark mode support`
- `fix: Resolve navbar dropdown closing issue`
- `docs: Update README with deployment instructions`
- `style: Format code with Prettier`

## 🔍 Pull Request Process

1. **Update Documentation**: Update README.md or other docs if needed
2. **Add Tests**: Add tests for new features if applicable
3. **Check Build**: Ensure `npm run build` succeeds
4. **Update i18n**: Add translations for any new text
5. **Write Clear PR Description**: Explain what and why
6. **Link Issues**: Reference related issues if any
7. **Request Review**: Tag relevant reviewers

### PR Checklist

- [ ] Code follows the project's coding standards
- [ ] All translations are added (ID & EN)
- [ ] Code is tested and working
- [ ] Build succeeds without errors
- [ ] Documentation is updated if needed
- [ ] Commit messages are clear and descriptive

## 🐛 Reporting Bugs

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable
- **Environment**: Browser, OS, Node version

## 💡 Suggesting Features

When suggesting features:

- **Use Case**: Explain the use case
- **Proposed Solution**: Describe your proposed solution
- **Alternatives**: Mention any alternatives considered
- **Additional Context**: Any other relevant information

## ❓ Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Check existing issues and PRs
- Review the codebase and documentation

Thank you for contributing! 🎉

