# Contributing to CodeNexus

Thank you for your interest in contributing to the CodeNexus Esports League project! This document provides guidelines for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)

## 🤝 Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [olopscmlt@gmail.com](mailto:olopscmlt@gmail.com).

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/code-nexus.git
   cd code-nexus/project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

## 💻 Development Process

1. **Make your changes**
   - Write clean, maintainable code
   - Follow the existing code style
   - Add comments for complex logic

2. **Test your changes**
   ```bash
   npm run typecheck  # TypeScript checks
   npm run lint       # ESLint checks
   npm run build      # Production build
   ```

3. **Commit your changes**
   - Write meaningful commit messages
   - Follow the commit message guidelines below

## 📝 Pull Request Process

1. **Before submitting**
   - Ensure all tests pass
   - Update documentation if needed
   - Add screenshots for UI changes

2. **PR Description should include**
   - What changes were made
   - Why the changes were necessary
   - How to test the changes
   - Screenshots (for visual changes)

3. **PR Title Format**
   ```
   [Type] Brief description
   
   Types: feat, fix, docs, style, refactor, test, chore
   
   Examples:
   [feat] Add team registration validation
   [fix] Resolve mobile navigation overflow
   [docs] Update installation instructions
   ```

4. **Review Process**
   - Maintainers will review your PR
   - Address any requested changes
   - Once approved, your PR will be merged

## 🎨 Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary
- Use meaningful variable names

### React

- Use functional components with hooks
- Extract reusable logic into custom hooks
- Keep components small and focused
- Use proper prop typing

### Styling

- Use Tailwind CSS utility classes
- Follow existing color scheme and patterns
- Ensure responsive design (mobile-first)
- Test on multiple screen sizes

### File Organization

```
src/
├── components/    # Reusable UI components
├── constants/     # App constants and config
├── types/         # TypeScript type definitions
├── hooks/         # Custom React hooks (if needed)
└── utils/         # Utility functions (if needed)
```

## 📦 Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(prizes): add prize pool animation

Add smooth entrance animation for prize cards
using Framer Motion library

Closes #123
```

```
fix(mobile): resolve navigation overflow issue

Fixed horizontal scroll issue on mobile devices
by adjusting container padding

Fixes #456
```

## 🐛 Reporting Bugs

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots or videos (if applicable)
- Environment details (browser, OS, etc.)

## 💡 Suggesting Features

Feature suggestions are welcome! Please provide:

- Clear description of the feature
- Use cases and benefits
- Potential implementation approach
- Mockups or examples (if applicable)

## ❓ Questions?

Feel free to:
- Open an issue for discussion
- Contact the maintainers at [olopscmlt@gmail.com](mailto:olopscmlt@gmail.com)
- Reach out on our [Facebook page](https://www.facebook.com/olopscmlt)

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to CodeNexus! 🎮🚀
