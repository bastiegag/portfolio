import { useMemo, useEffect, useState, ReactNode } from 'react';

import { dayTheme } from 'theme';
import { SettingsContext, type SettingsContextType, themes } from 'context';

/**
 * Provider component for the Settings context
 *
 * Manages application settings including theme selection (day/night).
 * Automatically updates the theme object when time preference changes.
 *
 * @param children - React components that need access to settings context
 */
export const SettingsProvider = ({ children }: { children: ReactNode }) => {
	// Initialize with day theme as default
	const [settings, setSettings] = useState<SettingsContextType['settings']>({
		time: 'day',
		theme: dayTheme,
	});

	// Memoize context value to prevent unnecessary re-renders
	const value = useMemo(() => ({ settings, setSettings }), [settings]);

	// Update theme object when time preference changes
	useEffect(() => {
		queueMicrotask(() => {
			setSettings((prev) => ({
				...prev,
				theme: themes[settings.time],
			}));
		});
	}, [settings.time]);

	return (
		<SettingsContext.Provider value={value}>
			{children}
		</SettingsContext.Provider>
	);
};
