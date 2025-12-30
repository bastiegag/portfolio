import { createContext, Dispatch, SetStateAction } from 'react';

import { dayTheme, nightTheme } from 'theme';

/**
 * Context for managing application settings (theme, preferences)
 * Use via the useSettings hook.
 */
export interface SettingsContextType {
	settings: {
		time: keyof typeof themes;
		theme: typeof dayTheme;
	};
	setSettings: Dispatch<SetStateAction<SettingsContextType['settings']>>;
}

/** Available theme options mapped to their theme objects */
export const themes = {
	day: dayTheme,
	night: nightTheme,
};

export const SettingsContext = createContext<SettingsContextType | null>(null);
