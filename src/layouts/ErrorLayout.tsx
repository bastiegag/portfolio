import { useEffect } from 'react';
import { Container, Cursor } from 'components';
import { Header, Footer } from 'layouts';
import { Error } from 'pages';
import { useSettings } from 'hooks';

export const ErrorLayout = () => {
	const { settings, setSettings } = useSettings();

	// Ensure that hasError is true in settings
	useEffect(() => {
		if (!settings.hasError) {
			setSettings({ ...settings, hasError: true });
		}
	}, [settings, setSettings]);

	return (
		<>
			<Cursor />
			<Header />

			<Container>
				<Error />
			</Container>

			<Footer />
		</>
	);
};
