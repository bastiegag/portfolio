import {
	createContext,
	useMemo,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

interface CursorContext {
	cursor: {
		hover: boolean;
	};
	setCursor: Dispatch<SetStateAction<CursorContext['cursor']>>;
}

export const CursorContext = createContext<CursorContext | null>(null);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
	const [cursor, setCursor] = useState<CursorContext['cursor']>({
		hover: false,
	});

	const value = useMemo(() => ({ cursor, setCursor }), [cursor]);

	return (
		<CursorContext.Provider value={value}>
			{children}
		</CursorContext.Provider>
	);
};
