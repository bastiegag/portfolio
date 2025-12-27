import { createContext, Dispatch, SetStateAction } from 'react';

export interface CursorContextType {
	cursor: {
		hover: boolean;
	};
	setCursor: Dispatch<SetStateAction<CursorContextType['cursor']>>;
}

export const CursorContext = createContext<CursorContextType | null>(null);
