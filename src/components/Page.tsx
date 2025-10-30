import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { Dialog, Slide } from '@mui/material';

import { Paper, Content } from 'components';

export interface PagePropsType {
	children: ReactNode;
}

export const Page = ({ children }: PagePropsType) => {
	const navigate = useNavigate();
	const [open, setOpen] = React.useState<boolean>(true);

	const handleClose = () => {
		navigate('/');
	};

	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			closeAfterTransition
			onTransitionExited={handleClose}
			scroll="body"
			maxWidth="md"
			fullWidth={true}
			slots={{
				transition: Slide,
			}}
			slotProps={{
				transition: { direction: 'up' },
				paper: {
					elevation: 0,
					sx: {
						mt: 14,
						p: 2,
					},
				},
				backdrop: {
					sx: {
						backdropFilter: 'blur(4px)',
					},
				},
			}}
		>
			<Paper>
				<Content>{children}</Content>
			</Paper>
		</Dialog>
	);
};
