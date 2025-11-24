import { createTheme } from '@mui/material';
import type {} from '@mui/material/themeCssVarsAugmentation';

import { components } from './components';
import { dayColors } from './dayColors';
import { nightColors } from './nightColors';

declare module '@mui/material/styles' {
	interface Palette {
		base: {
			black: string;
			white: string;
			primary: string;
			light: string;
		};
		sky: {
			light: string;
			main: string;
			dark: string;
		};
		water: {
			light: string;
			dark: string;
		};
		sand: {
			light: string;
			dark: string;
			darker: string;
		};
		foliage: {
			lighter: string;
			light: string;
			main: string;
			dark: string;
			darker: string;
		};
		trunk: {
			light: string;
			dark: string;
		};
		palm: {
			lighter: string;
			light: string;
			main: string;
			dark: string;
			darker: string;
		};
		rock: {
			100: string;
			200: string;
			300: string;
			400: string;
			500: string;
			600: string;
			700: string;
			800: string;
			900: string;
		};
	}
	interface PaletteOptions {
		base: {
			black: string;
			white: string;
			primary: string;
			light: string;
		};
		sky: {
			light: string;
			main: string;
			dark: string;
		};
		water: {
			light: string;
			dark: string;
		};
		sand: {
			light: string;
			dark: string;
			darker: string;
		};
		foliage: {
			lighter: string;
			light: string;
			main: string;
			dark: string;
			darker: string;
		};
		trunk: {
			light: string;
			dark: string;
		};
		palm: {
			lighter: string;
			light: string;
			main: string;
			dark: string;
			darker: string;
		};
		rock: {
			100: string;
			200: string;
			300: string;
			400: string;
			500: string;
			600: string;
			700: string;
			800: string;
			900: string;
		};
	}
}

const theme = createTheme({
	typography: {
		fontFamily: '"Chelsea Market", system-ui',
		fontSize: 16,
	},
	//components: components,
});

export const dayTheme = createTheme({
	palette: dayColors,
	cssVariables: { cssVarPrefix: 'sg', disableCssColorScheme: true },
	//components: components,
});

export const nightTheme = createTheme({
	palette: nightColors,
	cssVariables: { cssVarPrefix: 'sg', disableCssColorScheme: true },
});

export default theme;
export { dayColors } from './dayColors';
export { nightColors } from './nightColors';
