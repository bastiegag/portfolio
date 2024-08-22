import { styled } from '@mui/system';

export const Horizon = () => {
	const CustomSvg = styled('g', {
		name: 'horizon',
		slot: 'Root',
	})(() => ({
		mixBlendMode: 'multiply',
		'.horizon-shape': {
			fill: 'url(#horizon-gradient)',
		},
	}));

	return (
		<CustomSvg
			transform={`translate(0,0)`}
			// xmlns="http://www.w3.org/2000/svg"
			// xmlnsXlink="http://www.w3.org/1999/xlink"
			// version="1.1"
			// viewBox="0 0 1000 8.5"
			// width="1000"
			// height="8.5"
		>
			<defs>
				<linearGradient
					id="horizon-gradient"
					x1="0"
					y1="0"
					x2="1000"
					y2="0"
					gradientTransform="translate(1000) rotate(-180) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#d1e8ff" />
					<stop offset="0" stopColor="#d1e8ff" />
					<stop offset="1" stopColor="#e3ecff" />
				</linearGradient>
			</defs>
			<path
				className="horizon-shape"
				d="M1000,0v8.1s-118.6,1-197.2,0-131.4-1.5-131.4-1.5c0,0,88.2-.3,117.6-2.3,29.5-2,40.3-1.7,40.3-1.7,0,0-509-1-589.8,0-80.7,1-198.1,1.7-198.1,1.7,0,0,229.9.2,296.7,0,66.7-.2,333.2,2.3,333.2,2.3L0,8.5V0h1000Z"
			/>
		</CustomSvg>
	);
};
