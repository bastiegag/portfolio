import { Container, Cursor } from 'components';
import { Header, Footer } from 'layouts';
import { Error } from 'pages';
import { useSettings } from 'hooks';

export const ErrorLayout = () => {
	const { settings, setSettings } = useSettings();

	// Ensure that hasError is true in settings
	if (!settings.hasError) {
		setSettings({ ...settings, hasError: true });
	}

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
