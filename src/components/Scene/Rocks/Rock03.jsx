import { styled } from '@mui/system';

export const Rock03 = () => {
	const CustomSvg = styled('g', {
		name: 'rock03',
		slot: 'Root',
	})(() => ({
		'.rock-back': {
			fill: 'url(#rock03-back-gradient)',
		},
		'.rock-top': {
			fill: 'url(#rock03-top-gradient)',
		},
		'.rock-face': {
			fill: 'url(#rock03-face-gradient)',
		},
		'.rock-side': {
			fill: 'url(#rock03-side-gradient)',
		},
		'.rock-edge': {
			fill: '#ffb565',
		},
		'.rock-shade': {
			fill: 'url(#rock03-shade-gradient)',
			mixBlendMode: 'multiply',
		},
	}));

	return (
		<CustomSvg
			transform={`translate(329,261)`}
			// xmlns="http://www.w3.org/2000/svg"
			// xmlnsXlink="http://www.w3.org/1999/xlink"
			// version="1.1"
			// viewBox="0 0 46.5 34.6"
			// width="46.5"
			// height="34.6"
			// x="329"
			// y="261"
		>
			<defs>
				<linearGradient
					id="rock03-back-gradient"
					x1="23.3"
					y1="34.3"
					x2="23.3"
					y2=".3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#b87251" />
					<stop offset=".2" stopColor="#a76656" />
					<stop offset=".7" stopColor="#8b535f" />
					<stop offset="1" stopColor="#814c63" />
				</linearGradient>
				<linearGradient
					id="rock03-side-gradient"
					x1="24"
					y1="24.9"
					x2="24"
					y2=".3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#b87251" />
					<stop offset=".6" stopColor="#d2875d" />
					<stop offset="1" stopColor="#dd9063" />
				</linearGradient>
				<linearGradient
					id="rock03-top-gradient"
					x1="14.1"
					y1="28.5"
					x2="14.1"
					y2="23.9"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#eb9552" />
					<stop offset=".6" stopColor="#f0a85d" />
					<stop offset="1" stopColor="#f4b363" />
				</linearGradient>
				<linearGradient
					id="rock03-shade-gradient"
					x1="28.7"
					y1="34.6"
					x2="28.7"
					y2="9.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#c0b3d4" />
					<stop offset=".5" stopColor="#d1becd" />
					<stop offset="1" stopColor="#e3cac7" />
				</linearGradient>
				<linearGradient
					id="rock03-face-gradient"
					x1="26.2"
					y1="13.3"
					x2="26.2"
					y2="0"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#d99f5b" />
					<stop offset=".2" stopColor="#da9a5d" />
					<stop offset="1" stopColor="#dd9063" />
				</linearGradient>
			</defs>
			<path
				className="rock-back"
				d="M46.5,32.6v-5.9l-5.1-4.7-2.2-12.5L28,.9s-8.4-2.3-14.8,2.4l-4.4,21.6-6,1.8-2.8,7.2,28.4.4,18.1-1.7Z"
			/>
			<path
				className="rock-side"
				d="M13.2,3.2l-4.4,21.6,8.2-.9,4.2-5.5,5.6-5.2,12.3-3.8L28,.9s-8.8-2.4-14.8,2.4Z"
			/>
			<polygon
				className="rock-top"
				points="2.8 26.6 10.8 28.5 25.3 25.1 17.1 23.9 8.8 24.9 2.8 26.6"
			/>
			<polygon
				className="rock-shade"
				points="26.9 13.3 25.3 25.1 10.8 28.5 10.8 34 30.5 34.6 46.5 32.6 46.5 24.6 39.2 25.1 41.4 22 39.2 9.5 26.9 13.3"
			/>
			<path
				className="rock-face"
				d="M13.2,3.2l13.7,10,12.3-3.8L28,.9s-9.9-3-14.8,2.4Z"
			/>
			<polygon
				className="rock-edge"
				points="23.6 10.9 28.7 12.7 26.7 15.1 23.6 10.9"
			/>
			<polygon
				className="rock-edge"
				points="9.3 28.2 11.5 28.3 10.8 28.9 9.3 28.2"
			/>
		</CustomSvg>
	);
};
