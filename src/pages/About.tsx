import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

import { Page, Photo } from 'components';

export const About = () => {
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
				<Photo src="seb2.jpg" />
			</Box>

			<Typography color="scene.about.text" sx={{ mb: 3 }}>
				Hello, je suis Sébastien !
			</Typography>
			<Typography color="scene.about.text" sx={{ mb: 3 }}>
				Développeur web front-end senior, je conçois des interfaces
				dynamiques où le design rencontre la performance. Autodidacte et
				créatif, je transforme les idées en expériences interactives
				fluides et immersives.
			</Typography>
			<Typography color="scene.about.text">
				En parallèle du code, je m’exprime à travers la musique, la
				photo et la vidéo — toujours à la croisée des chemins entre
				technique et esthétique.
			</Typography>
		</Page>
	);
};
