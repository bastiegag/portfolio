import { createContext, Dispatch, SetStateAction } from 'react';

import { dayTheme, nightTheme } from 'theme';

export interface SettingsContextType {
	settings: {
		time: keyof typeof themes;
		theme: typeof dayTheme;
	};
	setSettings: Dispatch<SetStateAction<SettingsContextType['settings']>>;
}

export const themes = {
	day: dayTheme,
	night: nightTheme,
};

export const SettingsContext = createContext<SettingsContextType | null>(null);
