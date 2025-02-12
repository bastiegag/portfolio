import React, { createContext, useMemo, useState } from 'react';

interface IOffsetContext {
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
	setOffset: React.Dispatch<React.SetStateAction<IOffsetContext['offset']>>;
}

export const OffsetContext = createContext<IOffsetContext | null>(null);

export const OffsetContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [offset, setOffset] = useState<IOffsetContext['offset']>({
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
