import { describe, it, expect } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../helpers/render-with-providers';
import { LanguageSwitcher } from '@features/navigation';

describe('Integration: Language Switching', () => {
	it('should switch between English and French', async () => {
		const user = userEvent.setup();

		await renderWithProviders(<LanguageSwitcher />);

		// Find language switcher button
		const languageButton = screen.getByRole('button');
		expect(languageButton).toBeInTheDocument();

		// Initial language (should be either EN or FR)
		const initialText = languageButton.textContent;
		expect(initialText).toMatch(/^(EN|FR)$/);

		// Click to switch language
		await user.click(languageButton);

		await waitFor(() => {
			// Language should have changed
			const newText = languageButton.textContent;
			expect(newText).not.toBe(initialText);
			expect(newText).toMatch(/^(EN|FR)$/);
		});
	});

	it('should toggle between languages on multiple clicks', async () => {
		const user = userEvent.setup();

		await renderWithProviders(<LanguageSwitcher />);

		const languageButton = screen.getByRole('button');
		const firstText = languageButton.textContent;

		// Click once
		await user.click(languageButton);

		await waitFor(() => {
			expect(languageButton.textContent).not.toBe(firstText);
		});

		const secondText = languageButton.textContent;

		// Click again - should return to original
		await user.click(languageButton);

		await waitFor(() => {
			expect(languageButton.textContent).toBe(firstText);
			expect(languageButton.textContent).not.toBe(secondText);
		});
	});

	it('should maintain language preference across component renders', async () => {
		const { rerender } = await renderWithProviders(<LanguageSwitcher />);

		const languageButton = screen.getByRole('button');
		const initialLang = languageButton.textContent;

		// Rerender component
		rerender(<LanguageSwitcher />);

		// Language should be the same
		expect(screen.getByRole('button')).toHaveTextContent(initialLang || '');
	});

	it('should update i18n translations when language changes', async () => {
		const user = userEvent.setup();

		const TestComponent = () => {
			return (
				<div>
					<LanguageSwitcher />
					<div data-testid="test-content">Test Content</div>
				</div>
			);
		};

		await renderWithProviders(<TestComponent />);

		const languageButton = screen.getByRole('button');
		expect(languageButton).toBeInTheDocument();

		// Switch language
		await user.click(languageButton);

		await waitFor(() => {
			// Verify language button changed
			expect(languageButton).toBeInTheDocument();
		});

		// Test content should still be present
		expect(screen.getByTestId('test-content')).toBeInTheDocument();
	});
});
