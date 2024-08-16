import { Stack, IconButton } from '@mui/material';
import * as IconGen from '@tabler/icons-react';

export const Social = () => {
	const links = [
		{ name: 'Github', url: 'https://github.com/bastiegag' },
		{ name: 'Vimeo', url: 'https://vimeo.com/bastiegag' },
		// { name: 'Dribbble', url: 'https://dribbble.com' },
		{ name: 'Instagram', url: 'https://www.instagram.com/bastiegag/' },
		{ name: 'Linkedin', url: 'https://www.linkedin.com/in/bastiegag/' },
	];

	const Buttons = () => {
		const buttons = links.map((item) => {
			const Icon = IconGen[`IconBrand${item.name}`];

			return (
				<IconButton key={item.name} href={item.url} target="_blank">
					<Icon />
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
