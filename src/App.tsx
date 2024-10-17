import { Suspense } from 'react';

import Routes from 'routes';
import { ThemeContextProvider, PopperContextProvider } from 'context';

const App = () => {
    return (
        <Suspense>
            <ThemeContextProvider>
                <PopperContextProvider>
                    <Routes />
                </PopperContextProvider>
            </ThemeContextProvider>
        </Suspense>
    );
};

export default App;
