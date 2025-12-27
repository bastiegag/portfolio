import { useMemo, useEffect, useState, ReactNode } from 'react';

import { dayTheme } from 'theme';
import { SettingsContext, type SettingsContextType, themes } from 'context';

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
