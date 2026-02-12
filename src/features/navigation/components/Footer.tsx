import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles';

import { ThemeSwitcher } from '@features/settings';

const footerBoxStyles = (theme: Theme) => ({
	position: 'absolute',
	bottom: 0,
	left: 0,
	p: { xs: 2, md: 3 },
	color: 'white',
	zIndex: theme.zIndex.modal + 2,
});

export const Footer = () => {
	return (
		<Box sx={footerBoxStyles}>
			<ThemeSwitcher />
		</Box>
	);
};
