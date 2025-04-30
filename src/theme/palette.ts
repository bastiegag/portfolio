interface Colors {
	[key: string]: string;
}

export const palette = (colors: Colors) => {
	return {
		scene: {
			black: colors.black,
			white: colors.white,
			primary: colors.primary,
			sky: {
				light: colors.skyLight,
				main: colors.skyMain,
				dark: colors.skyDark,
			},
			cloud: {
				light: colors.cloudLight,
				dark: colors.cloudDark,
			},
			water: {
				light: colors.waterLight,
				dark: colors.waterDark,
			},
			ripple: {
				light: colors.rippleLight,
				dark: colors.rippleDark,
			},
			sand: {
				light: colors.sandLight,
				dark: colors.sandDark,
				darker: colors.sandDarker,
			},
			rock: {
				100: colors.rock100,
				200: colors.rock200,
				300: colors.rock300,
				400: colors.rock400,
				500: colors.rock500,
				600: colors.rock600,
				700: colors.rock700,
				800: colors.rock800,
				900: colors.rock900,
			},
			palm: {
				lighter: colors.palmLighter,
				light: colors.palmLight,
				main: colors.palmMain,
				dark: colors.palmDark,
				darker: colors.palmDarker,
			},
			foliage: {
				lighter: colors.foliageLighter,
				light: colors.foliageLight,
				main: colors.foliageMain,
				dark: colors.foliageDark,
				darker: colors.foliageDarker,
			},
			trunk: {
				light: colors.trunkLight,
				dark: colors.trunkDark,
			},
			wood: {
				lighter: colors.woodLighter,
				light: colors.woodLight,
				lightless: colors.woodLightless,
				main: colors.woodMain,
				dark: colors.woodDark,
				darker: colors.woodDarker,
			},
			rope: {
				light: colors.ropeLight,
				dark: colors.ropeDark,
			},
			towel: {
				light: colors.towelLight,
				dark: colors.towelDark,
				icon: colors.towelIcon,
			},
			bottle: {
				light: colors.bottleLight,
				main: colors.bottleMain,
				dark: colors.bottleDark,
			},
			cap: {
				light: colors.capLight,
				dark: colors.capDark,
			},
			paper: {
				lighter: colors.paperLighter,
				light: colors.paperLight,
				main: colors.paperMain,
				dark: colors.paperDark,
				darker: colors.paperDarker,
				text: colors.paperText,
			},
			mug: {
				lighter: colors.mugLighter,
				light: colors.mugLight,
				main: colors.mugMain,
				dark: colors.mugDark,
				darker: colors.mugDarker,
			},
			smoke: colors.smoke,
			popper: {
				bg: colors.popperBg,
				text: colors.popperText,
			},
			red: {
				light: colors.redLight,
				dark: colors.redDark,
			},
		},
	};
};
