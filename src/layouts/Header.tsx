import { JSX, useState, useCallback } from 'react';
import { Stack, IconButton, Modal, Box, Fade } from '@mui/material';
import { Theme } from '@mui/material/styles';

import { Logo, Menu } from 'components';
import { useCursor } from 'hooks';
import { MenuIcon, CloseIcon } from 'components/Icons';

// Styling for centering menu content in modal
const menuContainer = {
	alignItems: 'center',
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	left: 0,
	position: 'absolute',
	top: 0,
	width: '100%',
} as const;

// Modal styling with backdrop blur
const modalStyles = (theme: Theme) => ({
	color: 'white',
	zIndex: theme.zIndex.modal + 1,
	'.MuiModal-backdrop': {
		backdropFilter: 'blur(4px)',
	},
});

// Header bar positioning and responsive background
const headerStackStyles = (theme: Theme) => ({
	left: 0,
	p: { xs: 2, md: 3 },
	position: 'absolute',
	right: 0,
	top: 0,
	zIndex: theme.zIndex.modal + 2,
	background: {
		xs: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)',
		md: 'transparent',
	},
});

// Icon button styling
const iconButtonStyles = { color: 'white' } as const;

/**
 * Header component with logo and menu toggle
 *
 * Displays a fixed position header with the portfolio logo and a button to
 * toggle the navigation menu modal. Features blur backdrop and smooth transitions.
 */
export const Header = (): JSX.Element => {
	const [open, setOpen] = useState(false);
	const { setCursor } = useCursor();

	// Memoize handlers to prevent recreating on every render
	const handleClose = useCallback(() => setOpen(false), []);
	const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
	const handleMouseEnter = useCallback(
		() => setCursor({ hover: true }),
		[setCursor]
	);
	const handleMouseLeave = useCallback(
		() => setCursor({ hover: false }),
		[setCursor]
	);

	return (
		<>
			{/* Full-screen modal overlay for navigation menu */}
			<Modal
				sx={modalStyles}
				open={open}
				onClose={handleClose}
				closeAfterTransition
			>
				<Fade in={open}>
					<Box sx={menuContainer}>
						<Menu open={open} setOpen={setOpen} />
					</Box>
				</Fade>
			</Modal>

			{/* Header bar with logo and menu toggle button */}
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="start"
				spacing={3}
				sx={headerStackStyles}
			>
				<Logo />

				<IconButton
					size="large"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onClick={toggleMenu}
					sx={iconButtonStyles}
				>
					{/* Toggle between close and menu icons based on state */}
					{open ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
				</IconButton>
			</Stack>
		</>
	);
};
