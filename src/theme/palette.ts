interface Colors {
	[key: string]: string;
}

export const palette = (colors: Colors) => {
	return {
		scene: {
			sky: {
				light: colors.skyLight_12,
				mid: colors.skyMid_12,
				dark: colors.skyDark_12,
			},
			cloud: {
				back: {
					light: colors.cloudBackLight_12,
					mid: colors.cloudBackMid_12,
					dark: colors.cloudBackDark_12,
				},
				shade: {
					light: colors.cloudShadeLight_12,
					mid: colors.cloudShadeMid_12,
					dark: colors.cloudShadeDark_12,
				},
				far: {
					light: colors.cloudFarLight_12,
					mid: colors.cloudFarMid_12,
					dark: colors.cloudFarDark_12,
				},
			},
			island: {
				sand: {
					light: colors.islandSandLight_12,
					mid: colors.islandSandMid_12,
					dark: colors.islandSandDark_12,
				},
				grass: {
					light: colors.islandGrassLight_12,
					dark: colors.islandGrassDark_12,
				},
				water: colors.islandWater_12,
				wet: colors.islandWet_12,
				shadow: colors.islandShadow_12,
			},
			ocean: {
				back: {
					light: colors.oceanBackLight_12,
					dark: colors.oceanBackDark_12,
				},
				wave: colors.oceanWave_12,
			},
			rock: {
				kimberly: colors.rockKimberly_12,
				rum: colors.rockRum_12,
				cannon: colors.rockCannon_12,
				friar: colors.rockFriar_12,
				oyster: colors.rockOyster_12,
				santa: colors.rockSanta_12,
				onahau: colors.rockOnahau_12,
				serria: colors.rockSerria_12,
				dust: colors.rockDust_12,
				jaffa: colors.rockJaffa_12,
				chalk: colors.rockChalk_12,
				koromiko: colors.rockKoromiko_12,
				lavender: colors.rockLavender_12,
				coral: colors.rockCoral_12,
				hit: colors.rockHit_12,
			},
			palm: {
				leaf: {
					fern: colors.palmFern_12,
					olivedrab: colors.palmOliveDrab_12,
					olive: colors.palmOlive_12,
					luxor: colors.palmLuxor_12,
					alpine: colors.palmAlpine_12,
					sahara: colors.palmSahara_12,
					erals: colors.palmErals_12,
					rioja: colors.palmRioja_12,
					maverick: colors.palmMaverick_12,
					barbeery: colors.palmBarbeery_12,
				},
				trunk: {
					light: colors.palmTrunkLight_12,
					mid: colors.palmTrunkMid_12,
					dark: colors.palmTrunkDark_12,
				},
			},
		},
	};
};
