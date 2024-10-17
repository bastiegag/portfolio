import React, { createContext, useMemo, useState } from 'react';
import { Popper, Box } from '@mui/material';
import { useTheme } from '@mui/system';

interface IPopperContext {
    settings: {
        anchorEl: HTMLAnchorElement | null;
        title: string;
    };
    setSettings: React.Dispatch<
        React.SetStateAction<IPopperContext['settings']>
    >;
}

export const PopperContext = createContext<IPopperContext | null>(null);

export const PopperContextProvider = ({
    children,
}: React.PropsWithChildren<{}>) => {
    const [settings, setSettings] = useState<IPopperContext['settings']>({
        anchorEl: null,
        title: '',
    });

    const colors = useTheme().palette.scene;
    const value = useMemo(() => ({ settings, setSettings }), [settings]);

    const open = Boolean(settings.anchorEl);

    return (
        <PopperContext.Provider value={value}>
            <Popper open={open} anchorEl={settings.anchorEl} placement="top">
                <Box
                    sx={{
                        backgroundColor: colors.popper.bg,
                        borderRadius: '6px',
                        color: colors.popper.text,
                        p: 1,
                        fontFamily: 'Afacad Flux',
                    }}
                >
                    {settings.title}
                </Box>
            </Popper>
            {children}
        </PopperContext.Provider>
    );
};
