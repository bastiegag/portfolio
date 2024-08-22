import { styled } from '@mui/system';

export const Rock05 = () => {
	const CustomSvg = styled('g', {
		name: 'rock05',
		slot: 'Root',
	})(() => ({
		'.rock-back': {
			fill: 'url(#rock05-back-gradient)',
		},
		'.rock-top': {
			fill: 'url(#rock05-top-gradient)',
		},
		'.rock-top2': {
			fill: 'url(#rock05-top2-gradient)',
		},
		'.rock-face': {
			fill: 'url(#rock05-face-gradient)',
		},
		'.rock-face2': {
			fill: 'url(#rock05-face2-gradient)',
		},
		'.rock-side': {
			fill: 'url(#rock05-side-gradient)',
		},
		'.rock-edge': {
			fill: '#ffb565',
		},
		'.rock-shade': {
			fill: 'url(#rock05-shade-gradient)',
		},
		'.rock-shade2': {
			fill: 'url(#rock05-shade2-gradient)',
		},
		'.rock-shade3': {
			fill: 'url(#rock05-shade3-gradient)',
		},
		'.rock-shade, .rock-shade2, .rock-shade3': {
			mixBlendMode: 'multiply',
			opacity: 0.5,
		},
	}));

	return (
		<CustomSvg
			transform={`translate(600,245)`}
			// xmlns="http://www.w3.org/2000/svg"
			// xmlnsXlink="http://www.w3.org/1999/xlink"
			// version="1.1"
			// viewBox="0 0 61.5 59.3"
			// width="61.5"
			// height="59.3"
			// x="600"
			// y="245"
		>
			<defs>
				<linearGradient
					id="rock05-back-gradient"
					x1="30.7"
					y1="59.3"
					x2="30.7"
					y2=".5"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#b87251" />
					<stop offset=".2" stopColor="#a76656" />
					<stop offset=".7" stopColor="#8b535f" />
					<stop offset="1" stopColor="#814c63" />
				</linearGradient>
				<linearGradient
					id="rock05-face-gradient"
					x1="21"
					y1="49.8"
					x2="21"
					y2=".3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#b87251" />
					<stop offset=".6" stopColor="#d2875d" />
					<stop offset="1" stopColor="#dd9063" />
				</linearGradient>
				<linearGradient
					id="rock05-face2-gradient"
					x1="46.5"
					y1="35.8"
					x2="46.5"
					y2="24.3"
					xlinkHref="#rock05-face-gradient"
				/>
				<linearGradient
					id="rock05-top-gradient"
					x1="46.1"
					y1="55.7"
					x2="46.1"
					y2="50.3"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#eb9552" />
					<stop offset=".6" stopColor="#f0a85d" />
					<stop offset="1" stopColor="#f4b363" />
				</linearGradient>
				<linearGradient
					id="rock05-shade-gradient"
					x1="43.1"
					y1="29.9"
					x2="43.1"
					y2=".6"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#c0b3d4" />
					<stop offset=".5" stopColor="#d1becd" />
					<stop offset="1" stopColor="#e3cac7" />
				</linearGradient>
				<linearGradient
					id="rock05-shade2-gradient"
					x1="33.3"
					y1="59.3"
					x2="33.3"
					y2="24.9"
					xlinkHref="#rock05-shade-gradient"
				/>
				<linearGradient
					id="rock05-shade3-gradient"
					x1="53.4"
					y1="38.8"
					x2="48.2"
					y2="38.8"
					xlinkHref="#rock05-shade-gradient"
				/>
				<linearGradient
					id="rock05-side-gradient"
					x1="26.7"
					y1="31.1"
					x2="26.7"
					y2=".6"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#9f917e" />
					<stop offset=".3" stopColor="#b69073" />
					<stop offset=".7" stopColor="#d29067" />
					<stop offset="1" stopColor="#dd9063" />
				</linearGradient>
				<linearGradient
					id="rock05-top2-gradient"
					x1="33.3"
					y1="6.9"
					x2="33.3"
					y2="0"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#f8a152" />
					<stop offset=".3" stopColor="#f6a859" />
					<stop offset="1" stopColor="#f4b363" />
				</linearGradient>
			</defs>
			<path
				className="rock-back"
				d="M0,53.4l8.8-19.9,4.1-2.4L26.1,3.3S34.2,0,40.4.6l5.5,23.7,4.9.7,2.6,25.3,8.1,3.2v5.9L0,53.4Z"
			/>
			<path
				className="rock-face"
				d="M26.1,3.3l-13.2,27.8-4.1,2.4L1.6,49.8l25.3-4.6,4.9-7.5,4.1-3.9,4.4-18.1V.6s-7-1.8-14.3,2.7Z"
			/>
			<polygon
				className="rock-face2"
				points="45.9 24.3 43.3 29.9 42.2 35.8 49.2 33.2 50.8 24.9 45.9 24.3"
			/>
			<path
				className="rock-top"
				d="M53.4,50.3l-2.6,2.3-20,1.1s19.7,1.8,23,2,7.8-2.2,7.8-2.2l-8.1-3.2Z"
			/>
			<polygon
				className="rock-shade"
				points="40.4 15.7 43.3 29.9 45.9 24.3 40.4 .6 40.4 15.7"
			/>
			<polygon
				className="rock-shade2"
				points="49.2 33.2 48.2 49.8 40.4 51.9 42.2 35.8 36 33.8 31.8 37.7 27 45.2 28.5 52.6 18.4 53.9 5 53.9 61.5 59.3 61.5 53.4 54.5 55.7 30.7 53.7 50.8 52.6 53.4 50.3 50.8 24.9 49.2 33.2"
			/>
			<polygon
				className="rock-shade3"
				points="49.2 33.2 48.2 49.8 50.8 52.6 53.4 50.3 50.8 24.9 49.2 33.2"
			/>
			<polygon
				className="rock-edge"
				points="46.5 34.2 49.5 31.4 49.2 33.2 46.5 34.2"
			/>
			<polygon
				className="rock-edge"
				points="34.4 35.3 36.8 30.5 36 33.8 34.4 35.3"
			/>
			<path
				className="rock-side"
				d="M13,31.1l17.8-3.4,7.9-15.5,1.7-11.5S34.5,0,26.1,3.3l-13.2,27.8Z"
			/>
			<path
				className="rock-top2"
				d="M26.1,3.3l12,3.6h2.3V.6s-7.5-2.6-14.3,2.7Z"
			/>
		</CustomSvg>
	);
};
