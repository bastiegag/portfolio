import { styled } from '@mui/system';

export const Rock06 = () => {
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
		'.rock-top2': {
			fill: 'url(#rock06-top2-gradient)',
		},
		'.rock-side': {
			fill: 'url(#rock06-side-gradient)',
		},
		'.rock-edge': {
			fill: '#ffb565',
		},
		'.rock-shade': {
			fill: 'url(#rock06-shade-gradient)',
			mixBlendMode: 'multiply',
			opacity: 0.5,
		},
	}));

	return (
		<CustomSvg
			transform={`translate(304,230)`}
			// xmlns="http://www.w3.org/2000/svg"
			// xmlnsXlink="http://www.w3.org/1999/xlink"
			// version="1.1"
			// viewBox="0 0 42.1 63.8"
			// width="42.1"
			// height="63.8"
			// x="304"
			// y="230"
		>
			<defs>
				<linearGradient
					id="rock06-back-gradient"
					x1="21.1"
					y1="63.8"
					x2="21.1"
					y2="0"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#ffa777" />
					<stop offset=".4" stopColor="#d4836c" />
					<stop offset=".8" stopColor="#b86b65" />
					<stop offset="1" stopColor="#ae6363" />
				</linearGradient>
				<linearGradient
					id="rock06-side-gradient"
					x1="18.4"
					y1="42.1"
					x2="18.4"
					y2="0"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#d9905b" />
					<stop offset="1" stopColor="#dd9063" />
				</linearGradient>
				<linearGradient
					id="rock06-top-gradient"
					x1="30"
					y1="36.1"
					x2="30"
					y2="28.8"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#eb9552" />
					<stop offset=".6" stopColor="#f0a85d" />
					<stop offset="1" stopColor="#f4b363" />
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
					<stop offset="0" stopColor="#c0b3d4" />
					<stop offset=".5" stopColor="#d1becd" />
					<stop offset="1" stopColor="#e3cac7" />
				</linearGradient>
				<linearGradient
					id="rock06-top2-gradient"
					x1="20.8"
					y1="13.2"
					x2="20.8"
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
				d="M0,63.8l4.6-23.1,2-2.7,4.8-24.8L20.3,0s7.9,2.3,11.5,6.6v22.2l3.3,4,7.1,23.4v7.5l-42.1.2Z"
			/>
			<path
				className="rock-side"
				d="M11.4,13.2l-4.8,24.8,2.4,4.1h8l4.1-9.3L30.2,5.1S24.3,1.4,20.3,0c0,0-8.3,10.1-8.9,13.2Z"
			/>
			<polygon
				className="rock-top"
				points="31.7 28.8 24.9 36.1 31.7 34.6 35.1 32.8 31.7 28.8"
			/>
			<polygon
				className="rock-edge"
				points="4.6 40.7 9 42.1 6.6 38 4.6 40.7"
			/>
			<polygon
				className="rock-shade"
				points="17 42.1 17 62.7 15 63.8 24.9 63.4 36.4 56.2 37.2 40.1 35.1 32.8 31.7 34.6 24.9 51.8 24.9 36.1 31.7 28.8 31.7 6.6 30.2 5.1 21.8 32.5 17 42.1"
			/>
			<path
				className="rock-top2"
				d="M11.4,13.2l14.8-.7,4.1-7.3s-3.2-3.9-10-5.1c0,0-8.2,9.2-8.9,13.2Z"
			/>
		</CustomSvg>
	);
};
