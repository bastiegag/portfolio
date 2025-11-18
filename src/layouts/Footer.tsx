import {
	Box,
	useColorScheme,
	IconButton,
	useTheme,
	Tooltip,
} from '@mui/material';

import { MoonIcon, SunIcon } from 'components/Icons';
import { useCursor } from 'hooks';

export const Footer = () => {
	const theme = useTheme();
	const { mode, setMode } = useColorScheme();
	const { cursor, setCursor } = useCursor();

	if (!mode) {
		return null;
	}

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
						setMode(mode === 'dark' ? 'light' : 'dark');
					}}
				>
					{mode == 'dark' ? (
						<SunIcon size={32} />
					) : (
						<MoonIcon size={32} />
					)}
				</IconButton>
			</Tooltip>
		</Box>
	);
};
