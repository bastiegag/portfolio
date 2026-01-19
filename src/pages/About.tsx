import { Typography, Box } from '@mui/material';

import { Page, Photo } from 'components';

const photoBoxStyles = {
	float: 'left',
	width: { xs: '100%', sm: '50%', md: '32%' },
	mr: 3,
	mb: { xs: 3, md: 2 },
} as const;

const paragraphStyles = { mb: 3 } as const;

export const About = () => {
	return (
		<Page>
			<Box sx={photoBoxStyles}>
				<Photo src="seb.jpg" />
			</Box>
			<Typography sx={paragraphStyles}>
				Hello, I'm <strong>Sébastien!</strong>
			</Typography>
			<Typography sx={paragraphStyles}>
				I’m a <strong>Senior Full Stack Developer</strong> with a strong
				front-end background, building modern, product-oriented web
				applications.
			</Typography>
			<Typography sx={paragraphStyles}>
				I work across the stack, combining{' '}
				<strong>React and TypeScript</strong> on the front end with{' '}
				<strong>backend contributions in Ruby and APIs</strong>, to
				deliver maintainable, scalable solutions. My approach focuses on{' '}
				<strong>
					clean architecture, UI/UX, performance, and accessibility
				</strong>
				, always aiming for pragmatic technical decisions that support
				long-term product quality.
			</Typography>
			<Typography sx={paragraphStyles}>
				Outside of coding, I enjoy activities that help me stay creative
				and focused, including music and outdoor sports.
			</Typography>
			<Typography>
				I care about building software that is simple to use, easy to
				maintain, and built to last.
			</Typography>
		</Page>
	);
};
