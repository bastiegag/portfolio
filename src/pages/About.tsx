import React from 'react';
import { Typography } from '@mui/material';
//import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';

import { Page, Photo } from 'components';

export const About = () => {
	return (
		<Page>
			<Box
				sx={{
					float: 'left',
					width: { xs: '100%', sm: '50%', md: '35%' },
					mr: 3,
					mb: 3,
				}}
			>
				<Photo src="seb.jpg" />
			</Box>

			<Typography color="scene.paper.text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
				eu pellentesque nibh. Quisque odio ipsum, consequat in
				vestibulum et, fringilla imperdiet sem.
			</Typography>
		</Page>
	);
};
