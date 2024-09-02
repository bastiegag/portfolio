import { styled, useTheme } from '@mui/system';

const CustomSvg = styled('g', {
	name: 'rock07',
	slot: 'Root',
})(() => ({
	'.rock-back': {
		fill: 'url(#rock07-back-gradient)',
	},
	'.rock-top': {
		fill: 'url(#rock07-top-gradient)',
	},
	'.rock-face': {
		fill: 'url(#rock07-face-gradient)',
	},
	'.rock-side': {
		fill: 'url(#rock07-side-gradient)',
	},
	'.rock-shade2': {
		fill: 'url(#rock07-shade2-gradient)',
	},
	'.rock-shade2-2': {
		fill: 'url(#rock07-shade2-gradient-2)',
	},
	'.rock-shade, .rock-shade-2, .rock-shade2, .rock-shade2-2': {
		fill: 'url(#rock07-shade-gradient)',
		mixBlendMode: 'multiply',
		opacity: 0.5,
	},
}));

export const Rock07 = () => {
	const colors = useTheme().palette.scene.rock;

	return (
		<CustomSvg transform={`translate(356,170)`}>
			<defs>
				<linearGradient
					id="rock07-back-gradient"
					x1="42.5"
					y1="124"
					x2="42.5"
					y2="1.7"
					gradientTransform="translate(-2.5 0) rotate(-1.9)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.hit} />
					<stop offset="1" stopColor={colors.coral} />
				</linearGradient>
				<linearGradient
					id="rock07-top-gradient"
					x1="15.3"
					y1="79.5"
					x2="15.3"
					y2="71.4"
					gradientTransform="translate(-2.5 0) rotate(-1.9)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.jaffa} />
					<stop offset="1" stopColor={colors.koromiko} />
				</linearGradient>
				<linearGradient
					id="rock07-shade-gradient"
					x1="43.4"
					y1="122"
					x2="43.4"
					y2="10.6"
					gradientTransform="translate(-2.5 0) rotate(-1.9)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.lavender} />
					<stop offset="1" stopColor={colors.dust} />
				</linearGradient>
				<linearGradient
					id="rock07-shade2-gradient"
					x1="18.9"
					y1="118.6"
					x2="18.9"
					y2="78.3"
					gradientTransform="translate(-2.5 0) rotate(-1.9)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.onahau} />
					<stop offset="1" stopColor={colors.dust} />
				</linearGradient>
				<linearGradient
					id="rock07-shade2-gradient-2"
					x1="39.9"
					y1="121.5"
					x2="39.9"
					y2="46.1"
					xlinkHref="#rock07-shade2-gradient"
				/>
			</defs>
			<path
				className="rock-back"
				d="M0,118.5l9.3-45.3,5.5-2.3,3.8-38.4,4.7-13.9S32.5,6,51.2,0l13.6,8.4,11.2,67,11.1,27.6.6,18.1L0,118.5Z"
			/>
			<path
				className="rock-side"
				fill={colors.koromiko}
				d="M23.2,18.6l-4.7,13.9-3.8,38.4,5.2,5.4,5.4,9.1,6.9,2.3,14.4-43.2,1.9-.7,6.9-24.3,6.9-4.4,2.4-6.8L51.2,0s-18.4,4.7-28,18.6Z"
			/>
			<polygon
				className="rock-top"
				points="9.1 73.8 17 77.7 21.4 78.8 19.8 75.2 14.8 70.9 9.3 73.2 9.1 73.8"
			/>
			<polygon
				className="rock-shade"
				points="64.8 8.4 62.4 15.2 59.3 47 55 58.4 55.5 19.6 48.6 43.9 47.4 67.5 46.7 44.6 32.3 87.8 25.4 85.4 21.4 78.8 17 77.7 13.9 118.1 66.7 119.8 74.4 85.4 71.2 46.5 64.8 8.4"
			/>
			<polygon
				className="rock-shade2"
				points="17 77.7 13.9 118.1 24.5 117.8 25.4 85.4 21.4 78.8 17 77.7"
			/>
			<polygon
				className="rock-shade2-2"
				points="46.7 44.6 32.3 87.8 39.6 119.7 47.7 119.9 47.3 62.5 46.7 44.6"
			/>
			<polygon
				className="rock-shade-2"
				fill={colors.chalk}
				points="32.2 72.8 33 61.5 36.8 54.8 43.2 37.5 36.3 60.3 32.2 72.8"
			/>
			<path
				className="rock-top2"
				fill={colors.koromiko}
				d="M23.2,18.6l24.5-.8,14.7-2.7,2.4-6.8L51.2,0s-21.3,4.7-28,18.6Z"
			/>
		</CustomSvg>
	);
};
