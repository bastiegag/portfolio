import {
	IconMoon,
	IconSun,
	IconPlayerPlay,
	IconPlayerPause,
	IconLayersIntersect,
	IconLayersSubtract,
} from '@tabler/icons-react';
import {
	Box,
	useColorScheme,
	IconButton,
	useTheme,
	Tooltip,
} from '@mui/material';

import { MoonIcon, SunIcon } from 'components/Icons';
import { useThemeOptions, useCursor } from 'hooks';

export const Footer = () => {
	const theme = useTheme();
	const { mode, setMode } = useColorScheme();
	const { themeOptions, setThemeOptions } = useThemeOptions();
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
			{/* <Tooltip
				title={
					themeOptions.animate ? 'Stop animation' : 'Play animation'
				}
			>
				<IconButton
					size="large"
					onClick={() => {
						setThemeOptions({
							...themeOptions,
							animate: themeOptions.animate ? false : true,
						});
					}}
				>
					{themeOptions.animate ? (
						<IconPlayerPause />
					) : (
						<IconPlayerPlay />
					)}
				</IconButton>
			</Tooltip> */}
			{/* <Tooltip
				title={
					themeOptions.parallax
						? 'Deactivate parallax'
						: 'Activate parallax'
				}
			>
				<IconButton
					size="large"
					onClick={() => {
						setThemeOptions({
							...themeOptions,
							parallax: themeOptions.parallax ? false : true,
						});
					}}
				>
					{themeOptions.parallax ? (
						<IconLayersSubtract />
					) : (
						<IconLayersIntersect />
					)}
				</IconButton>
			</Tooltip> */}
			{/* <Tooltip title="Dark mode"> */}
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
			{/* </Tooltip> */}
		</Box>
	);
};
