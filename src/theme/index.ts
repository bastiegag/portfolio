import { createTheme } from '@mui/material';

import colors from 'assets/scss/_vars.module.scss';
import { components } from './components';
import { palette } from './palette';
import { typography } from './typography';
import { colorSchemes } from './colorSchemes';

declare module '@mui/material/styles' {
	interface Palette {
		scene: object;
	}
	interface PaletteOptions {
		scene: object;
	}
	// interface ColorSchemeOverrides {
	// 	sunset: true;
	// }
}

const portfolioTheme = () => {
	const themeOptions = {
		colorSchemes: colorSchemes(colors),
		cssVariables: {
			colorSchemeSelector: 'class',
		},
		palette: palette(colors),
		typography: typography(),
		components: components(colors),
	};

	return createTheme(themeOptions);
};

export default portfolioTheme;
