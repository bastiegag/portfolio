import { JSX, useMemo, useState, ReactNode } from 'react';

import { CursorContext, type CursorContextType } from 'context';

/**
 * Provider component for the Cursor context
 *
 * Manages custom cursor state and provides it to child components.
 * Wrap your app or component tree with this to enable cursor-related functionality.
 *
 * @param children - React components that need access to cursor context
 */
export const CursorProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	// Initialize cursor state
	const [cursor, setCursor] = useState<CursorContextType['cursor']>({
		hover: false,
	});

	// Memoize context value to prevent unnecessary re-renders
	const value = useMemo(() => ({ cursor, setCursor }), [cursor]);

	return (
		<CursorContext.Provider value={value}>
			{children}
		</CursorContext.Provider>
	);
};
