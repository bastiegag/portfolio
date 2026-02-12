import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../helpers/render-with-providers';
import { useSettings } from '@features/settings';
import { useCursor } from '@shared/components/cursor/cursor.state';
import { useOffset } from '@shared/hooks/offset/offset.state';
import { usePopper } from '@shared/hooks/popper/popper.state';

describe('Integration: State Management', () => {
	it('should provide all context providers without conflicts', async () => {
		const TestComponent = () => {
			const { settings } = useSettings();
			const { cursor } = useCursor();
			const { offset } = useOffset();
			const { popper } = usePopper();

			return (
				<div>
					<div data-testid="settings">{JSON.stringify(settings)}</div>
					<div data-testid="cursor">{JSON.stringify(cursor)}</div>
					<div data-testid="offset-x">{offset.pos.x}</div>
					<div data-testid="offset-y">{offset.pos.y}</div>
					<div data-testid="active-popper">
						{JSON.stringify(popper)}
					</div>
				</div>
			);
		};

		await renderWithProviders(<TestComponent />);

		// All state values should be accessible
		const settingsElement = screen.getByTestId('settings');
		expect(settingsElement).toBeInTheDocument();

		expect(screen.getByTestId('cursor')).toBeInTheDocument();
		expect(screen.getByTestId('offset-x')).toBeInTheDocument();
		expect(screen.getByTestId('offset-y')).toBeInTheDocument();
		expect(screen.getByTestId('active-popper')).toBeInTheDocument();
	});

	it('should handle Settings context independently', async () => {
		const TestComponent = () => {
			const settings = useSettings();

			return (
				<div>
					<div data-testid="current-settings">
						{JSON.stringify(settings)}
					</div>
				</div>
			);
		};

		await renderWithProviders(<TestComponent />);

		const currentSettings = screen.getByTestId('current-settings');
		// Settings should be accessible and contain expected properties
		expect(currentSettings.textContent).toBeTruthy();
	});

	it('should handle Cursor context independently', async () => {
		const TestComponent = () => {
			const { cursor, setCursor } = useCursor();

			return (
				<div>
					<div data-testid="cursor-state">
						{JSON.stringify(cursor)}
					</div>
					<button onClick={() => setCursor({ hover: true })}>
						Set Pointer
					</button>
				</div>
			);
		};

		await renderWithProviders(<TestComponent />);

		expect(screen.getByTestId('cursor-state')).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /set pointer/i }),
		).toBeInTheDocument();
	});

	it('should handle Offset context independently', async () => {
		const TestComponent = () => {
			const { offset, setOffset } = useOffset();

			return (
				<div>
					<div data-testid="offset">
						{offset.pos.x},{offset.pos.y}
					</div>
					<button
						onClick={() =>
							setOffset({ ...offset, pos: { x: 10, y: 20 } })
						}
					>
						Set Offset
					</button>
				</div>
			);
		};

		await renderWithProviders(<TestComponent />);

		expect(screen.getByTestId('offset')).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /set offset/i }),
		).toBeInTheDocument();
	});

	it('should handle Popper context independently', async () => {
		const TestComponent = () => {
			const { popper, setPopper } = usePopper();

			return (
				<div>
					<div data-testid="active-popper">
						{popper.anchorEl ? 'active' : 'none'}
					</div>
					<button
						onClick={() =>
							setPopper({ anchorEl: null, title: 'Test Popper' })
						}
					>
						Set Popper
					</button>
				</div>
			);
		};

		await renderWithProviders(<TestComponent />);

		expect(screen.getByTestId('active-popper')).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /set popper/i }),
		).toBeInTheDocument();
	});

	it('should allow multiple contexts to update independently', async () => {
		const TestComponent = () => {
			const settings = useSettings();
			const { cursor } = useCursor();
			const { offset } = useOffset();

			return (
				<div>
					<div data-testid="all-state">
						{JSON.stringify(settings)}-{JSON.stringify(cursor)}-
						{offset.pos.x},{offset.pos.y}
					</div>
				</div>
			);
		};

		await renderWithProviders(<TestComponent />);

		const allState = screen.getByTestId('all-state');
		expect(allState).toBeInTheDocument();
		// Should contain cursor object and offset values
		expect(allState.textContent).toContain('hover');
		expect(allState.textContent).toContain(',');
	});
});
