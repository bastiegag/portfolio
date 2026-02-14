import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material';
import { ErrorBoundary } from '../ErrorBoundary';
import { dayTheme } from '@shared/ui/theme';

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
	<ThemeProvider theme={dayTheme}>{children}</ThemeProvider>
);

const ThrowError = ({ shouldThrow }: { shouldThrow?: boolean }) => {
	if (shouldThrow) {
		throw new Error('Test error');
	}
	return <div>No error</div>;
};

describe('ErrorBoundary', () => {
	// Suppress console errors in tests
	const originalError = console.error;
	beforeAll(() => {
		console.error = vi.fn();
	});
	afterAll(() => {
		console.error = originalError;
	});

	it('renders children when there is no error', () => {
		render(
			<ThemeWrapper>
				<ErrorBoundary>
					<div>Test content</div>
				</ErrorBoundary>
			</ThemeWrapper>,
		);

		expect(screen.getByText('Test content')).toBeInTheDocument();
	});

	it('renders default fallback UI when error occurs', () => {
		render(
			<ThemeWrapper>
				<ErrorBoundary>
					<ThrowError shouldThrow />
				</ErrorBoundary>
			</ThemeWrapper>,
		);

		expect(screen.getByText('Something went wrong')).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /try again/i }),
		).toBeInTheDocument();
	});

	it('renders custom fallback when provided', () => {
		const customFallback = <div>Custom error message</div>;

		render(
			<ThemeWrapper>
				<ErrorBoundary fallback={customFallback}>
					<ThrowError shouldThrow />
				</ErrorBoundary>
			</ThemeWrapper>,
		);

		expect(screen.getByText('Custom error message')).toBeInTheDocument();
		expect(
			screen.queryByText('Something went wrong'),
		).not.toBeInTheDocument();
	});

	it('calls onError callback when error occurs', () => {
		const onError = vi.fn();

		render(
			<ThemeWrapper>
				<ErrorBoundary onError={onError}>
					<ThrowError shouldThrow />
				</ErrorBoundary>
			</ThemeWrapper>,
		);

		expect(onError).toHaveBeenCalledWith(
			expect.any(Error),
			expect.objectContaining({ componentStack: expect.any(String) }),
		);
	});

	it('resets error state when Try Again is clicked', async () => {
		const user = userEvent.setup();
		let shouldThrow = true;

		const { rerender } = render(
			<ThemeWrapper>
				<ErrorBoundary>
					<ThrowError shouldThrow={shouldThrow} />
				</ErrorBoundary>
			</ThemeWrapper>,
		);

		expect(screen.getByText('Something went wrong')).toBeInTheDocument();

		// Fix the error condition
		shouldThrow = false;

		// Click Try Again
		const button = screen.getByRole('button', { name: /try again/i });
		await user.click(button);

		// Re-render with fixed component
		rerender(
			<ThemeWrapper>
				<ErrorBoundary>
					<ThrowError shouldThrow={shouldThrow} />
				</ErrorBoundary>
			</ThemeWrapper>,
		);

		// Component should recover
		expect(
			screen.queryByText('Something went wrong'),
		).not.toBeInTheDocument();
	});

	it('resets error when resetKeys change', () => {
		let shouldThrow = true;

		const { rerender } = render(
			<ThemeWrapper>
				<ErrorBoundary resetKeys={['key1']}>
					<ThrowError shouldThrow={shouldThrow} />
				</ErrorBoundary>
			</ThemeWrapper>,
		);

		expect(screen.getByText('Something went wrong')).toBeInTheDocument();

		// Fix the error and change resetKeys
		shouldThrow = false;
		rerender(
			<ThemeWrapper>
				<ErrorBoundary resetKeys={['key2']}>
					<ThrowError shouldThrow={shouldThrow} />
				</ErrorBoundary>
			</ThemeWrapper>,
		);

		expect(screen.getByText('No error')).toBeInTheDocument();
	});
});
