import { JSX } from 'react';
import { Typography, Box } from '@mui/material';

import { Page, Photo } from 'components';

export const About = (): JSX.Element => {
	return (
		<Page>
			<Box
				sx={{
					float: 'left',
					width: { xs: '100%', sm: '50%', md: '32%' },
					mr: 3,
					mb: 3,
				}}
			>
				<Photo src="seb.jpg" />
			</Box>

			<Typography color="paper.text" sx={{ mb: 3 }}>
				Hello, I'm <strong>Sébastien!</strong>
			</Typography>
			<Typography color="paper.text" sx={{ mb: 3 }}>
				I’m a <strong>Senior Front-End Developer</strong> based in
				Sherbrooke, Canada, with 13+ years of professional front-end
				experience building modern, product-oriented web applications.
			</Typography>
			<Typography color="paper.text" sx={{ mb: 3 }}>
				I specialize in <strong>React</strong> and{' '}
				<strong>JavaScript</strong>, with professional React experience
				in corporate environments since 2022. My work focuses on
				front-end architecture, performance and close collaboration with
				design and product teams to deliver intuitive user experiences.
			</Typography>
			<Typography color="paper.text" sx={{ mb: 3 }}>
				In my current role, I also contribute to{' '}
				<strong>backend development in Ruby</strong>, which allows me to
				better understand API design and product constraints. Outside of
				work, I actively build personal projects using{' '}
				<strong>React</strong> and <strong>TypeScript</strong>, focusing
				on clean architecture, maintainability and scalability.
			</Typography>
			<Typography color="paper.text">
				I enjoy working at the intersection of design and engineering,
				and I value code quality, collaboration and continuous learning.
			</Typography>
		</Page>
	);
};
