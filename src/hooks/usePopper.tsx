import { PopperContext, PopperProvider } from 'context';
import { useContextWrapper } from 'hooks';

export const usePopper = () =>
	useContextWrapper(PopperContext, {
		contextName: usePopper.name,
		providerName: PopperProvider.name,
	});
