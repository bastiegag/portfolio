import React, { createContext, useMemo, useState } from 'react';
import { Popper, Box, Slide } from '@mui/material';
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

export const PopperProvider = ({ children }: React.PropsWithChildren<{}>) => {
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
				<Slide direction="up" in={open}>
					<Box
						sx={{
							backgroundColor: colors.popper.bg,
							borderRadius: '24px',
							color: colors.popper.text,
							py: 0.5,
							px: 2,
							mt: -7,
							fontFamily: '"Chelsea Market", system-ui',
							fontSize: '1rem',
							pointerEvents: 'none',
						}}
					>
						{settings.title}
					</Box>
				</Slide>
			</Popper>
			{children}
		</PopperContext.Provider>
	);
};
