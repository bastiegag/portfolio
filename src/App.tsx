import { Suspense } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ThemeProvider } from '@mui/material';

import Routes from 'routes';
import {
	CursorProvider,
	ModalProvider,
	OffsetProvider,
	PopperProvider,
} from 'context';
import { useSettings } from 'hooks';

const App = () => {
	gsap.registerPlugin(useGSAP);
	const { settings } = useSettings();

	return (
		<Suspense>
			<ThemeProvider theme={settings.theme}>
				<CursorProvider>
					<OffsetProvider>
						<PopperProvider>
							<ModalProvider>
								<Routes />
							</ModalProvider>
						</PopperProvider>
					</OffsetProvider>
				</CursorProvider>
			</ThemeProvider>
		</Suspense>
	);
};

export default App;
