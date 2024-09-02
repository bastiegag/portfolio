import { styled, useTheme } from '@mui/system';

const CustomSvg = styled('g', {
	name: 'rock02',
	slot: 'Root',
})(() => ({
	'.rock-back': {
		fill: 'url(#rock02-back-gradient)',
	},
	'.rock-top': {
		fill: 'url(#rock02-top-gradient)',
	},
	'.rock-face': {
		fill: 'url(#rock02-face-gradient)',
	},
	'.rock-shade': {
		fill: 'url(#rock02-shade-gradient)',
		mixBlendMode: 'multiply',
	},
}));

export const Rock02 = () => {
	const colors = useTheme().palette.scene.rock;

	return (
		<CustomSvg transform={`translate(284,274)`}>
			<defs>
				<linearGradient
					id="rock02-back-gradient"
					x1="16.7"
					y1="22.7"
					x2="16.7"
					y2="0"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.santa} />
					<stop offset="1" stopColor={colors.cannon} />
				</linearGradient>
				<linearGradient
					id="rock02-face-gradient"
					x1="17.4"
					y1="11.8"
					x2="17.4"
					y2="0"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.santa} />
					<stop offset="1" stopColor={colors.serria} />
				</linearGradient>
				<linearGradient
					id="rock02-top-gradient"
					x1="25.5"
					y1="13"
					x2="25.5"
					y2="11.4"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.jaffa} />
					<stop offset="1" stopColor={colors.koromiko} />
				</linearGradient>
				<linearGradient
					id="rock02-shade-gradient"
					x1="16.7"
					y1="22.7"
					x2="16.7"
					y2="10.4"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.lavender} />
					<stop offset="1" stopColor={colors.dust} />
				</linearGradient>
			</defs>
			<polygon
				className="rock-back"
				points="33.3 21 30.8 11.6 27.5 11.4 14.6 0 7.3 3.3 0 22.7 33.3 21"
			/>
			<path
				className="rock-face"
				d="M7.3,3.3l3.3,7.1s12.1,2.4,16.9,1.1L14.6,0l-7.3,3.3Z"
			/>
			<polygon
				className="rock-top"
				points="27.5 11.4 20.1 11.8 27.5 13 30.8 11.6 27.5 11.4"
			/>
			<polygon
				className="rock-shade"
				points="10.6 10.4 8.4 21 0 22.7 33.3 21 30.8 11.6 27.5 13 26.1 18.9 18.3 20.3 20.1 11.8 10.6 10.4"
			/>
			<g fill={colors.koromiko}>
				<polygon
					className="rock-edge"
					points="26 12.7 28 12.7 27.3 13.7 26 12.7"
				/>
				<polygon
					className="rock-edge"
					points="10.2 9.6 12.3 10.7 10.6 11.4 10.2 9.6"
				/>
			</g>
		</CustomSvg>
	);
};
