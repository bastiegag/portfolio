import { JSX, useState } from 'react';
import { Stack, IconButton, Modal, Box, Fade } from '@mui/material';

import { Logo, Menu } from 'components';
import { useCursor } from 'hooks';
import { MenuIcon, CloseIcon } from 'components/Icons';

const menuContainer = {
	alignItems: 'center',
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	left: 0,
	position: 'absolute',
	top: 0,
	width: '100%',
};

export const Header = (): JSX.Element => {
	const [open, setOpen] = useState<boolean>(false);
	const { setCursor } = useCursor();

	const toggleMenu = () => {
		setOpen((value) => !value);
	};

	return (
		<>
			<Modal
				sx={(theme) => ({
					color: 'white',
					zIndex: theme.zIndex.modal + 1,
					'.MuiModal-backdrop': {
						backdropFilter: 'blur(4px)',
					},
				})}
				open={open}
				onClose={() => setOpen(false)}
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
				sx={(theme) => ({
					position: 'absolute',
					top: theme.spacing(3),
					left: theme.spacing(3),
					right: theme.spacing(3),
					zIndex: theme.zIndex.modal + 2,
				})}
			>
				<Logo />

				<IconButton
					size="large"
					onMouseEnter={() => setCursor({ hover: true })}
					onMouseLeave={() => setCursor({ hover: false })}
					onClick={toggleMenu}
					sx={{ color: 'white' }}
				>
					{open ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
				</IconButton>
			</Stack>
		</>
	);
};
