import { ModalContext, ModalContextProvider } from "context";
import { useContextWrapper } from "hooks";

export const useModal = () =>
	useContextWrapper(ModalContext, {
		contextName: useModal.name,
		providerName: ModalContextProvider.name,
	});
