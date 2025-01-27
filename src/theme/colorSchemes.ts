import { palette } from "./palette";

interface Colors {
	[key: string]: string;
}

export const colorSchemes = (colors: Colors) => {
	return {
		light: {
			palette: palette(colors),
		},
		dark: {
			palette: {
				scene: {
					sky: {
						light: colors.skyLight_d,
						main: colors.skyMain_d,
						dark: colors.skyDark_d,
					},
					cloud: {
						light: colors.cloudLight_d,
						dark: colors.cloudDark_d,
					},
					water: {
						light: colors.waterLight_d,
						dark: colors.waterDark_d,
					},
					sand: {
						light: colors.sandLight_d,
						dark: colors.sandDark_d,
						darker: colors.sandDarker_d,
					},
					rock: {
						100: colors.rock100_d,
						200: colors.rock200_d,
						300: colors.rock300_d,
						400: colors.rock400_d,
						500: colors.rock500_d,
						600: colors.rock600_d,
						700: colors.rock700_d,
						800: colors.rock800_d,
						900: colors.rock900_d,
					},
					palm: {
						lighter: colors.palmLighter_d,
						light: colors.palmLight_d,
						main: colors.palmMain_d,
						dark: colors.palmDark_d,
						darker: colors.palmDarker_d,
					},
					foliage: {
						lighter: colors.foliageLighter_d,
						light: colors.foliageLight_d,
						main: colors.foliageMain_d,
						dark: colors.foliageDark_d,
						darker: colors.foliageDarker_d,
					},
					trunk: {
						light: colors.trunkLight_d,
						dark: colors.trunkDark_d,
					},
					wood: {
						lighter: colors.woodLighter_d,
						light: colors.woodLight_d,
						lightless: colors.woodLightless_d,
						main: colors.woodMain_d,
						dark: colors.woodDark_d,
						darker: colors.woodDarker_d,
					},
					rope: {
						light: colors.ropeLight_d,
						dark: colors.ropeDark_d,
					},
					towel: {
						light: colors.towelLight_d,
						dark: colors.towelDark_d,
						icon: colors.towelIcon_d,
					},
					bottle: {
						light: colors.bottleLight_d,
						main: colors.bottleMain_d,
						dark: colors.bottleDark_d,
					},
					paper: {
						lighter: colors.paperLighter_d,
						light: colors.paperLight_d,
						main: colors.paperMain_d,
						dark: colors.paperDark_d,
						darker: colors.paperDarker_d,
					},
					smoke: colors.smoke_d,
					popper: {
						bg: colors.popperBg_d,
						text: colors.popperText_d,
					},
					red: {
						light: colors.redLight_d,
						dark: colors.redDark_d,
					},
				},
			},
		},
	};
};
