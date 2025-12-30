import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import { SettingsProvider } from 'context';
import App from './App';

/**
 * Application entry point
 *
 * Initializes React root and wraps the app with necessary providers:
 * - StrictMode for development checks
 * - StyledEngineProvider to prioritize custom styles over MUI defaults
 * - SettingsProvider for theme management
 * - CssBaseline for consistent baseline styles
 */
createRoot(document.getElementById('root')!, {
	identifierPrefix: 'seb-',
}).render(
	<StrictMode>
		<StyledEngineProvider injectFirst>
			<SettingsProvider>
				<CssBaseline />
				<App />
			</SettingsProvider>
		</StyledEngineProvider>
	</StrictMode>
);
