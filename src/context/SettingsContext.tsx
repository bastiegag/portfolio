import React, { createContext, useMemo, useEffect, useState } from 'react';

import { dayTheme, nightTheme } from 'theme';

interface ISettingsContext {
	settings: {
		time: keyof typeof themes;
		theme: typeof dayTheme;
	};
	setSettings: React.Dispatch<
		React.SetStateAction<ISettingsContext['settings']>
	>;
}

const themes = {
	day: dayTheme,
	night: nightTheme,
};

export const SettingsContext = createContext<ISettingsContext | null>(null);

export const SettingsProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [settings, setSettings] = useState<ISettingsContext['settings']>({
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
