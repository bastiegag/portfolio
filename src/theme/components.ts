export const components = {
	MuiListItemText: {
		styleOverrides: {
			primary: {
				fontFamily: 'Chelsea Market, system-ui',
				fontSize: '5rem',
				textShadow: '2px 4px 0 rgba(0,0,0,0.15)',
				textAlign: 'center',
			},
		},
	},
	MuiIconButton: {
		defaultProps: {
			disableRipple: true,
		},
		styleOverrides: {
			root: {
				justifyContent: 'center !important',
				color: 'inherit',
				'&:hover': {
					color: 'white',
				},
			},
		},
	},
	MuiPaper: {
		styleOverrides: {
			root: {
				backgroundColor: 'transparent',
			},
		},
	},
	MuiListItemButton: {
		defaultProps: {
			disableRipple: true,
		},
		styleOverrides: {
			root: {
				fontFamily: 'Chelsea Market, system-ui',
				fontSize: '5rem',
				textAlign: 'center',
				color: 'inherit',
				justifyContent: 'center',
				'&:hover': {
					color: 'white',
					backgroundColor: 'transparent',
				},
			},
		},
	},
	MuiTooltip: {
		styleOverrides: {
			tooltip: {
				backgroundColor: '#000',
			},
		},
	},
	MuiPopper: {
		styleOverrides: {
			root: {
				zIndex: 1300,
			},
		},
	},
};
