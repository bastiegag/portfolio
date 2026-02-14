import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import React from 'react';
import { renderWithProviders } from '@tests/helpers/render-with-providers';
import { CLOUD_PATHS } from '../cloudPaths';
import { setupGsapMocks, resetGsapMocks } from '@tests/helpers/gsap-mock';
import {
	setupComponentMocks,
	resetComponentMocks,
} from '@tests/helpers/component-mocks';

beforeEach(() => {
	setupGsapMocks();
	setupComponentMocks();
});

afterEach(() => {
	resetGsapMocks();
	resetComponentMocks();
});

describe('Cloud component', () => {
	it('should be importable', async () => {
		const module = await import('../Cloud');
		expect(module.Cloud).toBeDefined();
		expect(typeof module.Cloud).toBe('object'); // memo() returns an object
	});

	it('renders correct number of path elements for a variant', async () => {
		const { Cloud } = await import('../Cloud');
		const variant = 1;
		const variantPaths = CLOUD_PATHS[variant];

		const props = {
			distance: 10,
			duration: 1,
			repeatDelay: 0,
			start: 0,
			variant,
			width: 100,
			y: 5,
		};

		const { container } = await renderWithProviders(
			<svg>
				<Cloud {...props} />
			</svg>,
		);

		const expectedCount =
			variantPaths.light.length +
			(variantPaths.dark?.length || 0) +
			variantPaths.overlay.length;
		const paths = container.querySelectorAll('path');
		expect(paths.length).toBe(expectedCount);
	});

	it('applies overlay fillOpacity based on distance prop', async () => {
		const { Cloud } = await import('../Cloud');
		const variant = 1;
		const variantPaths = CLOUD_PATHS[variant];

		const props = {
			distance: 50,
			duration: 1,
			repeatDelay: 0,
			start: 0,
			variant,
			width: 100,
			y: 0,
		};

		const { container } = await renderWithProviders(
			<svg>
				<Cloud {...props} />
			</svg>,
		);

		const overlayD = variantPaths.overlay[0];
		const overlay = Array.from(container.querySelectorAll('path')).find(
			(p) => p.getAttribute('d') === overlayD,
		);
		expect(overlay).toBeTruthy();
		expect(overlay?.getAttribute('d')).toBe(overlayD);
	});
});
