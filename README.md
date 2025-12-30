# Portfolio - Interactive 3D Island Scene

A modern, interactive portfolio website featuring a custom-built 3D island scene with parallax effects, smooth animations, and a beautiful day/night theme system.

🔗 **[View Live Demo](https://sebastiengagne.ca)**

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)

## ✨ Features

-   **🏝️ Custom SVG Island Scene** - Hand-crafted vector graphics with detailed elements (palm trees, rocks, foliage, campfire)
-   **🎭 Parallax Effects** - Mouse-driven parallax animations using GSAP
-   **🌓 Day/Night Theme** - Seamless theme switching with smooth color transitions
-   **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop
-   **⚡ Performance Optimized** - Built with Vite, React 19, and modern best practices
-   **🎨 Material UI v7** - Custom-themed components with CSS variables
-   **♿ TypeScript** - Fully typed for better DX and maintainability

## 🛠️ Tech Stack

### Core

-   **React 19** - Latest React with concurrent features
-   **TypeScript 5** - Type safety and better IDE support
-   **Vite 7** - Fast build tool and dev server

### UI & Styling

-   **Material UI v7** - Component library with custom theme
-   **Emotion** - CSS-in-JS styling
-   **GSAP 3** - Professional-grade animations
-   **Sass** - Enhanced CSS preprocessing

### Routing & State

-   **React Router v7** - Client-side routing
-   **Context API** - Global state management

### Code Quality

-   **ESLint 9** - Linting with React rules
-   **TypeScript ESLint** - TypeScript-specific linting
-   **Vitest** - Fast unit testing with React Testing Library

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/bastiegag/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 📁 Project Structure

```
src/
├── assets/          # Images and SCSS modules
├── components/      # Reusable UI components
│   ├── Scene/       # Island scene components
│   ├── Icons/       # Custom icon components
│   └── ...
├── context/         # React Context providers
├── hooks/           # Custom React hooks
├── layouts/         # Layout components (Header, Footer, Main)
├── pages/           # Page components
├── routes/          # Route configuration
├── theme/           # MUI theme configuration
└── utils/           # Utility functions
```

## 🎨 Key Components

### Custom Hooks

-   **useParallax** - GSAP-powered parallax effects
-   **useMousePosition** - Track mouse position for interactions
-   **useCursor** - Custom cursor state management
-   **useSettings** - Theme and settings management
-   **usePopper** - Tooltip positioning

### Scene Components

-   **Island** - Main island SVG with gradient sand and grass
-   **PalmTrees** - Animated palm trees with parallax
-   **Rocks** - Various rock formations
-   **Foliage** - Plants and grass
-   **Sky** - Clouds and moon with animations
-   **Water** - Waves, ripples, and horizon effects
-   **Objects** - Campfire, bottle, mug, clothesline, map

## 🎯 Theme System

The project includes a sophisticated theme system with:

-   **Custom color palettes** for day and night modes
-   **CSS variables** for dynamic theming
-   **Smooth transitions** between themes
-   **Extended MUI components** with custom styling

## Testing

This project uses Vitest and React Testing Library for testing. Example tests are included for:

-   **Utils** - Unit tests for utility functions
-   **Hooks** - Tests for custom React hooks
-   **Components** - Component integration tests

Run tests with:

```bash
npm run test          # Run in watch mode
npm run test:ui       # Interactive UI
npm run test:coverage # With coverage report
```

### 🌐 Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## 📝 Development Notes

### Adding New Components

Components follow Material UI's styling patterns:

```tsx
import { styled } from '@mui/material';

const MyComponent = styled('div', {
	name: 'MyComponent',
	slot: 'root',
})(({ theme }) => ({
	color: theme.vars.palette.base.primary,
}));
```

### Creating Custom Hooks

Hooks are located in `src/hooks/` and follow naming convention `use[Name].tsx`

### Theme Customization

Modify theme colors in:

-   `src/theme/dayColors.tsx`
-   `src/theme/nightColors.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sébastien Gagné**

-   Portfolio: [sebastiengagne.ca](https://sebastiengagne.ca)
-   GitHub: [@bastiegag](https://github.com/bastiegag)
-   LinkedIn: [Sébastien Gagné](https://linkedin.com/in/bastiegag)

## 🙏 Acknowledgments

-   Inspired by creative portfolio designs
-   GSAP for amazing animation capabilities
-   Material UI team for the excellent component library

---

Made with ❤️ and ☕
