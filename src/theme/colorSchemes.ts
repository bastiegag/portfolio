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
						light: colors.skyLight_24,
						mid: colors.skyMid_24,
						dark: colors.skyDark_24,
					},
					// cloud: {
					// 	back: colors.cloudBack_12,
					// 	shade: colors.cloudShade_12,
					// 	alt: {
					// 		back: colors.cloudAltBack_12,
					// 		shade: colors.cloudAltShade_12,
					// 	},
					// },
					// island: {
					// 	sand: {
					// 		light: colors.islandSandLight_24,
					// 		dark: colors.islandSandDark_24,
					// 	},
					// 	grass: colors.islandGrass_24,
					// 	water: colors.islandWater_24,
					// },
					// ocean: {
					// 	back: {
					// 		light: colors.oceanBackLight_24,
					// 		dark: colors.oceanBackDark_24,
					// 	},
					// 	wave: colors.oceanWave_24,
					// },
					// rock: {
					// 	kimberly: colors.rockKimberly_24,
					// 	rum: colors.rockRum_24,
					// 	cannon: colors.rockCannon_24,
					// 	friar: colors.rockFriar_24,
					// 	oyster: colors.rockOyster_24,
					// 	santa: colors.rockSanta_24,
					// 	onahau: colors.rockOnahau_24,
					// 	serria: colors.rockSerria_24,
					// 	dust: colors.rockDust_24,
					// 	jaffa: colors.rockJaffa_24,
					// 	chalk: colors.rockChalk_24,
					// 	koromiko: colors.rockKoromiko_24,
					// 	lavender: colors.rockLavender_24,
					// 	coral: colors.rockCoral_24,
					// 	hit: colors.rockHit_24,
					// },
					// palm: {
					// 	leaf: {
					// 		fern: colors.palmFern_24,
					// 		olivedrab: colors.palmOliveDrab_24,
					// 		olive: colors.palmOlive_24,
					// 		luxor: colors.palmLuxor_24,
					// 		alpine: colors.palmAlpine_24,
					// 		sahara: colors.palmSahara_24,
					// 		erals: colors.palmErals_24,
					// 		rioja: colors.palmRioja_24,
					// 		maverick: colors.palmMaverick_24,
					// 		barbeery: colors.palmBarbeery_24,
					// 	},
					// 	trunk: {
					// 		light: colors.palmTrunkLight_24,
					// 		mid: colors.palmTrunkMid_24,
					// 		dark: colors.palmTrunkDark_24,
					// 	},
					// },
				},
			},
		},
	};
};
