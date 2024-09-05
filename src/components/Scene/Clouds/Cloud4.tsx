import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import config from '@/config';

const animation = {
	width: 316.1,
	y: 196,
	duration: 6,
	repeatDelay: 0,
	start: 4,
};

const CustomSvg = styled('g', {
	name: 'cloud4',
	slot: 'Root',
})(() => ({}));

export const Cloud4 = ({ distance }: { distance?: number }) => {
	gsap.registerPlugin(useGSAP);

	const colors = useTheme().palette.scene;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatDelay: animation.repeatDelay,
		});

		timeline.fromTo(
			'.cloud-4',
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
			className="cloud cloud-4"
			transform={`translate(0,${animation.y})`}
		>
			<g className="cloud-light" fill={colors.cloud.light}>
				<path d="M6.7,50.8c-10.3,3.8-5.6,10.5-5.6,10.5h296.8s-.3-6.5-.6-8.4c-1.6-7.8-9.3-25.8-31.7-28.4-22.4-2.6-21.6,31.8-21.6,31.8,0,0-14.6-20-28.6-8.5,0,0-7.5-42.8-29.6-47.3s-28.8,20.3-28.8,20.3c0,0-27.1-15.6-54.3-4.4-27.3,11.2-28.1,32.9-28.1,32.9,0,0-13.1-17.4-26.3-15.3-13.2,2.1-12.6,17-12.6,17,0,0-18.5-4.1-28.8-.3h-.2,0Z" />
				<path d="M309.9,44.6c1.5.5,5.4,3.3,6.1,6.2.4,1.7-.8,2.3-2.2,2.5-2,.3-3.2.2-5.2-.4-1.4-.5-3-.9-4.1-1.8-1.4-1.3-2.6-4.3-.9-5.8.8-.6,2.1-1.4,3.1-1.4s1.8.2,3.3.8h0Z" />
			</g>
			<g
				className="cloud-fade"
				fill={colors.sky.main}
				fillOpacity={distance ? `${distance}%` : '0'}
			>
				<path d="M6.7,50.8c-10.3,3.8-5.6,10.5-5.6,10.5h296.8s-.3-6.5-.6-8.4c-1.6-7.8-9.3-25.8-31.7-28.4-22.4-2.6-21.6,31.8-21.6,31.8,0,0-14.6-20-28.6-8.5,0,0-7.5-42.8-29.6-47.3s-28.8,20.3-28.8,20.3c0,0-27.1-15.6-54.3-4.4-27.3,11.2-28.1,32.9-28.1,32.9,0,0-13.1-17.4-26.3-15.3-13.2,2.1-12.6,17-12.6,17,0,0-18.5-4.1-28.8-.3h-.2,0Z" />
				<path d="M309.9,44.6c1.5.5,5.4,3.3,6.1,6.2.4,1.7-.8,2.3-2.2,2.5-2,.3-3.2.2-5.2-.4-1.4-.5-3-.9-4.1-1.8-1.4-1.3-2.6-4.3-.9-5.8.8-.6,2.1-1.4,3.1-1.4s1.8.2,3.3.8h0Z" />
			</g>
		</CustomSvg>
	);
};
