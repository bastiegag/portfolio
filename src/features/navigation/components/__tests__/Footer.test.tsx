import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { Footer } from '../Footer';
import { renderWithProviders } from '../../../../__tests__/helpers/render-with-providers';

describe('Footer', () => {
	it('should render footer component', async () => {
		await renderWithProviders(<Footer />);

		// Footer renders a Box with ThemeSwitcher inside
		const button = screen.getByRole('button');
		expect(button).toBeDefined();
	});

	it('should contain theme switcher', async () => {
		await renderWithProviders(<Footer />);

		// ThemeSwitcher is an IconButton
		const button = screen.getByRole('button');
		expect(button).toBeDefined();
	});
});
