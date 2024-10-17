interface Colors {
    [key: string]: string;
}

export const palette = (colors: Colors) => {
    return {
        social: {
            github: colors.github,
            vimeo: colors.vimeo,
            instagram: colors.instagram,
            linkedin: colors.linkedin,
        },
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
                alt: {
                    lighter: colors.rockAltLighter,
                    light: colors.rockAltLight,
                    main: colors.rockAltMain,
                    dark: colors.rockAltDark,
                    darker: colors.rockAltDarker,
                },
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
            stud: {
                light: colors.studLight,
                dark: colors.studDark,
            },
            rope: colors.clotheslineRope,
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
            message: {
                light: colors.messageLight,
                dark: colors.messageDark,
            },
            wood: {
                lighter: colors.woodLighter,
                light: colors.woodLight,
                main: colors.woodMain,
                dark: colors.woodDark,
                darker: colors.woodDarker,
            },
            smoke: {
                light: colors.smokeLight,
                dark: colors.smokeDark,
            },
            popper: {
                bg: colors.popperBg,
                text: colors.popperText,
            },
        },
    };
};
