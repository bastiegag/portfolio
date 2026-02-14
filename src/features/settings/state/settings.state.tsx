/**
 * Settings State Management
 * Consolidated context, provider, and hook for theme/time settings
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

import { dayTheme, nightTheme } from '@shared/ui/theme';

export const themes = {
	day: dayTheme,
	night: nightTheme,
} as const;

// Types - Using discriminated unions for better type safety
export type TimeOfDay = keyof typeof themes;

// Discriminated union types - TypeScript knows which theme corresponds to which time
export type DaySettings = {
	time: 'day';
	theme: typeof dayTheme;
};

export type NightSettings = {
	time: 'night';
	theme: typeof nightTheme;
};

// Discriminated union - ensures time and theme are always in sync
export type SettingsState = DaySettings | NightSettings;

export interface SettingsContextType {
	settings: SettingsState;
	setTime: Dispatch<SetStateAction<TimeOfDay>>;
}

// Type guard to check if settings are day settings
export function isDaySettings(
	settings: SettingsState,
): settings is DaySettings {
	return settings.time === 'day';
}

// Type guard to check if settings are night settings
export function isNightSettings(
	settings: SettingsState,
): settings is NightSettings {
	return settings.time === 'night';
}

// Context
const SettingsContext = createContext<SettingsContextType | null>(null);

// Provider
export const SettingsProvider = ({ children }: { children: ReactNode }) => {
	const [time, setTime] = useState<TimeOfDay>('day');

	// Derive theme from time - no separate state needed
	const theme = useMemo(() => themes[time], [time]);

	// Memoize settings object to prevent unnecessary re-renders
	const settings = useMemo<SettingsState>(
		() => ({
			time,
			theme,
		}),
		[time, theme],
	);

	const value = useMemo(
		() => ({
			settings,
			setTime,
		}),
		[settings],
	);

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
