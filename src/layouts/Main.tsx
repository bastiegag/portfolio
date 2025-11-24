import React from 'react';
import { Outlet } from 'react-router-dom';

import 'assets/scss/_document.scss';
import { Container, Cursor, Customizer } from 'components';
import { Header, Footer } from 'layouts';

export const Main = () => {
	return (
		<React.Fragment>
			{/*<Cursor />*/}
			{/*<Customizer />*/}
			<Header />

			<Container>
				<Outlet />
			</Container>

			<Footer />
		</React.Fragment>
	);
};
