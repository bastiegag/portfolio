import { vi } from 'vitest';

/**
 * Shared test mocks for components that rely on theme, offset, config and GSAP hook
 * Call `setupComponentMocks()` in tests' beforeEach and `resetComponentMocks()` in afterEach
 */
export const setupComponentMocks = () => {
	vi.mock('@shared/hooks/offset/offset.state', async (importOriginal) => {
		const actual = (await importOriginal()) as Record<string, unknown>;
		return {
			...actual,
			useOffset: () => ({
				offset: { dist: { x: 10, y: 20 }, scale: 1, skew: 0 },
			}),
			OffsetProvider: ({ children }: { children: React.ReactNode }) =>
				children,
		};
	});

	vi.mock('@shared/data/config', () => ({
		default: { parallaxEnabled: true, sceneWidth: 800, cloudsSpeed: 1 },
	}));

	vi.mock('@gsap/react', () => ({
		useGSAP: (cb: () => void) => cb(),
	}));

	// Partially mock @mui/material to preserve theme creation helpers while providing
	// a minimal `useTheme` and `useMediaQuery` for tests.
	vi.mock('@mui/material', async (importOriginal) => {
		const actual = (await importOriginal()) as Record<string, unknown>;
		return {
			...actual,
			useTheme: () => ({
				breakpoints: { up: () => 'lg' },
				vars: {
					palette: {
						cloud: { light: '#ffffff', dark: '#000000' },
						sky: { main: '#ffffff' },
						foliage: {
							main: '#0f0',
							light: '#1f1',
							lighter: '#2f2',
							dark: '#0a0',
							darker: '#050',
						},
						base: { primary: '#000' },
					},
				},
			}),
			useMediaQuery: () => true,
		};
	});
};

export const resetComponentMocks = () => {
	vi.clearAllMocks();
	// reset mocked modules so subsequent tests can re-mock if needed
	vi.resetModules();
};
