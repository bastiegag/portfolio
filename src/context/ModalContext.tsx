import {
	createContext,
	useMemo,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
	ComponentType,
} from 'react';
import { Modal, Box, Fade } from '@mui/material';

interface ModalContext {
	modal: {
		open: boolean;
		component?: ComponentType;
	};
	setModal: Dispatch<SetStateAction<ModalContext['modal']>>;
}
export const ModalContext = createContext<ModalContext | null>(null);

const container = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [modal, setModal] = useState<ModalContext['modal']>({
		open: false,
	});
	const handleClose = () => setModal({ ...modal, open: false });
	const value = useMemo(() => ({ modal, setModal }), [modal]);

	return (
		<ModalContext.Provider value={value}>
			<Modal
				sx={(theme) => ({
					color: 'white',
					zIndex: theme.zIndex.drawer + 1,
				})}
				open={modal.open}
				onClose={handleClose}
				closeAfterTransition
			>
				<Fade in={modal.open}>
					<Box sx={container}>
						{modal.component && <modal.component />}
					</Box>
				</Fade>
			</Modal>
			{children}
		</ModalContext.Provider>
	);
};
