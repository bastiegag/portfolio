import React, { JSX } from 'react';
import { Link } from 'react-router';
import {
	IconBrandGithub,
	IconBrandVimeo,
	IconBrandInstagram,
	IconBrandLinkedin,
} from '@tabler/icons-react';
import {
	Box,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Slide,
} from '@mui/material';

import { useCursor } from 'hooks';
import { openLink } from 'utils';
import config from '@/config';

const MENU = [
	{
		title: 'À propos',
		url: '/a-propos',
	},
	{
		title: 'Contact',
		url: `mailto:${config.mail}`,
	},
];

const ICONS = [
	{ title: 'Github', icon: IconBrandGithub, url: config.github },
	{ title: 'Vimeo', icon: IconBrandVimeo, url: config.vimeo },
	{ title: 'Instagram', icon: IconBrandInstagram, url: config.instagram },
	{ title: 'LinkedIn', icon: IconBrandLinkedin, url: config.linkedin },
];

const socialContainer = {
	position: 'absolute',
	bottom: 0,
	right: 0,
	p: 3,
};

interface MenuProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = ({ open, setOpen }: MenuProps): JSX.Element => {
	const { cursor, setCursor } = useCursor();

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
									onMouseEnter={() =>
										setCursor({ hover: true })
									}
									onMouseLeave={() =>
										setCursor({ hover: false })
									}
									onClick={() => setOpen(false)}
									sx={{
										fontSize: {
											xs: '3rem',
											md: '4rem',
											lg: '5rem',
										},
									}}
								>
									{item.title}
								</ListItemButton>
							</ListItem>
						</Slide>
					);
				})}
			</List>

			<Box sx={socialContainer}>
				<Box sx={{ flexGrow: 1 }} />
				{ICONS.map((item, i) => {
					const Icon = item.icon;
					return (
						<IconButton
							key={i}
							size="large"
							onMouseEnter={() => setCursor({ hover: true })}
							onMouseLeave={() => setCursor({ hover: false })}
							onClick={() => {
								openLink(item.url);
							}}
						>
							<Icon size={32} />
						</IconButton>
					);
				})}
			</Box>
		</>
	);
};
