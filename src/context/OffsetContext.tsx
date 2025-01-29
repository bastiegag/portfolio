import React, { createContext, useMemo, useState } from 'react';

interface IOffsetContext {
	offset: {
		x: number;
		y: number;
	};
	setOffset: React.Dispatch<React.SetStateAction<IOffsetContext['offset']>>;
}

export const OffsetContext = createContext<IOffsetContext | null>(null);

export const OffsetContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [offset, setOffset] = useState<IOffsetContext['offset']>({
		x: 0,
		y: 0,
	});

	const value = useMemo(() => ({ offset, setOffset }), [offset]);

	return (
		<OffsetContext.Provider value={value}>
			{children}
		</OffsetContext.Provider>
	);
};
