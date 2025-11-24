import { Box, IconButton, useTheme, Tooltip } from '@mui/material';

import { MoonIcon, SunIcon } from 'components/Icons';
import { useCursor, useSettings } from 'hooks';

export const Footer = () => {
	const theme = useTheme();
	const { settings, setSettings } = useSettings();
	const { setCursor } = useCursor();

	return (
		<Box
			sx={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				p: 3,
				color: 'white',
				zIndex: theme.zIndex.modal + 2,
			}}
		>
			<Tooltip title="Dark mode">
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
					{settings.time == 'night' ? (
						<SunIcon size={32} />
					) : (
						<MoonIcon size={32} />
					)}
				</IconButton>
			</Tooltip>
		</Box>
	);
};
