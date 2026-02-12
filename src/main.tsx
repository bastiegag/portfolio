import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import { SettingsProvider } from '@features/settings';
import App from './App';
import '@core/i18n';
import '@assets/scss/_document.scss';

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
	</StrictMode>,
);
