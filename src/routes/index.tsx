import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Main } from "layouts";
import { Home, Error } from "pages";

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main />,
			errorElement: <Error />,
			children: [
				{
					path: "/",
					element: <Home />,
					errorElement: <Error />,
					children: [
						{
							path: "/a-propos",
							element: "",
						},
						{
							path: "/projets",
							element: "",
						},
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routes;
