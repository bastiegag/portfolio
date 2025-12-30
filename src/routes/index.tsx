import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Main } from 'layouts';
import { Home, About, Error } from 'pages';

/**
 * Routes component - Application router configuration
 *
 * Defines the routing structure using React Router v6.
 * All routes are wrapped in the Main layout which provides header, footer, and cursor.
 * Error boundaries are configured at both the root and individual route levels.
 */
const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			errorElement: <Error />,
			children: [
				{
					path: '/',
					element: <Home />,
					errorElement: <Error />,
				},
				{
					path: '/about',
					element: <About />,
					errorElement: <Error />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
