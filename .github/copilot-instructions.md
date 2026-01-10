# Copilot Instructions for Portfolio Repository

## Repository Overview

This is a modern, interactive portfolio website featuring a custom-built 3D island scene with parallax effects and day/night themes. The project is a single-page application built with React 19, TypeScript 5, and Vite 7, targeting modern browsers.

**Repository Size**: ~418MB with dependencies
**Project Type**: React SPA (Single Page Application)
**Primary Languages**: TypeScript (95%), TSX (React components)
**Build Tool**: Vite 7
**Test Framework**: Vitest with React Testing Library
**Key Frameworks**: React 19, Material UI v7, GSAP 3, React Router v7

## Critical Build & Test Instructions

### Prerequisites
- **Node.js**: Version 18+ required (tested with v20.19.6)
- **npm**: Version 10+ (tested with 10.8.2)

### Essential Command Sequence

**ALWAYS follow this exact order for a clean build:**

1. **Install Dependencies** (ALWAYS run first):
   ```bash
   npm install
   ```
   - Takes ~10-15 seconds
   - Installs 495+ packages
   - Must complete successfully before any other command

2. **Lint Code**:
   ```bash
   npm run lint
   ```
   - Uses ESLint 9 with TypeScript ESLint
   - Checks all `.ts` and `.tsx` files
   - Must pass with zero errors before committing

3. **Build for Production**:
   ```bash
   npm run build
   ```
   - Takes ~7-8 seconds
   - Creates optimized bundle in `dist/` directory
   - Output includes sourcemaps
   - Expected bundle sizes: ~450KB JS, ~270KB hooks chunk, ~1KB CSS
   - ALWAYS verify build completes successfully before deployment

4. **Run Tests**:
   ```bash
   npm run test -- --run
   ```
   - Executes Vitest in run-once mode (default is watch mode)
   - Takes ~3 seconds
   - **KNOWN ISSUE**: One test in `src/config.test.ts` currently fails (pre-existing, unrelated to changes)
   - Ensure no NEW test failures are introduced

5. **Preview Production Build** (optional):
   ```bash
   npm run preview
   ```
   - Serves the built files from `dist/`
   - Runs on http://localhost:4173
   - Use to verify production build before deployment

### Other Available Commands

- `npm run dev`: Start development server on http://localhost:5182 (auto-opens browser)
- `npm run test:ui`: Interactive test UI (requires browser)
- `npm run test:coverage`: Generate coverage report (note: requires `@vitest/coverage-v8` package to be installed)

## Project Architecture

### Directory Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD: Build + FTP deploy to GoDaddy on main push
├── src/
│   ├── assets/                 # Images, SCSS modules
│   ├── components/             # Reusable UI components
│   │   ├── Scene/              # Island 3D scene components (27+ files)
│   │   │   ├── Island.tsx
│   │   │   ├── PalmTrees/
│   │   │   ├── Rocks/
│   │   │   ├── Water/
│   │   │   ├── Objects/        # Campfire, bottle, mug, etc.
│   │   │   └── Sky/            # Clouds, moon animations
│   │   ├── Icons/              # Custom icon components
│   │   ├── Logo.tsx
│   │   ├── Link.tsx
│   │   └── Content.tsx
│   ├── context/                # React Context providers (8 files)
│   │   ├── SettingsProvider.tsx    # Theme settings
│   │   ├── CursorProvider.tsx      # Custom cursor state
│   │   ├── OffsetProvider.tsx      # Scroll offset tracking
│   │   └── PopperProvider.tsx      # Tooltip positioning
│   ├── hooks/                  # Custom React hooks (10 files)
│   │   ├── useSettings.tsx     # Theme management
│   │   ├── useParallax.tsx     # GSAP parallax effects
│   │   ├── useMousePosition.tsx # Mouse tracking
│   │   ├── useCursor.tsx
│   │   ├── usePopper.tsx
│   │   └── useOffset.tsx
│   ├── layouts/                # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Main.tsx
│   ├── pages/                  # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── Error.tsx
│   ├── routes/                 # React Router configuration
│   │   └── index.tsx
│   ├── theme/                  # Material UI theming
│   │   ├── dayColors.tsx       # Day mode palette
│   │   ├── nightColors.tsx     # Night mode palette
│   │   ├── components.ts       # MUI component overrides
│   │   └── index.ts
│   ├── utils/                  # Utility functions
│   │   ├── link.ts
│   │   └── index.ts
│   ├── test/                   # Test setup
│   │   └── setup.ts            # Testing Library config
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Application entry point
│   ├── config.ts               # App configuration
│   └── config.test.ts          # Config tests
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build config
├── vitest.config.ts            # Test configuration
├── eslint.config.js            # Linting rules
└── .prettierrc                 # Code formatting (tabs, 4-width, single quotes)
```

### Key Configuration Files

**TypeScript Configuration** (`tsconfig.json`):
- Target: ESNext
- Module: ESNext with Node resolution
- Base URL: `./src` with path aliases:
  - `@/*` → `src/*`
  - `assets/*` → `src/assets/*`
  - `components/*` → `src/components/*`
  - `context/*` → `src/context/*`
  - `hooks/*` → `src/hooks/*`
  - `layouts/*` → `src/layouts/*`
  - `pages/*` → `src/pages/*`
  - `routes/*` → `src/routes/*`
  - `theme/*` → `src/theme/*`
  - `utils/*` → `src/utils/*`
- Strict mode enabled

**Vite Configuration** (`vite.config.ts`):
- Dev server port: 5182 (auto-open enabled)
- Base path: `./` (relative paths)
- Build output: `dist/`
- Sourcemaps enabled in production
- Manual chunk splitting: hooks are bundled separately
- Aliases match TypeScript paths

**Vitest Configuration** (`vitest.config.ts`):
- Environment: jsdom
- Setup file: `src/test/setup.ts`
- Globals enabled
- CSS processing enabled
- Coverage provider: v8
- Coverage excludes: node_modules, test files, config files, mockData, types

**ESLint Configuration** (`eslint.config.js`):
- Extends: JS recommended, TypeScript recommended, React Hooks recommended
- Files: `**/*.{ts,tsx}`
- Ignores: `dist/`
- Target: ES2020, browser globals

**Prettier Configuration** (`.prettierrc`):
- Tab width: 4 spaces
- Use tabs: true
- Single quotes: true

## CI/CD Pipeline

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

**Trigger**: Push to `main` branch

**Steps**:
1. Checkout repository
2. Setup Node.js 24.8.0
3. Run `npm install`
4. Run `npm run build`
5. FTP deploy `dist/` folder to GoDaddy hosting

**CRITICAL**: Any code changes must pass local build (`npm run build`) and lint (`npm run lint`) before pushing to ensure CI succeeds.

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow Material UI styling patterns with Emotion:
  ```tsx
  import { styled } from '@mui/material';
  
  const MyComponent = styled('div', {
    name: 'MyComponent',
    slot: 'root',
  })(({ theme }) => ({
    color: theme.vars.palette.base.primary,
  }));
  ```
- Custom hooks go in `src/hooks/` with `use[Name].tsx` naming
- Component tests go alongside components with `.test.tsx` extension

### Theme System
- Day/night mode managed via `useSettings` hook
- Modify colors in `src/theme/dayColors.tsx` and `src/theme/nightColors.tsx`
- Uses Material UI v7 with CSS variables (`theme.vars.palette`)

### Testing
- Test files: `*.test.ts` or `*.test.tsx`
- Use React Testing Library for component tests
- Setup file at `src/test/setup.ts` includes `@testing-library/jest-dom`
- Run tests in watch mode: `npm run test`
- Run once: `npm run test -- --run`

### Known Issues
1. **Pre-existing test failure**: `src/config.test.ts` has 1 failing test for social link URLs. This is not related to new changes.
2. **Coverage dependency**: `npm run test:coverage` requires manual installation of `@vitest/coverage-v8`

## Common Tasks

### Adding a New Component
1. Create file in appropriate `src/components/` subdirectory
2. Use TypeScript (`.tsx` extension)
3. Follow existing component patterns (use styled components, MUI theming)
4. Add tests alongside component (`.test.tsx`)
5. Export from parent directory's `index.ts` if applicable
6. Run `npm run lint` to verify code style
7. Run `npm run build` to ensure no build errors

### Adding a New Hook
1. Create in `src/hooks/` with `use[Name].tsx` naming
2. Export from `src/hooks/index.ts`
3. Add unit test if complex logic
4. Document parameters and return values with JSDoc

### Modifying Theme
1. Edit `src/theme/dayColors.tsx` for day mode palette
2. Edit `src/theme/nightColors.tsx` for night mode palette
3. Test both themes by toggling in app
4. Ensure CSS variables are used: `theme.vars.palette.*`

### Before Committing
**ALWAYS run in this order:**
1. `npm run lint` → Must pass
2. `npm run build` → Must succeed
3. `npm run test -- --run` → Verify no NEW failures (1 pre-existing failure is OK)

## Trust These Instructions

These instructions have been validated by running all commands and testing the build pipeline. Only search for additional information if:
- A command fails unexpectedly
- You need to understand implementation details not covered here
- You encounter errors not documented in "Known Issues"

For standard development tasks (adding components, hooks, tests, building, linting), follow the documented procedures above.
