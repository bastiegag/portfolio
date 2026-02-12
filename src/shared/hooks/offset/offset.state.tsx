/**
 * Offset State Management
 * Consolidated context, provider, and hook for parallax offset calculations
 */
/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	useContext,
	useMemo,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

// Types
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

// Context
const OffsetContext = createContext<OffsetContextType | null>(null);

// Provider
export const OffsetProvider = ({ children }: { children: ReactNode }) => {
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

	const value = useMemo(() => ({ offset, setOffset }), [offset]);

	return (
		<OffsetContext.Provider value={value}>
			{children}
		</OffsetContext.Provider>
	);
};

// Hook
export const useOffset = () => {
	const context = useContext(OffsetContext);

	if (!context) {
		throw new Error('useOffset must be used within an OffsetProvider');
	}

	return context;
};
