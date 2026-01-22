import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Cursor } from 'components';
import { Header, Footer } from 'layouts';
import { useSettings } from 'hooks';

export const Main = () => {
	const { settings, setSettings } = useSettings();

	// Ensure that hasError is true in settings
	useEffect(() => {
		if (settings.hasError) {
			setSettings({ ...settings, hasError: false });
		}
	}, [settings, setSettings]);

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
