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
                        alt: {
                            lighter: colors.rockAltLighter_d,
                            light: colors.rockAltLight_d,
                            main: colors.rockAltMain_d,
                            dark: colors.rockAltDark_d,
                            darker: colors.rockAltDarker_d,
                        },
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
                    stud: {
                        light: colors.studLight_d,
                        dark: colors.studDark_d,
                    },
                    rope: colors.clotheslineRope_d,
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
                    message: {
                        light: colors.messageLight_d,
                        dark: colors.messageDark_d,
                    },
                    wood: {
                        lighter: colors.woodLighter_d,
                        light: colors.woodLight_d,
                        main: colors.woodMain_d,
                        dark: colors.woodDark_d,
                        darker: colors.woodDarker_d,
                    },
                    smoke: {
                        light: colors.smokeLight_d,
                        dark: colors.smokeDark_d,
                    },
                    popper: {
                        bg: colors.popperBg_d,
                        text: colors.popperText_d,
                    },
                },
            },
        },
    };
};
