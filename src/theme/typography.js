import config from '@/config';

const themeTypography = (colors, breakpoints) => {
	return {
		fontFamily: config.fontFamily,
		h6: {
			fontWeight: 500,
			fontSize: '1.125rem',
		},
		h5: {
			fontSize: '1.25rem',
			fontWeight: 500,
		},
		h4: {
			fontSize: '1.5rem',
			fontWeight: 400,
		},
		h3: {
			fontSize: '1.75rem',
			fontWeight: 400,
		},
		h2: {
			fontSize: '2rem',
			fontWeight: 300,
		},
		h1: {
			fontSize: '2rem',
			fontWeight: 300,
			[breakpoints.up('lg')]: {
				fontSize: '3rem',
			},
		},
		label: {
			fontSize: '0.875rem',
			fontWeight: 500,
		},
		small: {
			fontSize: '0.875rem',
		},
		smaller: {
			fontSize: '0.750rem',
		},
		parent: {
			fontSize: 'inherit',
			display: 'inline-block',
		},
		link: {
			color: colors.primaryMain,
			cursor: 'pointer',
			fontWeight: 500,
			display: 'inline-block',
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
		smallerLink: {
			color: colors.primaryMain,
			cursor: 'pointer',
			fontWeight: 500,
			fontSize: '0.750rem',
			display: 'inline-block',
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline',
			},
		},
		subtitle1: {
			fontSize: '0.875rem',
			fontWeight: 500,
			opacity: 0.65,
		},
		subtitle2: {
			fontSize: '0.75rem',
			fontWeight: 400,
			opacity: 0.5,
		},
		substat: {
			fontSize: '1rem',
			fontWeight: 400,
			opacity: 0.5,
			[breakpoints.up('lg')]: {
				fontSize: '1.5rem',
			},
		},
		caption: {
			color: colors.textSecondary,
			fontSize: '0.75rem',
			fontWeight: 400,
		},
		body1: {
			fontSize: '1rem',
			fontWeight: 400,
		},
		body2: {
			fontSize: '1rem',
			fontWeight: 400,
			opacity: 0.75,
		},
	};
};

export default themeTypography;
