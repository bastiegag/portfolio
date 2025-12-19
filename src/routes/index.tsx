import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Main } from 'layouts';
import { Home, About, Projects, Error } from 'pages';

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
					path: '/a-propos',
					element: <About />,
					errorElement: <Error />,
				},
				//{
				//	path: '/projets',
				//	element: <Projects />,
				//	errorElement: <Error />,
				//},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
