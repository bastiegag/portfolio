import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled } from '@mui/system';

import config from '@/config';

const animation = {
	width: 316.1,
	y: 196,
	duration: 6,
	repeatDelay: 0,
	start: 4,
};

export const Cloud04 = () => {
	gsap.registerPlugin(useGSAP);

	useGSAP(() => {
		var timeline = gsap.timeline({
			repeat: -1,
			repeatDelay: animation.repeatDelay,
		});
		timeline.fromTo(
			'.cloud04',
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
		name: 'cloud04',
		slot: 'Root',
	})(() => ({
		'.cloud-back': {
			fill: 'url(#cloud04-back-gradient)',
		},
		'.cloud-right': {
			fill: '#f5f3ff',
		},
	}));

	return (
		<CustomSvg
			className="cloud04"
			transform={`translate(0,${animation.y})`}
			// xmlns="http://www.w3.org/2000/svg"
			// xmlnsXlink="http://www.w3.org/1999/xlink"
			// version="1.1"
			// viewBox="0 0 316.1 61.3"
			// preserveAspectRatio="xMidYMid slice"
			// width="316.1"
			// height="61.3"
			// x="0"
			// y={animation.y}
		>
			<defs>
				<linearGradient
					id="cloud04-back-gradient"
					x1="149"
					y1="2.4"
					x2="149"
					y2="49.2"
					gradientTransform="translate(0 64) scale(1 -1)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#d1deff" />
					<stop offset=".2" stopColor="#e2eaff" />
					<stop offset=".4" stopColor="#f2f6ff" />
					<stop offset=".6" stopColor="#fcfcff" />
					<stop offset="1" stopColor="#fff" />
				</linearGradient>
			</defs>
			<path
				className="cloud-back"
				d="M6.7,50.8c-10.3,3.8-5.6,10.5-5.6,10.5h296.8s-.3-6.5-.6-8.4c-1.6-7.8-9.3-25.8-31.7-28.4-22.4-2.6-21.6,31.8-21.6,31.8,0,0-14.6-20-28.6-8.5,0,0-7.5-42.8-29.6-47.3s-28.8,20.3-28.8,20.3c0,0-27.1-15.6-54.3-4.4-27.3,11.2-28.1,32.9-28.1,32.9,0,0-13.1-17.4-26.3-15.3-13.2,2.1-12.6,17-12.6,17,0,0-18.5-4.1-28.8-.3h-.2,0Z"
			/>
			<path
				className="cloud-right"
				d="M309.9,44.6c1.5.5,5.4,3.3,6.1,6.2.4,1.7-.8,2.3-2.2,2.5-2,.3-3.2.2-5.2-.4-1.4-.5-3-.9-4.1-1.8-1.4-1.3-2.6-4.3-.9-5.8.8-.6,2.1-1.4,3.1-1.4s1.8.2,3.3.8h0Z"
			/>
		</CustomSvg>
	);
};
