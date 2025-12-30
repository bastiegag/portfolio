import { createContext, Dispatch, SetStateAction } from 'react';

/**
 * Context for managing popper state (tooltips, dropdowns)
 * Use via the usePopper hook.
 */
export interface PopperContextType {
	settings: {
		anchorEl: HTMLAnchorElement | null;
		title: string;
	};
	setSettings: Dispatch<SetStateAction<PopperContextType['settings']>>;
}

export const PopperContext = createContext<PopperContextType | null>(null);
