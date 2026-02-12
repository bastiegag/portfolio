/**
 * Settings State Management
 * Consolidated context, provider, and hook for theme/time settings
 */
/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	useContext,
	useMemo,
	useEffect,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

import { dayTheme, nightTheme } from '@shared/ui/theme';

// Types
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

// Context
const SettingsContext = createContext<SettingsContextType | null>(null);

// Provider
export const SettingsProvider = ({ children }: { children: ReactNode }) => {
	const [settings, setSettings] = useState<SettingsContextType['settings']>({
		time: 'day',
		theme: dayTheme,
	});

	const value = useMemo(() => ({ settings, setSettings }), [settings]);

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

// Hook
export const useSettings = () => {
	const context = useContext(SettingsContext);

	if (!context) {
		throw new Error('useSettings must be used within a SettingsProvider');
	}

	return context;
};
