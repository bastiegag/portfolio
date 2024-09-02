import { styled, useTheme } from '@mui/system';

const CustomSvg = styled('g', {
	name: 'rock01',
	slot: 'Root',
})(() => ({
	'.rock-back': {
		fill: 'url(#rock01-back-gradient)',
	},
	'.rock-top': {
		fill: 'url(#rock01-top-gradient)',
	},
	'.rock-shade': {
		fill: 'url(#rock01-shade-gradient)',
		mixBlendMode: 'multiply',
	},
}));

export const Rock01 = () => {
	const colors = useTheme().palette.scene.rock;

	return (
		<CustomSvg transform={`translate(404,278)`}>
			<defs>
				<linearGradient
					id="rock01-back-gradient"
					x1="25.5"
					y1="19"
					x2="25.5"
					y2="0"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.santa} />
					<stop offset="1" stopColor={colors.cannon} />
				</linearGradient>
				<linearGradient
					id="rock01-top-gradient"
					x1="25.7"
					y1="9.5"
					x2="25.7"
					y2="0"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.santa} />
					<stop offset="1" stopColor={colors.serria} />
				</linearGradient>
				<linearGradient
					id="rock01-shade-gradient"
					x1="25.5"
					y1="19"
					x2="25.5"
					y2="3.3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.lavender} />
					<stop offset="1" stopColor={colors.dust} />
				</linearGradient>
			</defs>
			<polygon
				className="rock-back"
				points="0 15.4 9.7 1.9 15.9 1.4 36.8 0 41.7 3.3 50.9 19 22.7 19 19 16.7 0 15.4"
			/>
			<path
				className="rock-top"
				d="M9.7,1.9l2.2,3.9,19.4,3.7,10.4-6.2L36.8,0s-15.2-.2-27.1,1.9Z"
			/>
			<polygon
				className="rock-shade"
				points="31.3 9.5 31.5 16.5 23.5 19 19 16.7 22.4 7.8 11.9 5.7 8.2 14 0 15.4 18 16.7 22.7 19 50.9 19 41.7 3.3 31.3 9.5"
			/>
			<polygon
				className="rock-edge"
				fill={colors.koromiko}
				points="30.2 9.3 32.6 8.7 31.4 10.9 30.2 9.3"
			/>
		</CustomSvg>
	);
};
