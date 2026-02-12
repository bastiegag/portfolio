import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../helpers/render-with-providers';
import { Paper } from '@shared/components/Paper';
import { Photo } from '@shared/components/Photo';
import config from '@shared/data/config';

describe('Integration: Shared Components', () => {
	it('should render Paper component', async () => {
		const { container } = await renderWithProviders(
			<Paper>
				<div data-testid="child">Test Child</div>
			</Paper>,
		);

		expect(
			container.querySelector('[data-testid="child"]'),
		).toBeInTheDocument();
	});

	it('should render Photo component', async () => {
		const { container } = await renderWithProviders(
			<Photo src="test.jpg" />,
		);

		// Photo should render an image
		const img = container.querySelector('img');
		expect(img).toBeInTheDocument();
	});

	it('should work with config values', () => {
		expect(config.sceneWidth).toBeGreaterThan(0);
		expect(config.sceneHeight).toBeGreaterThan(0);
		expect(typeof config.sceneWidth).toBe('number');
		expect(typeof config.sceneHeight).toBe('number');
	});

	it('should handle nested components', async () => {
		const NestedComponent = () => (
			<Paper>
				<div data-testid="outer">
					<Paper>
						<div data-testid="inner">Inner Content</div>
					</Paper>
				</div>
			</Paper>
		);

		const { container } = await renderWithProviders(<NestedComponent />);

		expect(
			container.querySelector('[data-testid="outer"]'),
		).toBeInTheDocument();
		expect(
			container.querySelector('[data-testid="inner"]'),
		).toBeInTheDocument();
	});

	it('should render multiple shared components together', async () => {
		const MultiComponent = () => (
			<div>
				<Paper>
					<div data-testid="paper-content">Paper</div>
				</Paper>
				<Photo src="test.jpg" />
			</div>
		);

		const { container } = await renderWithProviders(<MultiComponent />);

		expect(
			container.querySelector('[data-testid="paper-content"]'),
		).toBeInTheDocument();
		expect(container.querySelector('img')).toBeInTheDocument();
	});
});
