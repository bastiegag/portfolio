import { styled, useTheme } from '@mui/system';

import { Clouds } from './Clouds';
import { Starfield } from './Starfield';
import { Smoke } from './Objects/Smoke';

const CustomSvg = styled('g', {
	name: 'sky',
	slot: 'Root',
})(({ theme }) => ({
	'.sky-shape': {
		fill: 'url(#sky-gradient)',
	},
	'.starfield': {
		mixBlendMode: 'screen',
		opacity: 0,
		...theme.applyStyles('dark', {
			opacity: 0.75,
		}),
	},
}));

export const Sky = () => {
	const colors = useTheme().palette.scene.sky;

	return (
		<CustomSvg
			className="sky animate-gradient"
			transform={`translate(0,0)`}
		>
			<defs>
				<linearGradient
					id="sky-gradient"
					x1="0"
					y1="280"
					x2="0"
					y2="0"
					gradientTransform="translate(0 280) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.light} />
					<stop offset=".5" stopColor={colors.main} />
					<stop offset="1" stopColor={colors.dark} />
				</linearGradient>
			</defs>
			<rect
				className="sky-shape"
				width="1000"
				height="280"
				transform="translate(1000 280) rotate(180)"
			/>
			<Starfield />
			<Clouds />
			<Smoke params={{ x: 250, y: 115, multiplier: 13 }} />
		</CustomSvg>
	);
};
