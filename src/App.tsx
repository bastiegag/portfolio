import { Suspense } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import Routes from 'routes';
import {
	ThemeContextProvider,
	PopperContextProvider,
	ModalContextProvider,
	OffsetContextProvider,
} from 'context';

const App = () => {
	gsap.registerPlugin(useGSAP);

	return (
		<Suspense>
			<ThemeContextProvider>
				<OffsetContextProvider>
					<PopperContextProvider>
						<ModalContextProvider>
							<Routes />
						</ModalContextProvider>
					</PopperContextProvider>
				</OffsetContextProvider>
			</ThemeContextProvider>
		</Suspense>
	);
};

export default App;
