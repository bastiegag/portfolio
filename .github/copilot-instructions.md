# Copilot Instructions for Portfolio Repository

## Repository Overview

This is a **personal portfolio website** built with React 19, TypeScript, and Vite 7. The application showcases a developer's work with an interactive 3D island scene using GSAP animations, internationalization (i18n), and Material-UI theming. Repository size: ~1.8MB (excluding node_modules).

**Tech Stack:**
- **Runtime:** Node.js v24.8.0 (specified in CI)
- **Framework:** React 19.2.3 with TypeScript 5.5.4
- **Build Tool:** Vite 7.3.1
- **Testing:** Vitest 4.0.18 with jsdom environment, React Testing Library
- **Styling:** Material-UI v7.3.7, Emotion, SASS
- **Animations:** GSAP 3.14.2
- **i18n:** react-i18next 16.5.3
- **Linting:** ESLint 9.39.2 with TypeScript ESLint

## Critical Build & Validation Steps

### Prerequisites
**ALWAYS** run `npm install` first after cloning or when dependencies change. The build will fail without node_modules.

### Command Sequence (in order)
```bash
# 1. Install dependencies (REQUIRED FIRST)
npm install
# Takes ~15 seconds, installs 503 packages

# 2. Lint code (CI runs this)
npm run lint
# Uses ESLint with TypeScript rules, takes ~2-5 seconds

# 3. Run tests (CI runs this with --run flag)
npm run test -- --run
# Takes ~12 seconds, runs 60 tests across 16 test files
# Note: Some tests show React "act" warnings but tests pass - this is expected

# 4. Build for production (CI runs this)
npm run build
# Takes ~6 seconds, outputs to ./dist/
# Creates: index.html, CSS, and chunked JS files (vendor, scene, gsap, hooks)

# 5. Optional: Preview production build
npm run preview
# Serves dist folder on port 4173
```

### Additional Commands
```bash
# Development server with hot reload
npm run dev
# Opens browser at http://localhost:5182

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage -- --run
# Outputs to ./coverage/ directory

# Security audit
npm run audit
# Checks for moderate+ severity vulnerabilities

# Fix security vulnerabilities automatically
npm run audit:fix
# Applies automatic fixes for vulnerabilities

# Generate security audit report
npm run audit:report
# Outputs to audit-report.json
```

### Common Issues & Solutions
- **Build fails with "vite: not found"**: Run `npm install` first
- **Tests show React "act" warnings**: Expected behavior for SettingsProvider state updates, tests still pass
- **CI workflow requirement**: Always use `npm run test -- --run` (not just `npm test`) to run tests once without watch mode

## CI/CD Pipeline

**GitHub Actions workflows:**
- `.github/workflows/deploy.yml` - Build and deployment
- `.github/workflows/security.yml` - Security audits and dependency review

The **deploy** workflow runs on every push to `main` branch and performs these steps:
1. Checkout code
2. Setup Node.js 24.8.0
3. `npm install`
4. `npm run lint` - **must pass**
5. `npm run test -- --run` - **must pass (60 tests)**
6. `npm run build` - **must succeed**
7. FTPS deploy to GoDaddy (deploys `./dist/` contents, excludes .map files)

The **security** workflow runs on push, pull requests, weekly schedule, and performs:
1. `npm audit --audit-level=high` - fails on high/critical vulnerabilities
2. Dependency review for PRs (fail on high severity CVEs)
3. Uploads audit reports as artifacts

**To replicate CI locally, run:**
```bash
npm install && npm run lint && npm run audit && npm run test -- --run && npm run build
```

## Project Architecture

### Directory Structure
```
portfolio/
├── .github/workflows/      # CI/CD configuration
├── public/                 # Static assets (favicon.svg, images)
├── src/
│   ├── App.tsx            # Main app component with providers
│   ├── main.tsx           # Entry point, React 19 createRoot
│   ├── assets/scss/       # Global SASS styles
│   ├── core/              # Core application logic
│   │   ├── i18n/          # i18next configuration & translations (en.json, fr.json)
│   │   ├── pages/         # Page components (Home, About, Projects, Error)
│   │   └── router/        # React Router setup
│   ├── features/          # Feature modules (domain-driven)
│   │   ├── layout/        # Layout components (Main)
│   │   ├── navigation/    # Nav components (Footer, Link)
│   │   ├── scene-environment/  # Sky, Water, Cloud components
│   │   ├── scene-interactive/  # Interactive 3D objects
│   │   ├── scene-island/  # PalmTrees, Foliage, Rocks
│   │   └── settings/      # Theme & settings state management
│   ├── shared/            # Shared utilities & components
│   │   ├── components/    # Reusable UI (Container, Paper, Photo, Scene, Icons, cursor)
│   │   ├── data/          # Configuration data
│   │   ├── hooks/         # Custom React hooks (parallax, mouse, offset, popper)
│   │   └── utils/         # Utility functions
│   ├── test/              # Test setup configuration
│   └── __tests__/         # Integration tests & test helpers
├── dist/                  # Build output (generated, gitignored)
├── coverage/              # Test coverage (generated, gitignored)
├── index.html             # HTML entry point
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript config with path aliases
├── vite.config.ts         # Vite build config
├── vitest.config.ts       # Vitest test config
├── eslint.config.js       # ESLint rules
└── .prettierrc            # Code formatting (tabs, single quotes)
```

### Path Aliases (configured in tsconfig.json & vite.config.ts)
```typescript
'@/*'        -> './src/*'
'@assets/*'  -> './src/assets/*'
'@core/*'    -> './src/core/*'
'@features/*'-> './src/features/*'
'@shared/*'  -> './src/shared/*'
'@tests/*'   -> './src/__tests__/*'
```
**Always use these aliases** in imports rather than relative paths.

### Key Files
- **Entry point:** `src/main.tsx` - Initializes React 19 with StrictMode, providers
- **App component:** `src/App.tsx` - Sets up ThemeProvider, CursorProvider, OffsetProvider, PopperProvider
- **Router:** `src/core/router/index.tsx` - React Router configuration
- **Test setup:** `src/test/setup.ts` - Configures @testing-library/jest-dom
- **Test helpers:** `src/__tests__/helpers/` - Mock components, GSAP mocks, render utilities

### Feature Module Pattern
Features follow a consistent structure:
```
features/[feature-name]/
├── components/           # React components
│   ├── __tests__/       # Component tests
│   └── index.ts         # Barrel export
├── state/               # State management (React Context)
│   └── __tests__/       # State tests
└── index.ts             # Feature public API
```

### Testing Strategy
- **Unit tests:** Colocated in `__tests__/` folders next to components
- **Integration tests:** Located in `src/__tests__/integration/`
- **Test utilities:** `src/__tests__/helpers/` contains mocks and render helpers
- **Setup:** All tests use `src/test/setup.ts` for global test configuration
- **Environment:** jsdom with globals enabled
- **Coverage:** Excludes node_modules, test files, config files, mockData, types

## Configuration Files

### TypeScript (tsconfig.json)
- Target: ESNext with React JSX
- Strict mode enabled
- Module resolution: Node with baseUrl set to `./src`
- Path aliases configured for clean imports

### Vite (vite.config.ts)
- Dev server: Port 5182, auto-open browser, polling enabled
- Build: Sourcemaps enabled, manual chunks for optimization (vendor, scene, gsap, hooks)
- Base path: `./` (relative for deployment)
- Chunk size warning: 1024 KB limit

### Vitest (vitest.config.ts)
- Environment: jsdom
- Globals: true (no need to import describe, it, expect)
- Setup file: `./src/test/setup.ts`
- Coverage: v8 provider with text/json/html reporters

### ESLint (eslint.config.js)
- Extends: @eslint/js, typescript-eslint, react-hooks, react-refresh
- Files: `**/*.{ts,tsx}`
- Ignores: dist, coverage directories

### Prettier (.prettierrc)
- Tab width: 4 spaces
- Use tabs: true
- Single quotes: true

## Making Code Changes

### When Adding New Features
1. Create feature module in `src/features/[feature-name]/`
2. Follow existing structure: components/, state/, index.ts
3. Add unit tests in `__tests__/` subdirectories
4. Use path aliases for imports
5. Export public API through index.ts

### When Modifying Components
1. Colocate tests in `__tests__/` folder next to component
2. Use existing test helpers from `src/__tests__/helpers/`
3. Follow MUI theming patterns (see existing components)
4. Use GSAP for animations if needed

### When Updating Dependencies
1. Run `npm install [package]` to update package.json and package-lock.json
2. Test build and tests after dependency changes
3. Check for TypeScript errors with `npm run lint`

### Style Guidelines
- Use tabs for indentation (per .prettierrc)
- Use single quotes
- Follow existing component patterns
- Use TypeScript strict mode
- Prefer functional components with hooks

## Validation Checklist

Before committing, **always run in this order:**
1. ✓ `npm install` (if dependencies changed)
2. ✓ `npm run lint` (must pass with no errors)
3. ✓ `npm run audit` (must pass with no high/critical vulnerabilities)
4. ✓ `npm run test -- --run` (all 60 tests must pass)
5. ✓ `npm run build` (must complete successfully)

This matches the CI pipeline and prevents build failures.

## Important Notes

- **Node version**: CI uses Node.js 24.8.0 - use compatible versions locally
- **Build output**: `dist/` directory contains production build, is gitignored
- **Coverage**: `coverage/` directory is gitignored
- **Tests**: Some React "act" warnings in tests are expected and safe to ignore
- **Dev server**: Auto-opens browser at http://localhost:5182
- **Production base**: Uses relative paths (`./`) for deployment compatibility
- **Deployment**: Builds are deployed to GoDaddy via FTPS (encrypted) from `./dist/` folder
- **Security**: Production sourcemaps disabled, .map files excluded from deployment
- **Dependency scanning**: Automated via Dependabot (security patches only) and weekly audits

## Security Measures

This project implements comprehensive security hardening:

### Deployment Security
- **FTPS Protocol**: Encrypted file transfer (not plain FTP)
- **No Sourcemaps**: Production builds exclude .map files to prevent source code exposure
- **Minimal Permissions**: GitHub Actions use least-privilege permissions

### Dependency Security
- **Dependabot**: Automated security patch updates (`.github/dependabot.yml`)
- **Weekly Audits**: Scheduled npm audit checks via GitHub Actions
- **Locked Versions**: Dependencies use caret ranges, not >=
- **Audit Scripts**: Pre-commit security checks with `npm run audit`

### Application Security
- **Content Security Policy**: CSP headers prevent XSS attacks
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **No Secrets in Code**: All credentials in GitHub Secrets

### Vulnerability Disclosure
- **Security Policy**: See `.github/SECURITY.md` for reporting process
- **Contact**: bastiegag@gmail.com for security concerns

**Security Workflow**: `.github/workflows/security.yml` runs on every push/PR and weekly

## Trust These Instructions

These instructions are comprehensive and verified by testing each command. Only search for additional information if:
- You encounter an error not documented here
- You need to understand implementation details of specific features
- These instructions appear outdated or incorrect

For standard development tasks, **trust and follow these instructions** to minimize exploration time and avoid common pitfalls.
