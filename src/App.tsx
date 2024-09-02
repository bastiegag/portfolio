import { Suspense } from 'react';

import Routes from 'routes';
import { ThemeContextProvider } from 'context';

const App = () => {
	return (
		<Suspense>
			<ThemeContextProvider>
				<Routes />
			</ThemeContextProvider>
		</Suspense>
	);
};

export default App;
