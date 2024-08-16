import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled } from '@mui/system';

import config from '@/config';

const animation = {
	width: 374.2,
	y: 160,
	duration: 10,
	repeatDelay: 0,
	start: 2,
};

export const Cloud06 = () => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		var timeline = gsap.timeline({
			repeat: -1,
			repeatDelay: animation.repeatDelay,
		});
		timeline.fromTo(
			'.cloud06',
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
		name: 'cloud06',
		slot: 'Root',
	})(() => ({
		mixBlendMode: 'soft-light',
		'.cloud-back': {
			fill: 'url(#cloud06-back-gradient)',
		},
	}));

	return (
		<CustomSvg
			className="cloud06"
			transform={`translate(0,${animation.y})`}
			// xmlns="http://www.w3.org/2000/svg"
			// xmlnsXlink="http://www.w3.org/1999/xlink"
			// version="1.1"
			// viewBox="0 0 374.2 57.9"
			// preserveAspectRatio="xMidYMid slice"
			// width="374.2"
			// height="57.9"
			// x="0"
			// y={animation.y}
		>
			<defs>
				<linearGradient
					id="cloud06-back-gradient"
					x1="187.1"
					y1="2.1"
					x2="187.1"
					y2="60"
					gradientTransform="translate(0 60) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#def" />
					<stop offset=".2" stopColor="#daedff" />
					<stop offset=".4" stopColor="#d0ebff" />
					<stop offset=".5" stopColor="#c0e7ff" />
					<stop offset=".7" stopColor="#aae2ff" />
					<stop offset=".8" stopColor="#8ddcff" />
					<stop offset=".9" stopColor="#69d4ff" />
					<stop offset="1" stopColor="#4fcfff" />
				</linearGradient>
			</defs>
			<path
				className="cloud-back"
				d="M374.2,57.8s-96.3.2-156.6,0c-79.8-.2-217.6,0-217.6,0,0,0,34.5-8.4,117.7-10.5,0,0,5.7-8.7,14.6-7.6,8.9,1.1,15.3,7,15.3,7,0,0,12.1-44.5,36.5-46.6,24.4-2.1,28.6,40.3,28.6,40.3,0,0,8.3-2.9,14.2,2.6,0,0,7.8,7.6,21.7,6.8,23-1.4,39.6-22.4,51.4-25.5s18.3,4.1,23.9,8.5c13,10.2,33.1,20.5,50.4,25.1h0Z"
			/>
		</CustomSvg>
	);
};
