import { Outlet } from 'react-router-dom';

import { Container } from '@shared/components/Container';
import { Cursor } from '@shared/components/cursor/Cursor';
import { Header, Footer } from '@features/navigation';

export const Main = () => {
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
