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
				Hello, je suis <strong>Sébastien!</strong>
			</Typography>
			<Typography color="paper.text" sx={{ mb: 3 }}>
				Développeur <strong>front-end</strong>, je conçois des
				interfaces dynamiques où le design rencontre la performance.
				Autodidacte et créatif, je transforme les idées en expériences
				interactives fluides et immersives.
			</Typography>
			<Typography color="paper.text">
				En parallèle du code, je m’exprime à travers la musique, la
				photo et la vidéo — toujours à la croisée des chemins entre
				technique et esthétique.
			</Typography>
		</Page>
	);
};
