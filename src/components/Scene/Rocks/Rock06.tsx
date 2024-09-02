import { styled, useTheme } from '@mui/system';

const CustomSvg = styled('g', {
	name: 'rock06',
	slot: 'Root',
})(() => ({
	'.rock-back': {
		fill: 'url(#rock06-back-gradient)',
	},
	'.rock-top': {
		fill: 'url(#rock06-top-gradient)',
	},
	'.rock-shade': {
		fill: 'url(#rock06-shade-gradient)',
		mixBlendMode: 'multiply',
		opacity: 0.5,
	},
}));

export const Rock06 = () => {
	const colors = useTheme().palette.scene.rock;

	return (
		<CustomSvg transform={`translate(304,230)`}>
			<defs>
				<linearGradient
					id="rock06-back-gradient"
					x1="21.1"
					y1="63.8"
					x2="21.1"
					y2="0"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.hit} />
					<stop offset="1" stopColor={colors.coral} />
				</linearGradient>
				<linearGradient
					id="rock06-top-gradient"
					x1="30"
					y1="36.1"
					x2="30"
					y2="28.8"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.jaffa} />
					<stop offset="1" stopColor={colors.koromiko} />
				</linearGradient>
				<linearGradient
					id="rock06-edge-gradient"
					x1="6.8"
					y1="42.1"
					x2="6.8"
					y2="38"
					xlinkHref="#rock06-top-gradient"
				/>
				<linearGradient
					id="rock06-shade-gradient"
					x1="26.1"
					y1="63.8"
					x2="26.1"
					y2="5.1"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.lavender} />
					<stop offset="1" stopColor={colors.dust} />
				</linearGradient>
			</defs>
			<path
				className="rock-back"
				d="M0,63.8l4.6-23.1,2-2.7,4.8-24.8L20.3,0s7.9,2.3,11.5,6.6v22.2l3.3,4,7.1,23.4v7.5l-42.1.2Z"
			/>
			<path
				className="rock-side"
				fill={colors.serria}
				d="M11.4,13.2l-4.8,24.8,2.4,4.1h8l4.1-9.3L30.2,5.1S24.3,1.4,20.3,0c0,0-8.3,10.1-8.9,13.2Z"
			/>
			<polygon
				className="rock-top"
				points="31.7 28.8 24.9 36.1 31.7 34.6 35.1 32.8 31.7 28.8"
			/>
			<polygon
				className="rock-edge"
				fill={colors.koromiko}
				points="4.6 40.7 9 42.1 6.6 38 4.6 40.7"
			/>
			<polygon
				className="rock-shade"
				points="17 42.1 17 62.7 15 63.8 24.9 63.4 36.4 56.2 37.2 40.1 35.1 32.8 31.7 34.6 24.9 51.8 24.9 36.1 31.7 28.8 31.7 6.6 30.2 5.1 21.8 32.5 17 42.1"
			/>
			<path
				className="rock-top2"
				fill={colors.koromiko}
				d="M11.4,13.2l14.8-.7,4.1-7.3s-3.2-3.9-10-5.1c0,0-8.2,9.2-8.9,13.2Z"
			/>
		</CustomSvg>
	);
};
