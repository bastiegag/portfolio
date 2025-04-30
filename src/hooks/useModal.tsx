import { ModalContext, ModalProvider } from 'context';
import { useContextWrapper } from 'hooks';

export const useModal = () =>
	useContextWrapper(ModalContext, {
		contextName: useModal.name,
		providerName: ModalProvider.name,
	});
