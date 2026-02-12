/**
 * Cursor State Management
 * Consolidated context, provider, and hook for cursor hover state
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
export interface CursorContextType {
	cursor: {
		hover: boolean;
	};
	setCursor: Dispatch<SetStateAction<CursorContextType['cursor']>>;
}

// Context
const CursorContext = createContext<CursorContextType | null>(null);

// Provider
export const CursorProvider = ({ children }: { children: ReactNode }) => {
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

// Hook
export const useCursor = () => {
	const context = useContext(CursorContext);

	if (!context) {
		throw new Error('useCursor must be used within a CursorProvider');
	}

	return context;
};
