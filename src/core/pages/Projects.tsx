import { Typography, Box, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Link } from '@features/navigation';
import { Page } from '@features/layout';
import { Photo } from '@shared/components/Photo';
import config from '@shared/data/config';

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

const Projects = () => {
	const { t } = useTranslation();

	return (
		<Page>
			<Box sx={titleBoxStyles}>
				<Typography>
					<strong>{t('projects.dwmc.title')}</strong>
				</Typography>
				<Link
					url={`${config.github}/dwmc`}
					title={t('projects.dwmc.viewOnGithub')}
				>
					<Typography>{t('projects.dwmc.github')}</Typography>
				</Link>
			</Box>
			<Divider sx={{ mb: 3 }} />
			<Box sx={photoBoxStyles}>
				<Photo src="dwmc.jpg" />
			</Box>
			<Typography sx={paragraphStyles}>
				{t('projects.dwmc.description1')}
			</Typography>
			<Typography sx={paragraphStyles}>
				{t('projects.dwmc.description2')}
			</Typography>
			<Typography sx={paragraphStyles}>
				{t('projects.dwmc.description3')}
			</Typography>
			<Typography>
				<strong>{t('projects.dwmc.techStack')}</strong> React -
				TypeScript - Firebase - TanStack Query - Material UI - Vite
			</Typography>
		</Page>
	);
};
export { Projects };
export default Projects;
