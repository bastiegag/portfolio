import { CursorContext, CursorProvider } from 'context';
import { useContextWrapper } from 'hooks';

export const useCursor = () =>
	useContextWrapper(CursorContext, {
		contextName: useCursor.name,
		providerName: CursorProvider.name,
	});
