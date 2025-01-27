import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Stack, IconButton, Modal, Box, Fade } from "@mui/material";

import { Logo, Menu } from "components";

const menuContainer = {
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

export const Header = () => {
	const [open, setOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setOpen((value) => !value);
	};

	return (
		<>
			<Modal
				sx={(theme) => ({
					color: "white",
					zIndex: theme.zIndex.drawer + 1,
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
				sx={(theme) => ({
					position: "absolute",
					top: theme.spacing(3),
					left: theme.spacing(3),
					right: theme.spacing(3),
					zIndex: theme.zIndex.drawer + 2,
					[theme.breakpoints.down("sm")]: {
						justifyContent: "center",
						flexWrap: "wrap",
					},
				})}
			>
				<Logo />

				<IconButton
					size="large"
					onClick={toggleMenu}
					sx={{ color: "white" }}
				>
					{open ? <IconX /> : <IconMenu2 />}
				</IconButton>
			</Stack>
		</>
	);
};
