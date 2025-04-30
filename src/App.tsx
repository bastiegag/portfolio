import { Suspense } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import Routes from 'routes';
import {
	ThemeProvider,
	PopperProvider,
	ModalProvider,
	OffsetProvider,
	CursorProvider,
} from 'context';

const App = () => {
	gsap.registerPlugin(useGSAP);

	return (
		<Suspense>
			<ThemeProvider>
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
