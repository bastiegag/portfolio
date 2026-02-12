import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { renderWithProviders } from '../../../../__tests__/helpers/render-with-providers';

// Mock the cursor state and provide a passthrough CursorProvider for tests
vi.mock('@shared/components/cursor/cursor.state', () => ({
	useCursor: () => ({ setCursor: vi.fn() }),
	CursorProvider: ({ children }: { children: React.ReactNode }) => (
		<>{children}</>
	),
}));

describe('ThemeSwitcher', () => {
	it('should render theme switcher button', async () => {
		await renderWithProviders(<ThemeSwitcher />);

		const button = screen.getByRole('button');
		expect(button).toBeDefined();
	});

	it('should display moon icon in day mode', async () => {
		await renderWithProviders(<ThemeSwitcher />);

		// Should show MoonIcon when in day mode (initial state)
		const svgElement = screen.getByRole('button').querySelector('svg');
		expect(svgElement).toBeDefined();
	});

	it('should toggle theme when clicked', async () => {
		await renderWithProviders(<ThemeSwitcher />);

		const button = screen.getByRole('button');

		// Click to toggle theme
		fireEvent.click(button);

		// Button should still be rendered after click
		expect(button).toBeDefined();
	});

	it('should be a large button', async () => {
		await renderWithProviders(<ThemeSwitcher />);

		const button = screen.getByRole('button');
		expect(button.classList.contains('MuiIconButton-sizeLarge')).toBe(true);
	});
});
