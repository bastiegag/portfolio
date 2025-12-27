import { createContext, Dispatch, SetStateAction } from 'react';

export interface PopperContextType {
	settings: {
		anchorEl: HTMLAnchorElement | null;
		title: string;
	};
	setSettings: Dispatch<SetStateAction<PopperContextType['settings']>>;
}

export const PopperContext = createContext<PopperContextType | null>(null);
