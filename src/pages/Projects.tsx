import { Typography, Box, Divider } from '@mui/material';

import { Link, Page, Photo } from 'components';
import config from '@/config';

const titleBoxStyles = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	flexDirection: { xs: 'column', md: 'row' },
	my: 2,
} as const;

const photoBoxStyles = {
	float: 'left',
	width: { xs: '100%', sm: '50%', md: '32%' },
	mr: 3,
	mb: { xs: 3, md: 2 },
} as const;

const paragraphStyles = { mb: 3 } as const;

export const Projects = () => {
	return (
		<Page>
			<Box sx={titleBoxStyles}>
				<Typography>
					<strong>Dude, Where’s My Cash?</strong>
				</Typography>
				<Link
					url={`${config.github}/dwmc`}
					title="View project on Github"
				>
					<Typography>Github</Typography>
				</Link>
			</Box>
			<Divider sx={{ mb: 3 }} />
			<Box sx={photoBoxStyles}>
				<Photo src="dwmc.jpg" />
			</Box>
			<Typography sx={paragraphStyles}>
				A modern personal finance management web application designed to
				help users track expenses, manage multiple wallets, categorize
				transactions, and monitor budgets in real time.
			</Typography>
			<Typography sx={paragraphStyles}>
				Built with React and TypeScript, the application leverages
				Firebase for authentication, data storage, and real-time
				synchronization. The architecture focuses on maintainability,
				scalability, and performance, using TanStack Query for efficient
				server-state management and Vite for fast development and
				optimized builds.
			</Typography>
			<Typography sx={paragraphStyles}>
				The interface is fully responsive and emphasizes usability and
				clarity, with visual analytics that help users better understand
				their spending habits. The project demonstrates a
				product-oriented approach to front-end development, with
				attention to clean architecture, state management, and user
				experience.
			</Typography>
			<Typography>
				<strong>Tech stack:</strong> React - TypeScript - Firebase -
				TanStack Query - Material UI - Vite
			</Typography>
		</Page>
	);
};
