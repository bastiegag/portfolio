import React from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { Page, Photo } from 'components';

export const About = () => {
	return (
		<Page>
			<Grid container spacing={2}>
				<Grid size={{ xs: 12, sm: 5 }}>
					<Photo src="https://scummbar.com/MojoDB/DotWhat/character.images/full-0Guybrush%20Threepwood.jpg" />
				</Grid>
				<Grid size={{ xs: 12, sm: 7 }}>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aenean eu pellentesque nibh. Quisque odio ipsum,
						consequat in vestibulum et, fringilla imperdiet sem.
					</Typography>
				</Grid>
			</Grid>
		</Page>
	);
};
