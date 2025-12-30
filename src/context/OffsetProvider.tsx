import { useMemo, useState, ReactNode, JSX } from 'react';

import { OffsetContext, type OffsetContextType } from 'context';

/**
 * Provider component for the Offset context
 *
 * Manages mouse position offset data used for parallax effects and animations.
 * Tracks absolute position, distance from center, scale, and skew values.
 *
 * @param children - React components that need access to offset context
 */
export const OffsetProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	// Initialize offset state with default values
	const [offset, setOffset] = useState<OffsetContextType['offset']>({
		pos: {
			x: 0,
			y: 0,
		},
		dist: {
			x: 0,
			y: 0,
		},
		scale: 1,
		skew: 0,
	});

	// Memoize context value to prevent unnecessary re-renders
	const value = useMemo(() => ({ offset, setOffset }), [offset]);

	return (
		<OffsetContext.Provider value={value}>
			{children}
		</OffsetContext.Provider>
	);
};
