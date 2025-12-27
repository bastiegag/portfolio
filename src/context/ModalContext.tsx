import { createContext, Dispatch, SetStateAction, ComponentType } from 'react';

export interface ModalContextType {
	modal: {
		open: boolean;
		component?: ComponentType;
	};
	setModal: Dispatch<SetStateAction<ModalContextType['modal']>>;
}
export const ModalContext = createContext<ModalContextType | null>(null);
