import { Suspense } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ThemeProvider } from '@mui/material';

import Routes from '@core/router';
import { CursorProvider } from '@shared/components/cursor/cursor.state';
import { OffsetProvider } from '@shared/hooks/offset/offset.state';
import { PopperProvider } from '@shared/hooks/popper/popper.state';
import { useSettings } from '@features/settings';

const App = () => {
	gsap.registerPlugin(useGSAP);
	const { settings } = useSettings();

	return (
		<Suspense>
			<ThemeProvider theme={settings.theme}>
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
