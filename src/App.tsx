import { Suspense } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ThemeProvider } from '@mui/material';

import Routes from '@core/router';
import { ErrorBoundary } from '@shared/components/ErrorBoundary';
import { CursorProvider } from '@shared/components/cursor/cursor.state';
import { OffsetProvider } from '@shared/hooks/offset/offset.state';
import { PopperProvider } from '@shared/hooks/popper/popper.state';
import { NavigationProvider } from '@shared/services/navigation';
import { useWebVitals } from '@shared/hooks/performance';
import { useSettings } from '@features/settings';

const App = () => {
	gsap.registerPlugin(useGSAP);
	const { settings } = useSettings();

	// Monitor Core Web Vitals for performance tracking
	useWebVitals({
		debug: import.meta.env.DEV,
		onMetric: () => {
			// In production, send to analytics service
			if (!import.meta.env.DEV) {
				// Example: analytics.track('web_vitals', metric);
			}
		},
	});

	return (
		<Suspense>
			<ThemeProvider theme={settings.theme}>
				<ErrorBoundary>
					<NavigationProvider>
						<CursorProvider>
							<OffsetProvider>
								<PopperProvider>
									<Routes />
								</PopperProvider>
							</OffsetProvider>
						</CursorProvider>
					</NavigationProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</Suspense>
	);
};

export default App;
