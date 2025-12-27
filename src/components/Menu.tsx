import React, { JSX } from 'react';
import { Link } from 'react-router';
import {
	IconBrandGithub,
	IconBrandVimeo,
	IconBrandInstagram,
	IconBrandLinkedin,
} from '@tabler/icons-react';
import {
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Slide,
	Stack,
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
	{ title: 'Vimeo', icon: IconBrandVimeo, url: config.vimeo },
	{ title: 'Instagram', icon: IconBrandInstagram, url: config.instagram },
	{ title: 'LinkedIn', icon: IconBrandLinkedin, url: config.linkedin },
];

const socialContainer = {
	position: 'absolute',
	bottom: 0,
	right: 0,
	p: { xs: 2, md: 3 },
};

interface MenuProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = ({ open, setOpen }: MenuProps): JSX.Element => {
	const { setCursor } = useCursor();

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

			<Stack spacing={2} direction="row" sx={socialContainer}>
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
			</Stack>
		</>
	);
};
