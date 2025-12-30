import { CursorContext, CursorProvider } from 'context';
import { useContextWrapper } from 'hooks';

/**
 * Custom hook to access the Cursor context
 *
 * Provides access to cursor-related state and functionality throughout the application.
 * Must be used within a CursorProvider component, otherwise will throw an error.
 *
 * @returns The cursor context value containing cursor state and methods
 * @throws {Error} When used outside of CursorProvider
 */
export const useCursor = () =>
	useContextWrapper(CursorContext, {
		contextName: useCursor.name,
		providerName: CursorProvider.name,
	});
