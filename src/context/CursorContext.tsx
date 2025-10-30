import React, { createContext, useMemo, useState } from 'react';

interface ICursorContext {
	cursor: {
		hover: boolean;
	};
	setCursor: React.Dispatch<React.SetStateAction<ICursorContext['cursor']>>;
}

export const CursorContext = createContext<ICursorContext | null>(null);

export const CursorProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [cursor, setCursor] = useState<ICursorContext['cursor']>({
		hover: false,
	});

	const value = useMemo(() => ({ cursor, setCursor }), [cursor]);

	return (
		<CursorContext.Provider value={value}>
			{children}
		</CursorContext.Provider>
	);
};
