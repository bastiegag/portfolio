import { Suspense } from 'react';

import Routes from 'routes';
import {
	ThemeContextProvider,
	PopperContextProvider,
	ModalContextProvider,
	OffsetContextProvider,
} from 'context';

const App = () => {
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
