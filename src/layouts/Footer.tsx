import { JSX, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import { Theme } from '@mui/material/styles';

import { MoonIcon, SunIcon } from 'components/Icons';
import { useCursor, useSettings } from 'hooks';

const footerBoxStyles = (theme: Theme) => ({
	position: 'absolute',
	bottom: 0,
	left: 0,
	p: { xs: 2, md: 3 },
	color: 'white',
	zIndex: theme.zIndex.modal + 2,
});

export const Footer = (): JSX.Element => {
	const { settings, setSettings } = useSettings();
	const { setCursor } = useCursor();

	const handleMouseEnter = useCallback(
		() => setCursor({ hover: true }),
		[setCursor]
	);
	const handleMouseLeave = useCallback(
		() => setCursor({ hover: false }),
		[setCursor]
	);
	const handleToggleTheme = useCallback(() => {
		setSettings((prev) => ({
			...prev,
			time: prev.time === 'night' ? 'day' : 'night',
		}));
	}, [setSettings]);

	return (
		<Box sx={footerBoxStyles}>
			<IconButton
				size="large"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleToggleTheme}
			>
				{settings.time === 'night' ? (
					<SunIcon size={32} />
				) : (
					<MoonIcon size={32} />
				)}
			</IconButton>
		</Box>
	);
};
