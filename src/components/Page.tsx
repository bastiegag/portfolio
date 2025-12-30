import { JSX, useState, ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Dialog, Slide, SxProps, Theme } from '@mui/material';

import { Paper, Content } from 'components';

/**
 * Props for the Page component
 */
export interface PageProps {
	/** Child elements to render within the page dialog */
	children: ReactNode;
}

/**
 * Styles for the dialog paper
 * - Responsive margins and padding
 * - Typography color overrides for light/dark text
 */
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

/**
 * Styles for the dialog backdrop
 * - Blur effect for visual depth
 */
const backdropSx: SxProps<Theme> = {
	backdropFilter: 'blur(4px)',
};

/**
 * Full-screen modal page component with slide-up animation
 *
 * Displays content in a centered dialog that slides up from the bottom.
 * When closed, navigates back to the home page after the exit animation.
 * Includes a blurred backdrop and responsive spacing.
 *
 * @param props - Page component props
 * @returns Modal dialog with animated page content
 */
export const Page = ({ children }: PageProps): JSX.Element => {
	const navigate = useNavigate();
	const [open, setOpen] = useState<boolean>(true);

	/**
	 * Navigate to home page after dialog has fully exited
	 */
	const handleClose = useCallback(() => {
		navigate('/');
	}, [navigate]);

	/**
	 * Start dialog close animation
	 */
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
