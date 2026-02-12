/* eslint-disable react-refresh/only-export-components */
import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { renderHook, RenderHookOptions } from '@testing-library/react';
import { act } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@core/i18n';
import { SettingsProvider, useSettings } from '@features/settings';
import { CursorProvider } from '@shared/components/cursor/cursor.state';
import { OffsetProvider } from '@shared/hooks/offset/offset.state';
import { PopperProvider } from '@shared/hooks/popper/popper.state';

/**
 * Test utility to render components with all necessary providers
 * Wraps component with Theme, Router, and i18n providers
 */
interface ProvidersProps {
	children: ReactNode;
	initialRoute?: string;
}

interface ExtendedRenderOptions extends Omit<RenderOptions, 'wrapper'> {
	initialRoute?: string;
}

/**
 * Wrapper component with all providers
 * Mimics the provider hierarchy in main.tsx and App.tsx
 */
const AllProviders = ({ children, initialRoute = '/' }: ProvidersProps) => {
	return (
		<I18nextProvider i18n={i18n}>
			<SettingsProvider>
				<ThemeWrapper>
					<MemoryRouter initialEntries={[initialRoute]}>
						<CursorProvider>
							<OffsetProvider>
								<PopperProvider>{children}</PopperProvider>
							</OffsetProvider>
						</CursorProvider>
					</MemoryRouter>
				</ThemeWrapper>
			</SettingsProvider>
		</I18nextProvider>
	);
};

/**
 * Helper component that uses settings to provide theme
 * Mimics the pattern in App.tsx
 */
const ThemeWrapper = ({ children }: { children: ReactNode }) => {
	const { settings } = useSettings();
	return <ThemeProvider theme={settings.theme}>{children}</ThemeProvider>;
};

/**
 * Custom render function that includes all providers
 * Use this instead of @testing-library/react's render
 */
export const renderWithProviders = async (
	ui: ReactElement,
	options?: ExtendedRenderOptions,
) => {
	const { initialRoute, ...renderOptions } = options || {};

	let result: ReturnType<typeof render>;

	await act(async () => {
		result = render(ui, {
			wrapper: ({ children }) => (
				<AllProviders initialRoute={initialRoute}>
					{children}
				</AllProviders>
			),
			...renderOptions,
		});

		// flush microtasks scheduled by providers (queueMicrotask / promises)
		await Promise.resolve();
		// also wait a macrotask to allow any setTimeout-based scheduling to run
		await new Promise((r) => setTimeout(r, 0));
		// final microtask flush
		await Promise.resolve();
	});

	// @ts-expect-error result is assigned inside act
	return result;
};

/**
 * Custom renderHook function that includes all providers
 * Use this for testing custom hooks that need context
 */
export const renderHookWithProviders = async <TProps, TResult>(
	hook: (props: TProps) => TResult,
	options?: RenderHookOptions<TProps> & { initialRoute?: string },
) => {
	const { initialRoute, ...hookOptions } = options || {};

	let result: ReturnType<typeof renderHook<TResult, TProps>> = undefined!;

	await act(async () => {
		result = renderHook(hook, {
			wrapper: ({ children }: { children: ReactNode }) => (
				<AllProviders initialRoute={initialRoute}>
					{children}
				</AllProviders>
			),
			...hookOptions,
		} as RenderHookOptions<TProps>);

		await Promise.resolve();
	});

	return result;
};

/**
 * Helper to create a wrapper with specific provider state
 * Useful for testing with specific locale or route
 */
export const createProviderWrapper = (config?: {
	locale?: string;
	initialRoute?: string;
}) => {
	const { locale = 'en', initialRoute = '/' } = config || {};

	if (locale !== 'en') {
		i18n.changeLanguage(locale);
	}

	return ({ children }: { children: ReactNode }) => (
		<AllProviders initialRoute={initialRoute}>{children}</AllProviders>
	);
};
