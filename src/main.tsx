import React from 'react';
import { createRoot } from 'react-dom/client';
import {
	CssBaseline,
	StyledEngineProvider,
	ThemeProvider,
} from '@mui/material';

import App from './App';
import theme from 'theme';

createRoot(document.getElementById('root')!, {
	identifierPrefix: 'seb-',
}).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme()}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
