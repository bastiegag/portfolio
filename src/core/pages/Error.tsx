import { useRouteError } from 'react-router-dom';

export const Error = () => {
	const error = useRouteError();

	console.error('Route Error:', error);

	return null;
};
