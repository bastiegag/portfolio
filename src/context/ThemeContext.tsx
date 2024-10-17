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
    // const svgs = document.querySelectorAll('svg');
    // [...svgs].forEach((svg) => svg.pauseAnimations());

    useEffect(() => {
        const svgs = document.querySelectorAll('svg');

        if (settings.animate) {
            gsap.globalTimeline.play();
            [...svgs].forEach((svg) => svg.unpauseAnimations());
        } else {
            gsap.globalTimeline.pause();
            [...svgs].forEach((svg) => svg.pauseAnimations());
        }
    }, [settings]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
