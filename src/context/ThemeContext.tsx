import React, { createContext, useEffect, useMemo, useState } from 'react';
import { gsap } from 'gsap';

interface IThemeContext {
	themeOptions: {
		animate: boolean;
		parallax: boolean;
	};
	setThemeOptions: React.Dispatch<
		React.SetStateAction<IThemeContext['themeOptions']>
	>;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [themeOptions, setThemeOptions] = useState<
		IThemeContext['themeOptions']
	>({
		animate: true,
		parallax: false,
	});

	const value = useMemo(
		() => ({ themeOptions, setThemeOptions }),
		[themeOptions]
	);

	useEffect(() => {
		const svgs = document.querySelectorAll('svg');

		if (themeOptions.animate) {
			gsap.globalTimeline.play();
			[...svgs].forEach((svg) => svg.unpauseAnimations());
		} else {
			gsap.globalTimeline.pause();
			[...svgs].forEach((svg) => svg.pauseAnimations());
		}
	}, [themeOptions]);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
