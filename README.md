# Interactive Portfolio

![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-7.3.7-007FFF?logo=mui&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88CE02?logo=greensock&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-4.0.18-6E9F18?logo=vitest&logoColor=white)

> **[View Live Demo](https://sebastiengagne.ca)**


An interactive portfolio built as a production-oriented frontend system, highlighting scalable architecture, performance-aware UI engineering, and modern testing practices.

Developed with React 19 and TypeScript, focusing on maintainability, clarity, and long-term evolution rather than visual experimentation alone.

## Highlights

- **Modular Architecture** — Feature-driven structure with 7 domain modules (scene-island, scene-environment, scene-interactive, settings, navigation, layout, shared utilities)
- **Performance-Aware UI** — GSAP `quickTo()` optimization for 60fps parallax with responsive disabling below `lg` breakpoint
- **Type-Safe Design System** — Strict TypeScript with 15+ custom MUI palette extensions and full IntelliSense
- **Reliable Testing** — 60+ test cases with production-mirroring providers and deterministic GSAP mocks
- **Automated Quality Gates** — CI pipeline enforcing lint → test (60 cases) → build → deploy on every push

## Architecture & Engineering

- Feature-module pattern designed for scalability and refactoring
- Context-based state management for localized concerns
- Controlled bundle splitting to improve load behavior
- Memoized state and render paths to reduce unnecessary updates
- Responsive safeguards for performance-sensitive features

The architecture favors incremental improvement over rewrites.

<details>
<summary><strong>Technical Implementation Details</strong></summary>

### Animation System
- **GSAP `quickTo()` optimization** — Pre-configured setters eliminate per-frame timeline recreation, maintaining 60fps
- **Centralized parallax hooks** — `useMousePosition` calculates transforms, `useParallax` provides granular control flags
- **Responsive safeguards** — Parallax disabled on mobile via `useMediaQuery(theme.breakpoints.down('lg'))`
- Implementation: [useParallax.tsx](src/shared/hooks/parallax/useParallax.tsx), [useMousePosition.tsx](src/shared/hooks/mouse/useMousePosition.tsx)

### State Management
- **Provider composition** — Four independent Context providers (Theme, Cursor, Offset, Popper) instead of Redux
- **Consolidated pattern** — Each provider's Context, Provider, and Hook colocated in single file with error boundaries
- **Performance optimizations** — Memoized context values, `queueMicrotask()` for batched async updates
- Implementation: [App.tsx](src/App.tsx)

### Bundle Optimization
- **Manual chunking strategy** — Splits by domain for optimal caching:
  - Vendor (~1MB): React, MUI, emotion → long-term cache
  - Scene modules: Island, environment, interactive → conditional loading
  - GSAP chunk: Isolated for users who don't interact
  - Hooks chunk: Cross-page shared logic
- Configuration: [vite.config.ts](vite.config.ts#L42-L56)

### Testing Architecture
- **Production-mirroring utilities** — `renderWithProviders` mimics full production hierarchy
- **GSAP mocks** — Controllable timeline execution for deterministic animation tests
- **Async utilities** — Custom `act()` wrappers flush microtasks/macrotasks for reliable state testing
- Test helpers: [render-with-providers.tsx](src/__tests__/helpers/render-with-providers.tsx), [gsap-mock.ts](src/__tests__/helpers/gsap-mock.ts)

### Key Trade-offs Made
- **Context over Redux** — Chose simplicity and reduced boilerplate for localized state (4 providers vs single store)
- **GSAP over Framer Motion** — Prioritized `quickTo()` performance and SVG timeline control over declarative API
- **Manual chunking over automatic** — Explicit control of cache boundaries worth the configuration overhead
- **Feature modules over flat structure** — Accepted more directories for better domain separation and refactoring safety

</details>

## Stack

- React 19
- TypeScript (strict mode)
- Vite + SWC
- Material UI + Emotion
- GSAP
- Vitest + Testing Library

## Testing & Quality

- 60+ unit and integration tests
- Custom provider-aware test utilities
- Deterministic animation mocks for stable test execution
- CI pipeline enforcing lint → test → build

## Engineering Philosophy

This project reflects how I approach frontend engineering:

- Design systems, not isolated components
- Balance performance, readability, and maintainability
- Make trade-offs explicit
- Treat developer experience as a core concern

## Getting Started

```
npm install
npm run dev
```

## License

MIT © [Sébastien Gagné](https://github.com/bastiegag)
