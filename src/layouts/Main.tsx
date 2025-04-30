import React from 'react';
import { Outlet } from 'react-router-dom';

import 'assets/scss/_document.scss';
import { Container, Cursor } from 'components';
import { Header, Footer } from 'layouts';

export const Main = () => {
	return (
		<React.Fragment>
			<Cursor />
			<Header />

			<Container>
				<Outlet />
			</Container>

			<Footer />
		</React.Fragment>
	);
};
