import React, { createContext, useMemo, useState } from "react";
import { Modal, Box, Fade } from "@mui/material";

interface IModalContext {
	modal: {
		open: boolean;
		component?: React.ComponentType;
	};
	setModal: React.Dispatch<React.SetStateAction<IModalContext["modal"]>>;
}
export const ModalContext = createContext<IModalContext | null>(null);

const container = {
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

export const ModalContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [modal, setModal] = useState<IModalContext["modal"]>({
		open: false,
	});
	const handleClose = () => setModal({ ...modal, open: false });
	const value = useMemo(() => ({ modal, setModal }), [modal]);

	return (
		<ModalContext.Provider value={value}>
			<Modal
				sx={(theme) => ({
					color: "white",
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
