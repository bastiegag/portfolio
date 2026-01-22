import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Main, ErrorLayout } from 'layouts';
import { Home, About, Projects } from 'pages';

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			ErrorBoundary: ErrorLayout,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/about',
					element: <About />,
				},
				{
					path: '/projects',
					element: <Projects />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
