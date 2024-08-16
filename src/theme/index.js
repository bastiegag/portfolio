import { createTheme } from '@mui/material';

import colors from '@assets/scss/_vars.module.scss';
// import config from '@/config';
import themeComponents from './components';
// import themePalette from './palette';
// import themeTypography from './typography';
// import themeShadows from './shadows';

const sebTheme = () => {
	const theme = createTheme();
	const themeOptions = {
		components: themeComponents(colors, theme),
		// palette: themePalette(colors),
		// shape: {
		// 	borderRadius: config.borderRadius,
		// },
		// typography: themeTypography(colors, theme.breakpoints),
		// shadows: themeShadows(colors),
	};

	return createTheme(themeOptions);
};

export default sebTheme;
