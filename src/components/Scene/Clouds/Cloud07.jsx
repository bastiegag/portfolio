import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled } from '@mui/system';

import config from '@/config';

const animation = {
	width: 345.4,
	y: 140,
	duration: 10,
	repeatDelay: 0,
	start: 7,
};

export const Cloud07 = () => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		var timeline = gsap.timeline({
			repeat: -1,
			repeatDelay: animation.repeatDelay,
		});
		timeline.fromTo(
			'.cloud07',
			{ x: animation.width * -1 },
			{
				x: config.sceneWidth,
				duration: animation.duration * config.cloudsSpeed,
				ease: 'none',
			}
		);
		timeline.seek(animation.start * config.cloudsSpeed);
	});

	const CustomSvg = styled('g', {
		name: 'cloud07',
		slot: 'Root',
	})(() => ({
		mixBlendMode: 'soft-light',
		'.cloud-back': {
			fill: 'url(#cloud07-back-gradient)',
		},
	}));

	return (
		<CustomSvg
			className="cloud07"
			transform={`translate(0,${animation.y})`}
			// xmlns="http://www.w3.org/2000/svg"
			// xmlnsXlink="http://www.w3.org/1999/xlink"
			// version="1.1"
			// viewBox="0 0 345.4 89.7"
			// preserveAspectRatio="xMidYMid slice"
			// width="345.4"
			// height="89.7"
			// x="0"
			// y={animation.y}
		>
			<defs>
				<linearGradient
					id="cloud07-back-gradient"
					x1="172.8"
					y1="2.3"
					x2="172.8"
					y2="92"
					gradientTransform="translate(0 92) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#4fcfff" />
					<stop offset="0" stopColor="#69d4ff" />
					<stop offset=".2" stopColor="#8ddcff" />
					<stop offset=".3" stopColor="#aae2ff" />
					<stop offset=".5" stopColor="#c0e7ff" />
					<stop offset=".6" stopColor="#d0ebff" />
					<stop offset=".8" stopColor="#daedff" />
					<stop offset="1" stopColor="#def" />
				</linearGradient>
			</defs>
			<path
				className="cloud-back"
				d="M2.8,38.6C7.6,18.1,20.2.7,53.3,0c33.1-.7,55.6,53.9,55.6,53.9,0,0-1-16.4,7-13.9,5.3,1.7,9.9,10.5,9.9,10.5,0,0,10.4-6.4,28.3-5.6,29.9,1.3,47.3,26.2,58.7,33.5,0,0,20.7-7.9,34.6-4.4,13.9,3.5,12.1,4.4,28.6,7.7,16.4,3.3,69.5,8,69.5,8H12.5S-7.1,71.9,2.8,38.6Z"
			/>
		</CustomSvg>
	);
};
