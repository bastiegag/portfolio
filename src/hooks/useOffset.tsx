import { OffsetContext, OffsetProvider } from 'context';
import { useContextWrapper } from 'hooks';

export const useOffset = () =>
	useContextWrapper(OffsetContext, {
		contextName: useOffset.name,
		providerName: OffsetProvider.name,
	});
