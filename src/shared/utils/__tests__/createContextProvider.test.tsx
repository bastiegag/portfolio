import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { ReactNode } from 'react';
import {
	createContextProvider,
	createLoggingMiddleware,
	createPerformanceMiddleware,
} from '../createContextProvider';

interface TestState {
	count: number;
	name: string;
}

describe('createContextProvider', () => {
	it('creates context, provider, and hook', () => {
		const result = createContextProvider<TestState>({
			name: 'Test',
			initialState: { count: 0, name: 'test' },
		});

		expect(result.Context).toBeDefined();
		expect(result.Provider).toBeDefined();
		expect(result.useContextValue).toBeDefined();
	});

	it('provides initial state to consumers', () => {
		const initialState = { count: 0, name: 'test' };
		const { Provider, useContextValue } = createContextProvider({
			name: 'Test',
			initialState,
		});

		const wrapper = ({ children }: { children: ReactNode }) => (
			<Provider>{children}</Provider>
		);

		const { result } = renderHook(() => useContextValue(), { wrapper });

		expect(result.current.state).toEqual(initialState);
	});

	it('allows state updates via setState', () => {
		const { Provider, useContextValue } = createContextProvider({
			name: 'Test',
			initialState: { count: 0, name: 'test' },
		});

		const wrapper = ({ children }: { children: ReactNode }) => (
			<Provider>{children}</Provider>
		);

		const { result } = renderHook(() => useContextValue(), { wrapper });

		act(() => {
			result.current.setState({ count: 5, name: 'updated' });
		});

		expect(result.current.state).toEqual({ count: 5, name: 'updated' });
	});

	it('supports functional setState updates', () => {
		const { Provider, useContextValue } = createContextProvider({
			name: 'Test',
			initialState: { count: 0, name: 'test' },
		});

		const wrapper = ({ children }: { children: ReactNode }) => (
			<Provider>{children}</Provider>
		);

		const { result } = renderHook(() => useContextValue(), { wrapper });

		act(() => {
			result.current.setState((prev) => ({
				...prev,
				count: prev.count + 1,
			}));
		});

		expect(result.current.state.count).toBe(1);
	});

	it('throws error when hook used outside provider', () => {
		const { useContextValue } = createContextProvider({
			name: 'Test',
			initialState: { count: 0, name: 'test' },
		});

		// Suppress console error for this test
		const consoleError = console.error;
		console.error = vi.fn();

		expect(() => {
			renderHook(() => useContextValue());
		}).toThrow('useTest must be used within a TestProvider');

		console.error = consoleError;
	});

	it('calls middleware on state updates', () => {
		const middleware = vi.fn();
		const { Provider, useContextValue } = createContextProvider({
			name: 'Test',
			initialState: { count: 0, name: 'test' },
			middleware,
		});

		const wrapper = ({ children }: { children: ReactNode }) => (
			<Provider>{children}</Provider>
		);

		const { result } = renderHook(() => useContextValue(), { wrapper });

		act(() => {
			result.current.setState({ count: 1, name: 'test' });
		});

		expect(middleware).toHaveBeenCalledWith(
			'Test',
			{ count: 0, name: 'test' },
			{ count: 1, name: 'test' },
		);
	});

	it('sets correct display names for DevTools', () => {
		const { Context, Provider } = createContextProvider({
			name: 'MyCustomContext',
			initialState: { count: 0, name: 'test' },
		});

		expect(Context.displayName).toBe('MyCustomContextContext');
		expect(Provider.displayName).toBe('MyCustomContextProvider');
	});
});

describe('createLoggingMiddleware', () => {
	it('creates middleware function', () => {
		const middleware = createLoggingMiddleware();
		expect(typeof middleware).toBe('function');
	});

	it('logs state changes in development', () => {
		const consoleSpy = vi
			.spyOn(console, 'group')
			.mockImplementation(() => {});
		const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
		const groupEndSpy = vi
			.spyOn(console, 'groupEnd')
			.mockImplementation(() => {});

		const middleware = createLoggingMiddleware();
		middleware('Test', { count: 0 }, { count: 1 });

		if (import.meta.env.DEV) {
			expect(consoleSpy).toHaveBeenCalled();
			expect(logSpy).toHaveBeenCalled();
			expect(groupEndSpy).toHaveBeenCalled();
		}

		consoleSpy.mockRestore();
		logSpy.mockRestore();
		groupEndSpy.mockRestore();
	});
});

describe('createPerformanceMiddleware', () => {
	it('creates middleware function', () => {
		const middleware = createPerformanceMiddleware();
		expect(typeof middleware).toBe('function');
	});

	it('warns after many updates', () => {
		const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

		const middleware = createPerformanceMiddleware();

		// Trigger 101 updates
		for (let i = 0; i <= 101; i++) {
			middleware('Test', { count: i }, { count: i + 1 });
		}

		if (import.meta.env.DEV) {
			expect(warnSpy).toHaveBeenCalledWith(
				expect.stringContaining('has updated'),
			);
		}

		warnSpy.mockRestore();
	});
});
