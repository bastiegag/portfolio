import React, { useCallback } from 'react';
import { Link } from 'react-router';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import {
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Slide,
	Stack,
	SxProps,
	Theme,
} from '@mui/material';

import { useCursor } from 'hooks';
import { openLink } from 'utils';
import config from '@/config';

const MENU = [
	{
		title: 'About',
		url: '/about',
	},
	{
		title: 'Contact',
		url: `mailto:${config.mail}`,
	},
];
const ICONS = [
	{ title: 'Github', icon: IconBrandGithub, url: config.github },
	{ title: 'LinkedIn', icon: IconBrandLinkedin, url: config.linkedin },
];
const ICON_SIZE = 32;

const socialContainer: SxProps<Theme> = {
	position: 'absolute',
	bottom: 0,
	right: 0,
	p: { xs: 2, md: 3 },
};

const menuItemSx: SxProps<Theme> = {
	fontSize: {
		xs: '3rem',
		md: '4rem',
		lg: '5rem',
	},
};

interface MenuProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = ({ open, setOpen }: MenuProps) => {
	const { setCursor } = useCursor();

	const handleMenuClick = useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	const handleMouseEnter = useCallback(() => {
		setCursor({ hover: true });
	}, [setCursor]);

	const handleMouseLeave = useCallback(() => {
		setCursor({ hover: false });
	}, [setCursor]);

	return (
		<>
			<List>
				{MENU.map((item, i) => {
					return (
						<Slide
							key={i}
							direction="up"
							in={open}
							{...(open ? { timeout: i * 100 + 200 } : {})}
						>
							<ListItem disablePadding>
								<ListItemButton
									component={Link}
									color="black"
									to={item.url}
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
									onClick={handleMenuClick}
									sx={menuItemSx}
								>
									{item.title}
								</ListItemButton>
							</ListItem>
						</Slide>
					);
				})}
			</List>

			<Stack spacing={2} direction="row" sx={socialContainer}>
				{ICONS.map((item, i) => {
					const Icon = item.icon;
					return (
						<IconButton
							key={i}
							size="large"
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							onClick={() => openLink(item.url)}
						>
							<Icon size={ICON_SIZE} />
						</IconButton>
					);
				})}
			</Stack>
		</>
	);
};
