import { Suspense } from "react";

import Routes from "routes";
import {
	ThemeContextProvider,
	PopperContextProvider,
	ModalContextProvider,
} from "context";

const App = () => {
	return (
		<Suspense>
			<ThemeContextProvider>
				<PopperContextProvider>
					<ModalContextProvider>
						<Routes />
					</ModalContextProvider>
				</PopperContextProvider>
			</ThemeContextProvider>
		</Suspense>
	);
};

export default App;
