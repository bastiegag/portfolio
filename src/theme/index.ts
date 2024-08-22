import { createTheme } from '@mui/material';

import colors from 'assets/scss/_vars.module.scss';
// import config from '@/config';

console.log(colors);

const portfolioTheme = () => {
	const theme = createTheme();

	return createTheme({
		components: {
			MuiAppBar: {
				defaultProps: {
					elevation: 0,
				},
				styleOverrides: {
					root: {
						top: '36px',
						backgroundColor: 'transparent',
						[theme.breakpoints.down('md')]: {
							top: '24px',
						},
					},
				},
			},
			MuiToolbar: {
				styleOverrides: {
					root: {
						justifyContent: 'space-between',
						alignItems: 'start',
						flexWrap: 'wrap',
						[theme.breakpoints.down('md')]: {
							justifyContent: 'center',
							'.logo': {
								order: 2,
								marginTop: '16px',
								width: '360px',
							},
						},
					},
				},
			},
		},
		palette: {
			primary: { main: colors.primary },
			secondary: { main: colors.secondary },
			success: { main: colors.success },
			info: { main: colors.info },
			warning: { main: colors.warning },
			error: { main: colors.error },
		},
	});
};

export default portfolioTheme;
