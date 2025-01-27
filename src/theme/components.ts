interface Colors {
	[key: string]: string;
}

export const components = (colors: Colors) => {
	return {
		MuiListItemText: {
			styleOverrides: {
				root: {
					".MuiListItemText-primary": {
						fontFamily: `"Joti One", serif`,
						fontSize: "5rem",
						textShadow: "2px 4px 0 rgba(0,0,0,0.15)",
						textAlign: "center",
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
					justifyContent: "center !important",
					color: "inherit",
					"&:hover": {
						color: colors.white,
					},
				},
			},
		},
		MuiListItemButton: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					fontFamily: `"Joti One", serif`,
					fontSize: "5rem",
					textShadow: "2px 4px 0 rgba(0,0,0,0.15)",
					textAlign: "center",
					color: colors.primary,
					justifyContent: "center",
					"&:hover": {
						color: colors.white,
						backgroundColor: "transparent",
					},
				},
			},
		},
		MuiTooltip: {
			styleOverrides: {
				root: {
					".MuiTooltip-tooltip": {
						backgroundColor: "#000",
					},
				},
			},
		},
	};
};
