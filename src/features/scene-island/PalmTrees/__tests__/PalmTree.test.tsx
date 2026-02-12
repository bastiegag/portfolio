import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import React from 'react';
import { renderWithProviders } from '@tests/helpers/render-with-providers';
import { PALM_TREE_PATHS } from '../palmTreePaths';
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

describe('PalmTree component', () => {
	it('should be importable', async () => {
		const module = await import('../PalmTree');
		expect(module.PalmTree).toBeDefined();
		expect(typeof module.PalmTree).toBe('function');
	});

	it('renders expected groups and paths for a variant', async () => {
		const { PalmTree } = await import('../PalmTree');
		const variant = 1;
		const variantPaths = PALM_TREE_PATHS[variant];

		const x = 10;
		const y = 20;
		const props = { origins: ['0 0', '0 0'], variant, x, y };

		const { container } = await renderWithProviders(
			<svg>
				<PalmTree {...props} />
			</svg>,
		);

		const root = container.querySelector('.PalmTree-root');
		expect(root).toBeTruthy();
		expect(root?.getAttribute('transform')).toBe(`translate(${x},${y})`);

		// each pathGroup becomes a <g> with one or more path/polygon children
		const groups = root?.querySelectorAll(':scope > g') || [];
		expect(groups.length).toBe(variantPaths.length);

		// count total shape elements expected
		const expectedShapes = variantPaths.reduce(
			(acc, group) => acc + group.paths.length,
			0,
		);
		const shapes = root?.querySelectorAll('path, polygon') || [];
		expect(shapes.length).toBe(expectedShapes);
	});
});
