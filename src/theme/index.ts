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
		cloud: {
			light: string;
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
		cursor: {
			light: string;
			dark: string;
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
		cloud: {
			light: string;
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
		cursor: {
			light: string;
			dark: string;
		};
	}
	interface Components {
		Scene?: {
			styleOverrides?: {
				root?: any;
				[key: string]: any;
			};
			[key: string]: any;
		};
	}
}

export const dayTheme = createTheme({
	typography: {
		fontFamily: '"Chelsea Market", system-ui',
		fontSize: 16,
	},
	palette: dayColors,
	cssVariables: { cssVarPrefix: 'seb', disableCssColorScheme: true },
	components: components,
});

export const nightTheme = createTheme({
	typography: {
		fontFamily: '"Chelsea Market", system-ui',
		fontSize: 16,
	},
	palette: nightColors,
	cssVariables: { cssVarPrefix: 'seb', disableCssColorScheme: true },
	components: components,
});

export { dayColors } from './dayColors';
export { nightColors } from './nightColors';
