import { createContext, Dispatch, SetStateAction } from 'react';

/**
 * Context for managing custom cursor state (hover effects, styling)
 * Use via the useCursor hook.
 */
export interface CursorContextType {
	cursor: {
		hover: boolean;
	};
	setCursor: Dispatch<SetStateAction<CursorContextType['cursor']>>;
}

export const CursorContext = createContext<CursorContextType | null>(null);
