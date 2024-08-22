import { styled } from '@mui/system';

import { Air } from './Air';
import { Clouds } from './Clouds';

export const Sky = () => {
	const CustomSvg = styled('g', {
		name: 'sky',
		slot: 'Root',
	})(() => ({
		'.sky-back': {
			fill: 'url(#sky-gradient)',
		},
	}));

	return (
		<CustomSvg
			transform={`translate(0,0)`}
			// xmlns="http://www.w3.org/2000/svg"
			// xmlnsXlink="http://www.w3.org/1999/xlink"
			// version="1.1"
			// viewBox="0 0 1000 280"
			// preserveAspectRatio="xMidYMid slice"
			// width="1000"
			// height="280"
		>
			<defs>
				<linearGradient
					id="sky-gradient"
					x1="0"
					y1="280"
					x2="0"
					y2="0"
					gradientTransform="translate(-.6 280) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						className="stop-light"
						offset="0"
						stopColor="#c2fff7"
					/>
					<stop
						className="stop-mid"
						offset=".5"
						stopColor="#8af1f2"
					/>
					<stop
						className="stop-dark"
						offset="1"
						stopColor="#54c7ff"
					/>
				</linearGradient>
			</defs>
			<rect
				className="sky-back"
				width="1000"
				height="280"
				transform="translate(1000 280) rotate(180)"
			/>
			<Air />
			{/* <Clouds /> */}
		</CustomSvg>
	);
};
