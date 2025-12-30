import { JSX } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Cursor } from 'components';
import { Header, Footer } from 'layouts';

/**
 * Main layout component
 *
 * Provides the base layout structure for all pages including header, footer,
 * custom cursor, and a container for page content. Uses React Router's Outlet
 * to render nested route components.
 */
export const Main = (): JSX.Element => {
	return (
		<>
			<Cursor />
			<Header />

			<Container>
				<Outlet />
			</Container>

			<Footer />
		</>
	);
};
