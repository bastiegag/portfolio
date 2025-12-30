import { dayTheme, nightTheme } from 'theme';

/**
 * MUI theme component overrides
 *
 * Defines custom styling and default props for MUI components and custom Scene component.
 * These overrides are applied globally across the application.
 */
export const components = {
	// Custom Scene component styling
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
	// Dialog modal styling with responsive max-width
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
	// List item text with custom font and styling
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
	// Icon button with disabled ripple effect and hover state
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
	// Transparent paper background
	MuiPaper: {
		styleOverrides: {
			root: {
				backgroundColor: 'transparent',
			},
		},
	},
	// List item button with custom font and theme-aware colors
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
	// Tooltip with dark background
	MuiTooltip: {
		styleOverrides: {
			tooltip: {
				backgroundColor: '#000',
			},
		},
	},
	// Popper with custom z-index
	MuiPopper: {
		styleOverrides: {
			root: {
				zIndex: 1300,
			},
		},
	},
};
