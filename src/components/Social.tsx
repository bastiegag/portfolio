import { Stack, IconButton } from '@mui/material';
import {
	IconBrandGithub,
	IconBrandVimeo,
	IconBrandInstagram,
	IconBrandLinkedin,
} from '@tabler/icons-react';

const links = [
	{
		name: 'Github',
		url: 'https://github.com/bastiegag',
		icon: <IconBrandGithub />,
	},
	{
		name: 'Vimeo',
		url: 'https://vimeo.com/bastiegag',
		icon: <IconBrandVimeo />,
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/bastiegag/',
		icon: <IconBrandInstagram />,
	},
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/bastiegag/',
		icon: <IconBrandLinkedin />,
	},
];

export const Social = () => {
	const Buttons = () => {
		const buttons = links.map((item) => {
			return (
				<IconButton key={item.name} href={item.url} target="_blank">
					{item.icon}
				</IconButton>
			);
		});

		return buttons;
	};

	return (
		<Stack direction="row">
			<Buttons />
		</Stack>
	);
};
