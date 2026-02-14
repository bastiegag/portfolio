/**
 * Context Factory Utility
 * Creates type-safe context providers and hooks with minimal boilerplate
 * Eliminates duplication across state management contexts
 */
import {
	createContext,
	useContext,
	useMemo,
	useState,
	ReactNode,
	Context,
	Dispatch,
	SetStateAction,
} from 'react';

/**
 * Configuration for context factory
 */
export interface CreateContextOptions<T> {
	/** Name of the context (used for error messages and debugging) */
	name: string;
	/** Initial state value */
	initialState: T;
	/** Optional middleware function called on every state update */
	middleware?: (name: string, prevState: T, nextState: T) => void;
}

/**
 * Return type for createContextProvider factory
 */
export interface ContextResult<T> {
	/** React Context object */
	Context: Context<ContextValue<T> | null>;
	/** Provider component */
	Provider: (props: { children: ReactNode }) => ReactNode;
	/** Hook to consume context */
	useContextValue: () => ContextValue<T>;
}

/**
 * Context value shape - matches existing pattern
 */
export interface ContextValue<T> {
	state: T;
	setState: Dispatch<SetStateAction<T>>;
}

/**
 * Creates a type-safe context with provider and hook
 * Follows the consolidated pattern used throughout the codebase
 *
 * @example
 * ```tsx
 * interface CursorState {
 *   hover: boolean;
 * }
 *
 * const { Provider: CursorProvider, useContextValue: useCursor } = createContextProvider({
 *   name: 'Cursor',
 *   initialState: { hover: false },
 * });
 * ```
 */
export function createContextProvider<T>({
	name,
	initialState,
	middleware,
}: CreateContextOptions<T>): ContextResult<T> {
	// Create context with null initial value
	const Context = createContext<ContextValue<T> | null>(null);

	// Set display name for React DevTools
	Context.displayName = `${name}Context`;

	// Provider component
	const Provider = ({ children }: { children: ReactNode }) => {
		const [state, setStateInternal] = useState<T>(initialState);

		// Wrap setState with middleware if provided
		const setState: Dispatch<SetStateAction<T>> = useMemo(() => {
			if (!middleware) return setStateInternal;

			return (action: SetStateAction<T>) => {
				setStateInternal((prevState) => {
					const nextState =
						typeof action === 'function'
							? (action as (prevState: T) => T)(prevState)
							: action;

					// Call middleware with state transition
					middleware(name, prevState, nextState);

					return nextState;
				});
			};
		}, []);

		const value = useMemo(() => ({ state, setState }), [state, setState]);

		return <Context.Provider value={value}>{children}</Context.Provider>;
	};

	// Set display name for React DevTools
	Provider.displayName = `${name}Provider`;

	// Hook to consume context
	const useContextValue = (): ContextValue<T> => {
		const context = useContext(Context);

		if (!context) {
			throw new Error(`use${name} must be used within a ${name}Provider`);
		}

		return context;
	};

	return {
		Context,
		Provider,
		useContextValue,
	};
}

/**
 * Development middleware for logging state changes
 * Only active in development mode
 */
export function createLoggingMiddleware<T>() {
	return (name: string, prevState: T, nextState: T): void => {
		if (import.meta.env.DEV) {
			console.group(`[${name}Context] State Update`);
			console.log('Previous:', prevState);
			console.log('Next:', nextState);
			console.groupEnd();
		}
	};
}

/**
 * Performance middleware for tracking render triggers
 * Only active in development mode
 */
export function createPerformanceMiddleware<T>() {
	const updateCounts = new Map<string, number>();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return (name: string, _prevState: T, _nextState: T): void => {
		if (import.meta.env.DEV) {
			const count = (updateCounts.get(name) || 0) + 1;
			updateCounts.set(name, count);

			// Warn if context updates too frequently
			if (count > 100) {
				console.warn(
					`[${name}Context] has updated ${count} times. Consider optimization.`,
				);
			}
		}
	};
}
