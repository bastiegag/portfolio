import React from 'react';
import { Outlet } from 'react-router-dom';

import 'assets/scss/_document.scss';
import { Header, Footer } from 'layouts';

export const Main = () => {
	return (
		<React.Fragment>
			<Header />

			<Outlet />

			<Footer />
		</React.Fragment>
	);
};
