# Portfolio

A modern, interactive portfolio website featuring a custom-built 3D island scene with parallax effects and day/night themes. Built with React 19, TypeScript, and Material UI.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF.svg)](https://vitejs.dev/)
[![Material UI](https://img.shields.io/badge/Material_UI-7.3-007FFF.svg)](https://mui.com/)

## Features

-   **Interactive 3D Island Scene**: Custom SVG-based 3D island with animated elements (campfire, clouds, water ripples)
-   **Day/Night Theme**: Smooth theme transitions with custom color palettes
-   **Parallax Effects**: GSAP-powered parallax scrolling for depth and immersion
-   **Responsive Design**: Fully responsive layout optimized for all devices
-   **Custom Cursor**: Interactive cursor with context-aware states
-   **Smooth Animations**: GSAP-powered animations throughout
-   **Accessible**: Built with accessibility best practices
-   **Type-Safe**: 100% TypeScript codebase

## Quick Start

### Prerequisites

-   Node.js 18+ (tested with v20.19.6)
-   npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open automatically at http://localhost:5182

## Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run lint` - Run ESLint
-   `npm run test` - Run tests in watch mode
-   `npm run test:ui` - Open interactive test UI
-   `npm run test:coverage` - Generate coverage report

## Build for Production

```bash
# Install dependencies (if not already done)
npm install

# Lint code
npm run lint

# Build
npm run build

# Preview build
npm run preview
```

The production-ready files will be in the `dist/` directory.

## Tech Stack

### Core

-   **React 19** - UI library
-   **TypeScript 5** - Type safety
-   **Vite 7** - Build tool and dev server
-   **React Router 7** - Client-side routing

### Styling & Animation

-   **Material UI 7** - Component library
-   **Emotion** - CSS-in-JS
-   **GSAP 3** - Animation library
-   **Sass** - CSS preprocessing

### Testing

-   **Vitest** - Test runner
-   **React Testing Library** - Component testing
-   **jsdom** - DOM simulation

### Development

-   **ESLint 9** - Code linting
-   **Prettier** - Code formatting
-   **TypeScript ESLint** - TypeScript linting rules

## Project Structure

```
src/
├── assets/              # Images, SCSS modules
├── components/          # Reusable UI components
│   ├── Scene/          # 3D island scene components
│   ├── Icons/          # Custom icon components
│   └── ...             # Other components (Logo, Link, etc.)
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── layouts/            # Layout components (Header, Footer, Main)
├── pages/              # Page components
├── routes/             # React Router configuration
├── theme/              # Material UI theming (day/night)
├── utils/              # Utility functions
├── test/               # Test setup
├── App.tsx             # Main app component
└── main.tsx            # Application entry point
```

## Theme System

The app supports day and night themes with custom color palettes:

-   Modify day theme: [src/theme/dayColors.tsx](src/theme/dayColors.tsx)
-   Modify night theme: [src/theme/nightColors.tsx](src/theme/nightColors.tsx)
-   Theme toggle managed via `useSettings` hook

## Testing

```bash
# Run tests once
npm run test -- --run

# Run tests in watch mode
npm run test

# Open test UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Deployment

The project includes a GitHub Actions workflow that automatically builds and deploys to GoDaddy hosting on every push to the `main` branch.

See [.github/workflows/deploy.yml](.github/workflows/deploy.yml) for CI/CD configuration.

## Code Style

-   **TypeScript** for all new files
-   **Tabs** for indentation (width: 4)
-   **Single quotes** for strings
-   **ESLint** configuration enforces consistent style

Run `npm run lint` before committing to ensure code quality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   Material UI for the component library
-   GSAP for powerful animation capabilities
-   React Testing Library for testing utilities
-   Vite for blazing fast development experience
