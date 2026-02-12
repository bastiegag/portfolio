import { useState, ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Dialog, Slide, SxProps, Theme } from '@mui/material';

import { Paper } from '@shared/components/Paper';
import { Content } from './Content';

export interface PageProps {
	children: ReactNode;
}

const paperSx: SxProps<Theme> = {
	m: { xs: 2, md: 3 },
	mt: { xs: 10, md: 18 },
	mb: { xs: 8, md: 10 },
	p: { xs: 2, md: 3 },
	pb: { xs: 6, md: 8 },
	'.MuiTypography-body1': {
		color: 'paper.lightText',
		strong: {
			color: 'paper.darkText',
		},
	},
};

const backdropSx: SxProps<Theme> = {
	backdropFilter: 'blur(4px)',
};

export const Page = ({ children }: PageProps) => {
	const navigate = useNavigate();
	const [open, setOpen] = useState<boolean>(true);

	const handleClose = useCallback(() => {
		navigate('/');
	}, [navigate]);

	const handleDialogClose = useCallback(() => {
		setOpen(false);
	}, []);

	return (
		<Dialog
			open={open}
			onClose={handleDialogClose}
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
					sx: paperSx,
				},
				backdrop: {
					sx: backdropSx,
				},
			}}
		>
			<Paper>
				<Content>{children}</Content>
			</Paper>
		</Dialog>
	);
};
