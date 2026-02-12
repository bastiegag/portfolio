import { useState, useCallback } from 'react';
import { Stack, IconButton, Modal, Box, Fade } from '@mui/material';
import { Theme } from '@mui/material/styles';

import { Logo } from './Logo';
import { Menu } from './Menu';
import { useCursor } from '@shared/components/cursor/cursor.state';
import { MenuIcon, CloseIcon } from '@shared/components/Icons';

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

const modalStyles = (theme: Theme) => ({
	color: 'white',
	zIndex: theme.zIndex.modal + 1,
	'.MuiModal-backdrop': {
		backdropFilter: 'blur(4px)',
	},
});

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

const iconButtonStyles = { color: 'white' } as const;

export const Header = () => {
	const [open, setOpen] = useState(false);
	const { setCursor } = useCursor();

	const handleClose = useCallback(() => setOpen(false), []);
	const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
	const handleMouseEnter = useCallback(
		() => setCursor({ hover: true }),
		[setCursor],
	);
	const handleMouseLeave = useCallback(
		() => setCursor({ hover: false }),
		[setCursor],
	);

	return (
		<>
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
					{open ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
				</IconButton>
			</Stack>
		</>
	);
};
