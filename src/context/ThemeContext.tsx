import React, { createContext, useEffect, useMemo, useState } from 'react';
import { gsap } from 'gsap';

interface IThemeContext {
	settings: {
		animate: boolean;
	};
	setSettings: React.Dispatch<
		React.SetStateAction<IThemeContext['settings']>
	>;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [settings, setSettings] = useState<IThemeContext['settings']>({
		animate: false,
	});

	const value = useMemo(() => ({ settings, setSettings }), [settings]);

	useEffect(() => {
		settings.animate
			? gsap.globalTimeline.play()
			: gsap.globalTimeline.pause();
	}, [settings]);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
