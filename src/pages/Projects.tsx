import { JSX } from 'react';
import { Typography } from '@mui/material';

import { Page } from 'components';

export const Projects = (): JSX.Element => {
	return (
		<Page>
			<Typography color="paper.text" sx={{ mb: 3 }}>
				Projets...
			</Typography>
		</Page>
	);
};
