import { OffsetContext, OffsetContextProvider } from 'context';
import { useContextWrapper } from 'hooks';

export const useOffset = () =>
	useContextWrapper(OffsetContext, {
		contextName: useOffset.name,
		providerName: OffsetContextProvider.name,
	});
