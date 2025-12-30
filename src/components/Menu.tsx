import React, { JSX, useCallback } from 'react';
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
	SxProps,
	Theme,
} from '@mui/material';

import { useCursor } from 'hooks';
import { openLink } from 'utils';
import config from '@/config';

/**
 * Navigation menu items with internal/external links
 */
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

/**
 * Social media icons and links
 */
const ICONS = [
	{ title: 'Github', icon: IconBrandGithub, url: config.github },
	{ title: 'Vimeo', icon: IconBrandVimeo, url: config.vimeo },
	{ title: 'Instagram', icon: IconBrandInstagram, url: config.instagram },
	{ title: 'LinkedIn', icon: IconBrandLinkedin, url: config.linkedin },
];

/**
 * Icon size for social media buttons
 */
const ICON_SIZE = 32;

/**
 * Styles for the social media container
 * - Positioned at bottom right
 * - Responsive padding
 */
const socialContainer: SxProps<Theme> = {
	position: 'absolute',
	bottom: 0,
	right: 0,
	p: { xs: 2, md: 3 },
};

/**
 * Responsive font sizes for menu items
 */
const menuItemSx: SxProps<Theme> = {
	fontSize: {
		xs: '3rem',
		md: '4rem',
		lg: '5rem',
	},
};

/**
 * Props for the Menu component
 */
interface MenuProps {
	/** Whether the menu is open/visible */
	open: boolean;
	/** Function to control menu open state */
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Full-screen navigation menu with slide-in animation
 *
 * Displays main navigation links with staggered slide-up animations
 * and social media icon buttons at the bottom right.
 * Updates cursor state on hover for custom cursor interaction.
 *
 * @param props - Menu component props
 * @returns Animated menu with navigation links and social icons
 */
export const Menu = ({ open, setOpen }: MenuProps): JSX.Element => {
	const { setCursor } = useCursor();

	/**
	 * Handle menu item click to close menu
	 */
	const handleMenuClick = useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	/**
	 * Handle mouse enter to activate custom cursor hover state
	 */
	const handleMouseEnter = useCallback(() => {
		setCursor({ hover: true });
	}, [setCursor]);

	/**
	 * Handle mouse leave to deactivate custom cursor hover state
	 */
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
