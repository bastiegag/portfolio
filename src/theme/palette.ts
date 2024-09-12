interface Colors {
	[key: string]: string;
}

export const palette = (colors: Colors) => {
	return {
		scene: {
			sky: {
				light: colors.skyLight,
				main: colors.skyMain,
				dark: colors.skyDark,
			},
			water: {
				light: colors.waterLight,
				dark: colors.waterDark,
			},
			cloud: {
				light: colors.cloudLight,
				dark: colors.cloudDark,
			},
			sand: {
				light: colors.sandLight,
				dark: colors.sandDark,
				darker: colors.sandDarker,
			},
			grass: colors.grass,
			rock: {
				100: colors.rock100,
				200: colors.rock200,
				300: colors.rock300,
				400: colors.rock400,
				500: colors.rock500,
				600: colors.rock600,
				700: colors.rock700,
				800: colors.rock800,
			},
			palm: {
				light: colors.palmLight,
				dark: colors.palmDark,
			},
			trunk: {
				light: colors.trunkLight,
				dark: colors.trunkDark,
			},
			leaf: {
				lighter: colors.leafLighter,
				light: colors.leafLight,
				main: colors.leafMain,
				dark: colors.leafDark,
				darker: colors.leafDarker,
			},
		},
	};
};
