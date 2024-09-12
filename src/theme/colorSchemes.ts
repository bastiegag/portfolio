import { palette } from './palette';

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
					water: {
						light: colors.waterLight_d,
						dark: colors.waterDark_d,
					},
					cloud: {
						light: colors.cloudLight_d,
						dark: colors.cloudDark_d,
					},
					sand: {
						light: colors.sandLight_d,
						dark: colors.sandDark_d,
						darker: colors.sandDarker_d,
					},
					grass: colors.grass_d,
					rock: {
						100: colors.rock100_d,
						200: colors.rock200_d,
						300: colors.rock300_d,
						400: colors.rock400_d,
						500: colors.rock500_d,
						600: colors.rock600_d,
						700: colors.rock700_d,
						800: colors.rock800_d,
					},
					palm: {
						light: colors.palmLight_d,
						dark: colors.palmDark_d,
					},
					trunk: {
						light: colors.trunkLight_d,
						dark: colors.trunkDark_d,
					},
					leaf: {
						lighter: colors.leafLighter_d,
						light: colors.leafLight_d,
						main: colors.leafMain_d,
						dark: colors.leafDark_d,
						darker: colors.leafDarker_d,
					},
				},
			},
		},
	};
};
