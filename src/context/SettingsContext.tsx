import {
	createContext,
	useMemo,
	useEffect,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

import { dayTheme, nightTheme } from 'theme';

interface SettingsContext {
	settings: {
		time: keyof typeof themes;
		theme: typeof dayTheme;
	};
	setSettings: Dispatch<SetStateAction<SettingsContext['settings']>>;
}

const themes = {
	day: dayTheme,
	night: nightTheme,
};

export const SettingsContext = createContext<SettingsContext | null>(null);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
	const [settings, setSettings] = useState<SettingsContext['settings']>({
		time: 'day',
		theme: dayTheme,
	});

	const value = useMemo(() => ({ settings, setSettings }), [settings]);

	useEffect(() => {
		setSettings((prev) => ({
			...prev,
			theme: themes[settings.time],
		}));
	}, [settings.time]);

	return (
		<SettingsContext.Provider value={value}>
			{children}
		</SettingsContext.Provider>
	);
};
