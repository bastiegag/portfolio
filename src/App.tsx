import { Suspense, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ThemeProvider, Button } from '@mui/material';

import Routes from 'routes';
import {
	PopperProvider,
	ModalProvider,
	OffsetProvider,
	CursorProvider,
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
