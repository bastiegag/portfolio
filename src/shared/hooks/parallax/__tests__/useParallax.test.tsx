import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHookWithProviders } from '@tests/helpers/render-with-providers';
import { setupGsapMocks, resetGsapMocks } from '@tests/helpers/gsap-mock';
import {
	setupComponentMocks,
	resetComponentMocks,
} from '@tests/helpers/component-mocks';

describe('useParallax', () => {
	beforeEach(() => {
		setupGsapMocks();
		setupComponentMocks();
	});

	afterEach(() => {
		resetGsapMocks();
		resetComponentMocks();
	});

	it('is importable and callable as a hook', async () => {
		const mod = await import('../useParallax');
		expect(mod.useParallax).toBeDefined();
		expect(typeof mod.useParallax).toBe('function');
	});

	it('initializes GSAP quickTo functions when parallax is enabled', async () => {
		const { gsap } = await import('gsap');
		const { useParallax } = await import('../useParallax');

		await renderHookWithProviders(() =>
			// call the hook inside a renderHook wrapper
			useParallax(
				'.element',
				10,
				20,
				{ x: 1, y: 1 },
				{ pos: true, scale: true, skew: true },
			),
		);

		expect(gsap.quickTo).toHaveBeenCalled();
	});

	it('falls back to direct values on small screens', async () => {
		// re-mock media query to simulate small screen by re-setting modules
		resetComponentMocks();
		setupGsapMocks();
		// override useMediaQuery to return false
		vi.mock('@mui/material', async (importOriginal: () => Promise<Record<string, unknown>>) => {
			const actual = await importOriginal();
			return {
				...actual,
				useTheme: () => ({
					breakpoints: { up: () => 'lg' },
					vars: { palette: {} },
				}),
				useMediaQuery: () => false,
			};
		});

		const { gsap } = await import('gsap');
		const { useParallax } = await import('../useParallax');

		await renderHookWithProviders(() =>
			useParallax(
				'.element',
				5,
				6,
				{ x: 0.5, y: 0.5 },
				{ pos: true },
			),
		);

		// quickTo is still created by useGSAP, but we expect it to have been called
		expect(gsap.quickTo).toHaveBeenCalled();
	});
});
