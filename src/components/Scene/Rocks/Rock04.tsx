import { styled, useTheme } from '@mui/system';

const CustomSvg = styled('g', {
	name: 'rock04',
	slot: 'Root',
})(() => ({
	'.rock-back': {
		fill: 'url(#rock04-back-gradient)',
	},
	'.rock-top': {
		fill: 'url(#rock04-top-gradient)',
	},
	'.rock-face': {
		fill: 'url(#rock04-face-gradient)',
	},
	'.rock-side': {
		fill: 'url(#rock04-side-gradient)',
	},
	'.rock-face-light': {
		fill: 'url(#rock04-face-light-gradient)',
	},
	'.rock-face-2': {
		fill: 'url(#rock04-face-gradient-2)',
	},
	'.rock-face-4': {
		fill: 'url(#rock04-face-gradient-4)',
	},
	'.rock-face-5': {
		fill: 'url(#rock04-face-gradient-5)',
	},
	'.rock-face-3': {
		fill: 'url(#rock04-face-gradient-3)',
	},
	'.rock-side-2': {
		fill: 'url(#rock04-side-gradient-2)',
	},
	'.rock-side-3': {
		fill: 'url(#rock04-side-gradient-3)',
	},
	'.rock-side-4': {
		fill: 'url(#rock04-side-gradient-4)',
	},
	'.rock-top-6': {
		fill: 'url(#rock04-top-gradient-6)',
	},
	'.rock-top-3': {
		fill: 'url(#rock04-top-gradient-3)',
	},
	'.rock-top-5': {
		fill: 'url(#rock04-top-gradient-5)',
	},
	'.rock-top-4': {
		fill: 'url(#rock04-top-gradient-4)',
	},
	'.rock-top-2': {
		fill: 'url(#rock04-top-gradient-2)',
	},
	'.rock-shade3': {
		isolation: 'isolate',
		opacity: 0.5,
		mixBlendMode: 'multiply',
	},
	'.rock-shade': {
		mixBlendMode: 'multiply',
	},
}));

export const Rock04 = () => {
	const colors = useTheme().palette.scene.rock;

	return (
		<CustomSvg transform={`translate(400,143)`}>
			<defs>
				<linearGradient
					id="rock04-back-gradient"
					x1="96.8"
					y1="155.6"
					x2="96.8"
					y2="-.3"
					gradientTransform="translate(-.3 .9) rotate(-.3)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.santa} />
					<stop offset="1" stopColor={colors.cannon} />
				</linearGradient>
				<linearGradient
					id="rock04-face-gradient"
					x1="30.5"
					y1="129.5"
					x2="30.5"
					y2="43.9"
					gradientTransform="translate(-.3 .9) rotate(-.3)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.santa} />
					<stop offset="1" stopColor={colors.serria} />
				</linearGradient>
				<linearGradient
					id="rock04-face-gradient-2"
					x1="99.3"
					y1="109.9"
					x2="99.3"
					y2="-.3"
					xlinkHref="#rock04-face-gradient"
				/>
				<linearGradient
					id="rock04-face-gradient-3"
					x1="174"
					y1="150"
					x2="174"
					y2="32.4"
					xlinkHref="#rock04-face-gradient"
				/>
				<linearGradient
					id="rock04-top-gradient"
					x1="12.2"
					y1="133.5"
					x2="12.2"
					y2="121.7"
					gradientTransform="translate(-.3 .9) rotate(-.3)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.jaffa} />
					<stop offset="1" stopColor={colors.koromiko} />
				</linearGradient>
				<linearGradient
					id="rock04-face-gradient-4"
					x1="188.3"
					y1="103.7"
					x2="188.3"
					y2="93.4"
					xlinkHref="#rock04-face-gradient"
				/>

				<linearGradient
					id="rock04-face-gradient-5"
					x1="136.4"
					y1="144.1"
					x2="136.4"
					y2="59.2"
					xlinkHref="#rock04-face-gradient"
				/>
				<linearGradient
					id="rock04-top-gradient-2"
					x1="112.2"
					y1="17.7"
					x2="112.2"
					y2="-.3"
					xlinkHref="#rock04-top-gradient"
				/>
				<linearGradient
					id="rock04-top-gradient-3"
					x1="176.9"
					y1="64.1"
					x2="176.9"
					y2="32.4"
					xlinkHref="#rock04-top-gradient"
				/>
				<linearGradient
					id="rock04-top-gradient-4"
					x1="137.3"
					y1="65.4"
					x2="137.3"
					y2="56.8"
					xlinkHref="#rock04-top-gradient"
				/>
				<linearGradient
					id="rock04-top-gradient-5"
					x1="35.5"
					y1="86.5"
					x2="35.5"
					y2="77.2"
					xlinkHref="#rock04-top-gradient"
				/>
				<linearGradient
					id="rock04-top-gradient-6"
					x1="47.8"
					y1="54.3"
					x2="47.8"
					y2="43.9"
					xlinkHref="#rock04-top-gradient"
				/>
				<linearGradient
					id="rock04-side-gradient"
					x1="17.8"
					y1="126"
					x2="17.8"
					y2="77.1"
					gradientTransform="translate(-.3 .9) rotate(-.3)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.oyster} />
					<stop offset="1" stopColor={colors.serria} />
				</linearGradient>
				<linearGradient
					id="rock04-side-gradient-2"
					x1="169.7"
					y1="129.5"
					x2="169.7"
					y2="58.1"
					xlinkHref="#rock04-side-gradient"
				/>
				<linearGradient
					id="rock04-side-gradient-3"
					x1="94.9"
					y1="109.9"
					x2="94.9"
					y2="25.9"
					xlinkHref="#rock04-side-gradient"
				/>
				<linearGradient
					id="rock04-side-gradient-4"
					x1="131.3"
					y1="131.4"
					x2="131.3"
					y2="60.1"
					xlinkHref="#rock04-side-gradient"
				/>
				<linearGradient
					id="rock04-face-light-gradient"
					x1="188.3"
					y1="144.6"
					x2="188.3"
					y2="98.1"
					gradientTransform="translate(-.3 .9) rotate(-.3)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor={colors.friar} />
					<stop offset="1" stopColor={colors.kimberly} />
				</linearGradient>
			</defs>
			<path
				className="rock-back"
				d="M0,145.7l4.6-21.6,3.8-1.5,14.5-44.6h3.9s18-33.4,18-33.4h8s1.9,16.1,1.9,16.1h5.2s3.7-13.6,3.7-13.6l22-29,15.9-9.8L121.9,0l16.5,3,3.5,54,3.6,3.3,7.7,26.4,5.5,26.5,1.7-20.3,3.2-28.7,13-27.7,13.8-4.1.3,61,3.7,4.7-.9,57.4-66.6-.9,4.9-6.4-9.7-15s-27.6-5.5-50.3,7.7l-3.8,6s-45.7,1.2-67.6-1.2Z"
			/>
			<polygon
				className="rock-face"
				points="52.8 44.6 52.9 70.5 48.2 83.3 42.9 87.2 28.6 125.7 8.5 130.4 8.4 122.6 22.9 78 26.8 78 44.8 44.6 52.8 44.6"
			/>
			<path
				className="rock-face-2"
				d="M63.6,47.2l-3.7,13.5,2,22.1,12.4,9.1v18.5c.1,0,13.2-3.2,13.2-3.2l25.5-52.7,10.7-2.6,5.4-34.6,9.3-14.4-16.5-3s-23.4,7.5-36.3,18.2l-22,29Z"
			/>
			<polygon
				className="rock-face-3"
				points="158.5 113.1 158.1 146.2 165.5 150.1 172.8 142.4 180.6 91.4 182.8 89.3 190.2 32.3 176.4 36.5 163.4 64.1 158.5 113.1"
			/>
			<polygon
				className="rock-top"
				points="4.6 124 8.5 130.4 20.5 134.3 13.5 129.2 8.4 122.6 4.6 124"
			/>
			<polygon
				className="rock-face-4"
				points="190.5 93.4 185.8 99.1 182.9 103.7 188.5 100.6 194.1 98 190.5 93.4"
			/>

			<polygon
				className="rock-face-5"
				points="134.2 131.6 121.6 101.9 129.2 60.3 134.9 59.4 143.8 65.6 149.1 103.8 151.8 144.2 134.2 131.6"
			/>
			<g fill={colors.dust}>
				<path
					className="rock-shade3"
					d="M123.6,52l-2.8,25.9.8,23.9,12.6,29.7,17.6,12.6-2.7-40.4-6.1-39.6,2.3-4,7.7,26.4,5.5,26.5-.4,33-2,9.5-29.6-1.1,4.9-6.4-9.7-15s-24.2-5.7-50.3,7.7l-3.8,6-57.9.4-1.3-17,12,4,3.5,3.8,4.6-12.4,14.4-38.4,5.3-3.9-3.1,18.1,2.9,26.6,6.4,5.6,10.2-33.9-11.7-29.2v-25.9c-.1,0,1.8,16.2,1.8,16.2h5.2s2,22.1,2,22.1l12.4,9.1v18.5c.1,0,13.2-3.2,13.2-3.2l25.5-52.7,10.7-2.6Z"
				/>
				<polygon
					className="rock-shade3"
					points="129 17.4 131.2 57 134.9 59.4 141.8 57 138.3 3 129 17.4"
				/>
				<polygon
					className="rock-shade3"
					points="172.8 155.2 172.8 142.4 182.9 103.7 194.1 98 193.2 155.5 172.8 155.2"
				/>
				<polygon
					className="rock-shade3"
					points="182.8 89.3 185.8 99.1 190.5 93.4 190.2 32.3 182.8 89.3"
				/>
			</g>
			<path
				className="rock-top-2"
				d="M85.5,18.2l31.4-1.6,12.1.8,9.3-14.4-16.5-3s-30.3,10.3-36.3,18.2Z"
			/>
			<path
				className="rock-top-3"
				d="M176.4,36.5l-13,27.7,18.3-6.1,7-14.2,1.5-11.5s-9.3,1.3-13.8,4.1Z"
			/>
			<polygon
				className="rock-top-4"
				points="129.2 60.3 141.8 57 145.3 60.3 143.8 65.6 129.2 60.3"
			/>
			<polygon
				className="rock-top-5"
				points="22.9 78 35.9 83 42.9 87.2 48.2 83.3 26.8 78 22.9 78"
			/>
			<polygon
				className="rock-top-6"
				points="44.8 44.6 42.7 50.2 52.8 54.9 52.8 44.6 44.8 44.6"
			/>
			<g fill={colors.onahau}>
				<polygon
					className="rock-shade"
					points="74.2 91.9 64.6 99.7 54.3 133.6 71.4 140.9 83.4 134.9 74.4 110.5 74.2 91.9"
				/>
				<path
					className="rock-shade"
					d="M87.4,107.3l6.4,26.1s5.2-1.5,13.2-1.3l5.9-77.4-25.5,52.7Z"
				/>
				<polygon
					className="rock-shade"
					points="131.5 148.2 151.8 144.2 134.2 131.6 131.5 148.2"
				/>
				<polygon
					className="rock-shade"
					points="149.2 104.6 158.5 113.1 153 86.7 145.3 60.3 143.8 65.6 149.2 104.6"
				/>
				<polygon
					className="rock-shade"
					points="42.9 87.2 43 103.9 48 127.9 45.1 101.4 48.2 83.3 42.9 87.2"
				/>
				<polygon
					className="rock-shade"
					points="24 138.1 28.6 125.7 42.9 87.2 40.7 108.2 35.8 133.7 35.1 147.6 24.8 147 24 138.1"
				/>
			</g>
			<g fill={colors.chalk}>
				<polygon
					className="rock-shade"
					points="65.9 47.2 69.7 42 82.9 27.2 78.2 37.1 72.8 43.6 65.9 47.2"
				/>
				<polygon
					className="rock-shade"
					points="64.3 51.3 62.8 55.9 66.5 50.1 64.3 51.3"
				/>
				<polygon
					className="rock-shade"
					points="74.2 91.9 76.8 80.9 87.2 61.6 92.5 52.8 74.2 91.9"
				/>
				<polygon
					className="rock-shade"
					points="172.6 116.7 172.6 106.8 177 89.3 172.6 116.7"
				/>
				<polygon
					className="rock-shade"
					points="170 121.1 168.9 123.7 169 129.5 169 133.6 170.1 128 170 121.1"
				/>
				<polygon
					className="rock-shade"
					points="50.7 95.7 48 103.7 49.4 104.4 48.7 110.6 50.7 103.9 50.7 95.7"
				/>
			</g>
			<g fill={colors.koromiko}>
				<polygon
					className="rock-edge"
					points="123.9 17 128 15.3 133.8 10 129 17.4 123.9 17"
				/>
				<polygon
					className="rock-edge"
					points="39.5 85.1 44.8 85.9 42.9 87.2 39.5 85.1"
				/>
				<polygon
					className="rock-edge"
					points="5.8 125.6 10.6 131.1 8.6 132.3 5.8 125.6"
				/>
				<polygon
					className="rock-edge"
					points="184.8 102.5 189.5 99 194.1 98 184.8 102.5"
				/>
				<polygon
					className="rock-edge"
					points="176.2 119.7 174.3 124.8 173.7 136.1 176.2 119.7"
				/>
				<polygon
					className="rock-edge"
					points="140 64.3 143 64.2 144.7 62.6 143.8 65.6 140 64.3"
				/>
			</g>
			<polygon
				className="rock-side"
				points="22.8 77.9 14.2 104.3 8.3 122.5 11.6 126.8 22.2 110.2 27.7 79.8 22.8 77.9"
			/>
			<polygon
				className="rock-side-2"
				points="163.4 64.1 159.6 99.2 158.4 113.2 158 129.6 165.3 122.8 176.9 76 181.7 58.1 163.4 64.1"
			/>
			<polygon
				className="rock-side-3"
				points="87.4 107.3 74.3 110.4 74.2 91.9 99 38.8 115.4 26.2 112.9 54.6 87.4 107.3"
			/>
			<polygon
				className="rock-side-4"
				points="121.6 101.8 134.2 131.6 138.9 114.7 141.3 91.6 139.3 62.5 129.2 60.3 121.6 101.8"
			/>
			<polygon
				className="rock-side-light"
				fill={colors.rum}
				points="183.1 86.6 190.2 32.3 190.3 60 190.4 68.8 183.1 86.6"
			/>
			<polygon
				className="rock-face-light"
				points="182.8 103.6 183.5 124.7 193.4 144.5 194.1 98 182.8 103.6"
			/>
			<polygon
				className="rock-side-light"
				fill={colors.rum}
				points="129 17.4 125.9 36.9 135.3 20.8 138.3 2.9 129 17.4"
			/>
		</CustomSvg>
	);
};
