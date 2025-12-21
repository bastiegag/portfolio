import { JSX } from 'react';
import { Box, IconButton } from '@mui/material';

import { MoonIcon, SunIcon } from 'components/Icons';
import { useCursor, useSettings } from 'hooks';

export const Footer = (): JSX.Element => {
	const { settings, setSettings } = useSettings();
	const { setCursor } = useCursor();

	return (
		<Box
			sx={(theme) => ({
				position: 'absolute',
				bottom: 0,
				left: 0,
				p: 2,
				color: 'white',
				zIndex: theme.zIndex.modal + 2,
			})}
		>
			<IconButton
				size="large"
				onMouseEnter={() => setCursor({ hover: true })}
				onMouseLeave={() => setCursor({ hover: false })}
				onClick={() => {
					setSettings({
						...settings,
						time: settings.time === 'night' ? 'day' : 'night',
					});
				}}
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
