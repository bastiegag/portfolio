import { describe, it, expect } from 'vitest';
import { renderHookWithProviders } from '../helpers/render-with-providers';
import { useOffset } from '@shared/hooks/offset/offset.state';
import { renderWithProviders } from '../helpers/render-with-providers';

describe('Integration: Parallax and Offset System', () => {
	it('should provide offset context to components', async () => {
		const { result } = await renderHookWithProviders(() => useOffset());
		const offsetState = result.current as ReturnType<typeof useOffset>;

		expect(offsetState).toBeDefined();
		expect(offsetState.offset).toBeDefined();
		expect(offsetState.setOffset).toBeDefined();
		expect(typeof offsetState.offset.pos.x).toBe('number');
		expect(typeof offsetState.offset.pos.y).toBe('number');
	});

	it('should initialize offset to zero', async () => {
		const { result } = await renderHookWithProviders(() => useOffset());
		const offsetState = result.current as ReturnType<typeof useOffset>;

		expect(offsetState.offset.pos.x).toBe(0);
		expect(offsetState.offset.pos.y).toBe(0);
	});

	it('should allow setting offset values', async () => {
		const TestComponent = () => {
			const { offset, setOffset } = useOffset();

			return (
				<div>
					<div data-testid="offset-x">{offset.pos.x}</div>
					<div data-testid="offset-y">{offset.pos.y}</div>
					<button
						onClick={() =>
							setOffset({
								pos: { x: 10, y: 20 },
								dist: offset.dist,
								scale: offset.scale,
								skew: offset.skew,
							})
						}
					>
						Set Offset
					</button>
				</div>
			);
		};

		const { container } = await renderWithProviders(<TestComponent />);

		expect(
			container.querySelector('[data-testid="offset-x"]'),
		).toHaveTextContent('0');
		expect(
			container.querySelector('[data-testid="offset-y"]'),
		).toHaveTextContent('0');
	});

	it('should provide offset to multiple components independently', async () => {
		const Component1 = () => {
			const { offset } = useOffset();
			return (
				<div data-testid="comp1">
					{offset.pos.x},{offset.pos.y}
				</div>
			);
		};

		const Component2 = () => {
			const { offset } = useOffset();
			return (
				<div data-testid="comp2">
					{offset.pos.x},{offset.pos.y}
				</div>
			);
		};

		const TestApp = () => (
			<div>
				<Component1 />
				<Component2 />
			</div>
		);

		const { container } = await renderWithProviders(<TestApp />);

		// Both components should have access to the same offset context
		expect(
			container.querySelector('[data-testid="comp1"]'),
		).toHaveTextContent('0,0');
		expect(
			container.querySelector('[data-testid="comp2"]'),
		).toHaveTextContent('0,0');
	});
});
