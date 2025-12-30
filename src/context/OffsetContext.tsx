import { createContext, Dispatch, SetStateAction } from 'react';

/**
 * Context for managing mouse position offset data for parallax effects
 * Use via the useOffset hook.
 */
export interface OffsetContextType {
	offset: {
		pos: {
			x: number;
			y: number;
		};
		dist: {
			x: number;
			y: number;
		};
		scale: number;
		skew: number;
	};
	setOffset: Dispatch<SetStateAction<OffsetContextType['offset']>>;
}

export const OffsetContext = createContext<OffsetContextType | null>(null);
