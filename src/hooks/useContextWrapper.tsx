import { useContext, Context } from 'react';

/**
 * Configuration for context wrapper error messages
 */
interface Config {
	/** The name of the context (e.g., 'useCursor') */
	contextName: string;
	/** The name of the provider component (e.g., 'CursorProvider') */
	providerName: string;
}

/**
 * A wrapper utility for React Context hooks that enforces proper usage within a provider
 *
 * This function creates a type-safe context consumer that automatically throws an error
 * if the context is accessed outside of its provider. This prevents runtime errors and
 * provides clear error messages to developers.
 *
 * @template T - The type of the context value
 * @param ReactContext - The React Context object to consume
 * @param config - Configuration object with context and provider names for error messages
 * @returns The context value if available
 * @throws {Error} When the context is used outside of its provider
 *
 * @example
 * // In a custom hook file:
 * const CursorContext = createContext<CursorContextType | undefined>(undefined);
 *
 * export const useCursor = () => {
 *   return useContextWrapper(CursorContext, {
 *     contextName: 'useCursor',
 *     providerName: 'CursorProvider'
 *   });
 * };
 */
export const useContextWrapper = <T,>(
	ReactContext: Context<T>,
	config: Config
) => {
	// Attempt to get the context value
	const context = useContext(ReactContext);
	const { contextName, providerName } = config;

	// Throw a descriptive error if context is not available (used outside provider)
	if (!context) {
		throw new Error(`${contextName} must be used within a ${providerName}`);
	}

	return context;
};
