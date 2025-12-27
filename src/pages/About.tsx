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

			<Typography sx={{ mb: 3 }}>
				Hello, I'm <strong>Sébastien!</strong>
			</Typography>
			<Typography sx={{ mb: 3 }}>
				I’m a <strong>Senior Front-End Developer</strong> focused on
				building modern, product-oriented web applications. I specialize
				in <strong>React and JavaScript</strong>, with a strong interest
				in{' '}
				<strong>front-end architecture, performance and UI/UX</strong>.
			</Typography>
			<Typography sx={{ mb: 3 }}>
				I currently work in a corporate environment, where I design and
				develop scalable front-end features and collaborate closely with
				product, design and backend teams. I also contribute to backend
				development when needed, which helps me better understand data
				flows and product constraints.
			</Typography>
			<Typography sx={{ mb: 3 }}>
				Outside of work, I actively build personal projects using{' '}
				<strong>React and TypeScript</strong>, focusing on clean
				architecture, maintainability and long-term scalability.
			</Typography>
			<Typography>
				I enjoy working at the intersection of design and engineering,
				turning complex requirements into clear, intuitive user
				experiences.
			</Typography>
		</Page>
	);
};
