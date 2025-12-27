import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Main } from 'layouts';
import { Home, About, Error } from 'pages';

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
