interface Components {
	[key: string]: any;
}

export const components = (theme: Components) => {
	return {
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
					...theme.applyStyles('dark', {
						backgroundColor: 'transparent',
					}),
				},
			},
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					justifyContent: 'space-between',
					alignItems: 'start',
					flexwrap: 'wrap',
					backgroundColor: 'transparent',
					[theme.breakpoints.down('md')]: {
						justifyContent: 'center',
						'.logo': {
							order: 2,
							marginTop: '16px',
							width: '360px',
						},
					},
					...theme.applyStyles('dark', {
						backgroundColor: 'transparent',
					}),
				},
			},
		},
	};
};
