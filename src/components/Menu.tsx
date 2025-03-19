import React from 'react';
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
	Tooltip,
} from '@mui/material';

import { openLink } from 'utils';
import config from '@/config';

const menu = [
	{
		title: 'À propos',
		url: '/a-propos',
	},
	// {
	// 	title: "Projets",
	// 	url: "/projets",
	// },
	{
		title: 'Contact',
		url: `mailto:${config.mail}`,
	},
];

const icons = [
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

interface MenuPropsType {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = ({ open, setOpen }: MenuPropsType) => {
	return (
		<>
			<List>
				{menu.map((item, i) => {
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
									to={item.url}
									onClick={() => setOpen(false)}
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
				{icons.map((item, i) => {
					const Icon = item.icon;
					return (
						<Tooltip key={i} title={item.title}>
							<IconButton
								size="large"
								onClick={() => {
									openLink(item.url);
								}}
							>
								<Icon />
							</IconButton>
						</Tooltip>
					);
				})}
			</Box>
		</>
	);
};
