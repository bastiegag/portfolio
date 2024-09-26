import {
	IconMail,
	IconMoon,
	IconSun,
	IconPlayerPlay,
	IconPlayerPause,
} from '@tabler/icons-react';
import {
	AppBar,
	Toolbar,
	Divider,
	Stack,
	IconButton,
	useColorScheme,
} from '@mui/material';

import { Logo, Social } from 'components';
import { useThemeOptions } from 'hooks';
import config from '@/config';

export const Header = () => {
	const { mode, setMode, setColorScheme } = useColorScheme();
	const { settings, setSettings } = useThemeOptions();

	if (!mode) {
		return null;
	}

	return (
		<>
			{/* <AppBar>
			<Toolbar> */}

			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="top"
				sx={(theme) => ({
					position: 'absolute',
					top: 16,
					left: 16,
					zIndex: 10,
					[theme.breakpoints.down('md')]: {
						width: '100%',
						justifyContent: 'center',
					},
				})}
			>
				{/* <Logo /> */}
				{/* <Social /> */}
				{/* <Divider
						orientation="vertical"
						variant="middle"
						flexItem
						sx={{ borderColor: '#000', opacity: 0.25, mx: 1 }}
					/> */}
				{/* <Stack direction="row"> */}
					<IconButton
						size="large"
						onClick={() => {
							setMode(mode === 'dark' ? 'light' : 'dark');
						}}
					>
						{mode == 'dark' ? <IconSun /> : <IconMoon />}
					</IconButton>
					<IconButton
						size="large"
						onClick={() => {
							setSettings({
								...settings,
								animate: settings.animate ? false : true,
							});
						}}
					>
						{settings.animate ? (
							<IconPlayerPause />
						) : (
							<IconPlayerPlay />
						)}
					</IconButton>
					{/* <IconButton href={`mailto:${config.mail}`}>
						<IconMail />
					</IconButton> */}
				{/* </Stack> */}
			</Stack>
			{/* </Toolbar>
		</AppBar> */}
		</>
	);
};
