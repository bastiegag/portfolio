import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Main } from '@features/layout';
import { Error } from '@core/pages';

// Lazy load pages for code splitting
const Home = lazy(() => import('@core/pages/Home'));
const About = lazy(() => import('@core/pages/About'));
const Projects = lazy(() => import('@core/pages/Projects'));

// Loading fallback component
const PageFallback = () => (
	<div
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
		}}
	>
		Loading...
	</div>
);

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			errorElement: <Error />,
			children: [
				{
					path: '/',
					element: (
						<Suspense fallback={<PageFallback />}>
							<Home />
						</Suspense>
					),
					errorElement: <Error />,
				},
				{
					path: '/about',
					element: (
						<Suspense fallback={<PageFallback />}>
							<About />
						</Suspense>
					),
					errorElement: <Error />,
				},
				{
					path: '/projects',
					element: (
						<Suspense fallback={<PageFallback />}>
							<Projects />
						</Suspense>
					),
					errorElement: <Error />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
