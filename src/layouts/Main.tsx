import { JSX } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Cursor } from 'components';
import { Header, Footer } from 'layouts';

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
