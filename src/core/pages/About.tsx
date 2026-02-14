import { Typography, Box } from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';

import { Page } from '@features/layout';
import { Photo } from '@shared/components/Photo';

const photoBoxStyles = {
	float: 'left',
	width: { xs: '100%', sm: '50%', md: '32%' },
	mr: 3,
	mb: { xs: 3, md: 2 },
} as const;

const paragraphStyles = { mb: 3 } as const;

const About = () => {
	const { t } = useTranslation();

	return (
		<Page>
			<Box sx={photoBoxStyles}>
				<Photo src="seb.jpg" />
			</Box>
			<Typography sx={paragraphStyles}>
				{t('about.greeting')} <strong>Sébastien!</strong>
			</Typography>
			<Typography sx={paragraphStyles}>
				<Trans i18nKey="about.intro" />
			</Typography>
			<Typography sx={paragraphStyles}>
				<Trans i18nKey="about.stack" />
			</Typography>
			<Typography sx={paragraphStyles}>{t('about.hobbies')}</Typography>
			<Typography>{t('about.values')}</Typography>
		</Page>
	);
};
export { About };
export default About;
