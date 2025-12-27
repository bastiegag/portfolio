import { JSX, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { Dialog, Slide } from '@mui/material';

import { Paper, Content } from 'components';

export interface PageProps {
	children: ReactNode;
}

export const Page = ({ children }: PageProps): JSX.Element => {
	const navigate = useNavigate();
	const [open, setOpen] = useState<boolean>(true);

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
