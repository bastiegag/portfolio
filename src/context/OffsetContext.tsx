import { createContext, Dispatch, SetStateAction } from 'react';

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
