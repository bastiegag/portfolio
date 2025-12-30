import { Suspense } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ThemeProvider } from '@mui/material';

import Routes from 'routes';
import { CursorProvider, OffsetProvider, PopperProvider } from 'context';
import { useSettings } from 'hooks';

/**
 * Main App component
 *
 * Sets up the application with all necessary providers and GSAP configuration.
 * Providers are nested to provide access to cursor, offset, and popper contexts throughout the app.
 * Theme is dynamically applied based on user settings (day/night mode).
 */
const App = () => {
	// Register GSAP plugin for React
	gsap.registerPlugin(useGSAP);
	const { settings } = useSettings();

	return (
		<Suspense>
			{/* Apply theme based on settings (day/night) */}
			<ThemeProvider theme={settings.theme}>
				{/* Nested providers for context availability */}
				<CursorProvider>
					<OffsetProvider>
						<PopperProvider>
							<Routes />
						</PopperProvider>
					</OffsetProvider>
				</CursorProvider>
			</ThemeProvider>
		</Suspense>
	);
};

export default App;
