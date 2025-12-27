import { JSX, useMemo, useState, ReactNode } from 'react';

import { CursorContext, type CursorContextType } from 'context';

export const CursorProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	const [cursor, setCursor] = useState<CursorContextType['cursor']>({
		hover: false,
	});

	const value = useMemo(() => ({ cursor, setCursor }), [cursor]);

	return (
		<CursorContext.Provider value={value}>
			{children}
		</CursorContext.Provider>
	);
};
