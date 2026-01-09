import { useMemo, useState, ReactNode } from 'react';

import { OffsetContext, type OffsetContextType } from 'context';

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
