import { IconMail } from '@tabler/icons-react';
import { AppBar, Toolbar, Divider, Stack, IconButton } from '@mui/material';

import { Logo, Social } from 'components';
import config from '@/config';

export const Header = () => {
	return (
		<AppBar>
			<Toolbar>
				<Logo />
				<Stack
					direction="row"
					sx={(theme) => ({
						[theme.breakpoints.down('md')]: {
							width: '100%',
							justifyContent: 'center',
						},
					})}
				>
					<Social />
					<Divider
						orientation="vertical"
						variant="middle"
						flexItem
						sx={{ borderColor: '#000', opacity: 0.25, mx: 1 }}
					/>
					<IconButton href={`mailto:${config.mail}`}>
						<IconMail />
					</IconButton>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};
