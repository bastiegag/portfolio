import {
	createContext,
	useMemo,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

interface OffsetContext {
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
	setOffset: Dispatch<SetStateAction<OffsetContext['offset']>>;
}

export const OffsetContext = createContext<OffsetContext | null>(null);

export const OffsetProvider = ({ children }: { children: ReactNode }) => {
	const [offset, setOffset] = useState<OffsetContext['offset']>({
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
