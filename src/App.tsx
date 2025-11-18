import { Suspense } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import Routes from 'routes';
import {
	PopperProvider,
	ModalProvider,
	OffsetProvider,
	CursorProvider,
} from 'context';

const App = () => {
	gsap.registerPlugin(useGSAP);

	return (
		<Suspense>
			<CursorProvider>
				<OffsetProvider>
					<PopperProvider>
						<ModalProvider>
							<Routes />
						</ModalProvider>
					</PopperProvider>
				</OffsetProvider>
			</CursorProvider>
		</Suspense>
	);
};

export default App;
