import { dayTheme, nightTheme } from '.';

export const components = {
	Scene: {
		styleOverrides: {
			root: {
				height: '100%',
				width: 'auto',
				minWidth: '100%',
			},
			island: {
				transform: 'scale(0.85) translateY(12px) translateX(2%)',
				transformOrigin: '50% 50%',
			},
		},
	},
	MuiDialog: {
		styleOverrides: {
			root: ({
				theme,
			}: {
				theme: typeof dayTheme | typeof nightTheme;
			}) => ({
				'.MuiDialog-scrollBody > .MuiDialog-paper': {
					maxWidth: 'calc(100% - 32px)',
					width: '100%',
					[theme.breakpoints.up('md')]: {
						maxWidth: '900px',
						width: 'calc(100% - 48px)',
					},
				},
			}),
		},
	},
	MuiListItemText: {
		styleOverrides: {
			root: {
				primary: {
					fontFamily: 'Chelsea Market, system-ui',
					fontSize: '5rem',
					textShadow: '2px 4px 0 rgba(0,0,0,0.15)',
					textAlign: 'center',
				},
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
				padding: 0,
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
			root: ({
				theme,
			}: {
				theme: typeof dayTheme | typeof nightTheme;
			}) => ({
				fontFamily: 'Chelsea Market, system-ui',
				fontSize: '5rem',
				color: theme.vars.palette.base.primary,
				justifyContent: 'center',
				'&:hover': {
					color: 'white',
					backgroundColor: 'transparent',
				},
			}),
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
