import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import { SettingsProvider } from 'context';
import App from './App';

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
