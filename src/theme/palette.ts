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

			// rock: {
			// 	kimberly: colors.rockKimberly_12,
			// 	rum: colors.rockRum_12,
			// 	cannon: colors.rockCannon_12,
			// 	friar: colors.rockFriar_12,
			// 	oyster: colors.rockOyster_12,
			// 	santa: colors.rockSanta_12,
			// 	onahau: colors.rockOnahau_12,
			// 	serria: colors.rockSerria_12,
			// 	dust: colors.rockDust_12,
			// 	jaffa: colors.rockJaffa_12,
			// 	chalk: colors.rockChalk_12,
			// 	koromiko: colors.rockKoromiko_12,
			// 	lavender: colors.rockLavender_12,
			// 	coral: colors.rockCoral_12,
			// 	hit: colors.rockHit_12,
			// 	face: colors.rockFace_12,
			// 	faceRight: colors.rockFaceRight_12,
			// 	shade: colors.rockShade,
			// },
			// palm: {
			// 	leaf: {
			// 		fern: colors.palmFern_12,
			// 		olivedrab: colors.palmOliveDrab_12,
			// 		olive: colors.palmOlive_12,
			// 		luxor: colors.palmLuxor_12,
			// 		alpine: colors.palmAlpine_12,
			// 		sahara: colors.palmSahara_12,
			// 		erals: colors.palmErals_12,
			// 		rioja: colors.palmRioja_12,
			// 		maverick: colors.palmMaverick_12,
			// 		barbeery: colors.palmBarbeery_12,
			// 	},
			// 	trunk: {
			// 		light: colors.palmTrunkLight_12,
			// 		mid: colors.palmTrunkMid_12,
			// 		dark: colors.palmTrunkDark_12,
			// 	},
			// },
		},
	};
};
