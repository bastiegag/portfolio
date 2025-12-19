import { useContext, Context } from 'react';

interface Config {
	contextName: string;
	providerName: string;
}

export const useContextWrapper = <T,>(
	ReactContext: Context<T>,
	config: Config
) => {
	const context = useContext(ReactContext);
	const { contextName, providerName } = config;

	if (!context) {
		throw new Error(`${contextName} must be used within a ${providerName}`);
	}

	return context;
};
