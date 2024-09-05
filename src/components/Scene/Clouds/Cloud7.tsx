import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import config from '@/config';

const animation = {
	width: 345.4,
	y: 140,
	duration: 10,
	repeatDelay: 0,
	start: 7,
};

const CustomSvg = styled('g', {
	name: 'cloud7',
	slot: 'Root',
})(() => ({}));

export const Cloud7 = ({ distance }: { distance?: number }) => {
	gsap.registerPlugin(useGSAP);

	const colors = useTheme().palette.scene;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatDelay: animation.repeatDelay,
		});

		timeline.fromTo(
			'.cloud-7',
			{ x: animation.width * -1 },
			{
				x: config.sceneWidth,
				duration: animation.duration * config.cloudsSpeed,
				ease: 'none',
			}
		);

		timeline.seek(animation.start * config.cloudsSpeed);
	});

	return (
		<CustomSvg
			className="cloud cloud-7"
			transform={`translate(0,${animation.y})`}
		>
			<path
				className="cloud-light"
				fill={colors.cloud.light}
				d="M2.8,38.6C7.6,18.1,20.2.7,53.3,0c33.1-.7,55.6,53.9,55.6,53.9,0,0-1-16.4,7-13.9,5.3,1.7,9.9,10.5,9.9,10.5,0,0,10.4-6.4,28.3-5.6,29.9,1.3,47.3,26.2,58.7,33.5,0,0,20.7-7.9,34.6-4.4,13.9,3.5,12.1,4.4,28.6,7.7,16.4,3.3,69.5,8,69.5,8H12.5S-7.1,71.9,2.8,38.6Z"
			/>
			<path
				className="cloud-fade"
				fill={colors.sky.main}
				fillOpacity={distance ? `${distance}%` : '0'}
				d="M2.8,38.6C7.6,18.1,20.2.7,53.3,0c33.1-.7,55.6,53.9,55.6,53.9,0,0-1-16.4,7-13.9,5.3,1.7,9.9,10.5,9.9,10.5,0,0,10.4-6.4,28.3-5.6,29.9,1.3,47.3,26.2,58.7,33.5,0,0,20.7-7.9,34.6-4.4,13.9,3.5,12.1,4.4,28.6,7.7,16.4,3.3,69.5,8,69.5,8H12.5S-7.1,71.9,2.8,38.6Z"
			/>
		</CustomSvg>
	);
};
