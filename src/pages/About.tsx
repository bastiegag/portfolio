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
					mb: { xs: 3, md: 2 },
				}}
			>
				<Photo src="seb.jpg" />
			</Box>

			<Typography sx={{ mb: 3 }}>
				Hello, I'm <strong>Sébastien!</strong>
			</Typography>
			<Typography sx={{ mb: 3 }}>
				I focus on building{' '}
				<strong>modern, product-oriented web applications</strong>, with
				an emphasis on{' '}
				<strong>clarity, maintainability and user experience</strong>.
			</Typography>
			<Typography sx={{ mb: 3 }}>
				My work is driven by <strong>pragmatic decisions</strong> and
				clean front-end architecture. I care about building interfaces
				that are easy to understand, evolve and maintain over time.
			</Typography>
			<Typography sx={{ mb: 3 }}>
				I work closely with{' '}
				<strong>product, design and backend teams</strong>, and I value
				clear communication and thoughtful trade-offs. I also contribute
				to backend development when needed, which helps me better
				understand product constraints and data flows.
			</Typography>
			<Typography>
				Outside of work, I build personal projects using{' '}
				<strong>React and TypeScript</strong>, where I explore
				architecture, tooling and UI patterns in a practical way.
			</Typography>
		</Page>
	);
};
