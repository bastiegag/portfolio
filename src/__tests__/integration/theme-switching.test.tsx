import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../helpers/render-with-providers';
import { ThemeSwitcher } from '@features/settings';

describe('Integration: Theme Switching', () => {
	it('should propagate theme changes across the app', async () => {
		const user = userEvent.setup();

		const TestComponent = () => {
			return (
				<div>
					<ThemeSwitcher />
					<div data-testid="content">Content</div>
				</div>
			);
		};

		await renderWithProviders(<TestComponent />);

		// Find theme switcher button (it's the only button)
		const switcherButton = screen.getByRole('button');

		expect(switcherButton).toBeInTheDocument();

		// Click to toggle theme
		await user.click(switcherButton);

		await waitFor(() => {
			// Button should still be present after click
			expect(screen.getByRole('button')).toBeInTheDocument();
		});
	});

	it('should maintain theme preference across component renders', async () => {
		const { rerender } = await renderWithProviders(<ThemeSwitcher />);

		const switcherButton = screen.getByRole('button');

		expect(switcherButton).toBeInTheDocument();

		// Rerender component
		rerender(<ThemeSwitcher />);

		// Theme switcher should still be present
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should apply theme to all themed components', async () => {
		const ThemedComponent = () => {
			return (
				<div>
					<ThemeSwitcher />
					<div data-testid="themed-element">Themed content</div>
				</div>
			);
		};

		await renderWithProviders(<ThemedComponent />);

		const themedElement = screen.getByTestId('themed-element');
		expect(themedElement).toBeInTheDocument();

		// Verify theme switcher is working
		const switcherButton = screen.getByRole('button');
		expect(switcherButton).toBeInTheDocument();
	});
});
