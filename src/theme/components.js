// import config from '@/config';

const themeComponents = (colors, theme) => {
	return {
		MuiBox: {
			defaultProps: {
				m: 0,
			},
		},
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
	};
};

export default themeComponents;
