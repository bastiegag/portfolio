import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import config from '@/config';

const animation = {
	width: 393.3,
	y: 150,
	duration: 3,
	repeatDelay: 0,
	start: 1,
};

const CustomSvg = styled('g', {
	name: 'cloud2',
	slot: 'Root',
})(() => ({}));

export const Cloud2 = ({ distance }: { distance?: number }) => {
	gsap.registerPlugin(useGSAP);

	const colors = useTheme().palette.scene;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatDelay: animation.repeatDelay,
		});

		timeline.fromTo(
			'.cloud-2',
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
			className="cloud cloud-2"
			transform={`translate(0,${animation.y})`}
		>
			<path
				className="cloud-light"
				fill={colors.cloud.light}
				d="M0,46.5h393.3c-4.4-1.8-11.5-5-19.7-6.1-10.7-1.4-23.5-.9-35.4,4.9,0,0-.1,0-.2-.2h0c-1.9-2.5-3.9-4.4-5.9-6-15.1-11.7-32.6-.6-34.8.9-.2,0-.2.2-.2.2v-.6c0-.5.1-1.4.1-2.6,0-1.8,0-4.2-.3-6.8-.7-5.6-2.8-11.9-8.4-14.2-8.7-3.5-17.1,8.6-21.6,16.7-2,3.7-3.3,6.5-3.3,6.5,0,0,0-1.4-.4-3.5-1.4-7.3-6.3-32.2-34.4-35.6-21.2-2.5-42.6,21.3-52.6,32.7-5.7,6.5-8.8,11.8-8.8,11.8l-15.9-4.5c-.2,0-.4,0-.7-.2-16.1-4.2-46.3,2.2-46.3,2.2,0,0-5.7-7.6-22-8.6-16.3-.9-39.8,11.9-39.8,11.9-22.3-1.5-42.7,1-42.7,1h0Z"
			/>
			<path
				className="cloud-dark"
				fill={colors.cloud.dark}
				d="M135.6,46.5h202.7c0-.5-.1-.9-.2-1.3h-.1c-1.9-2.6-3.9-4.5-5.9-6.1-9.6,6.2-26.3,10.5-35.1,1.1h0c0-.8.1-1.5.2-2.3h0v-5.1c0-.8-.1-1.6-.2-2.5-7.2,10.2-23.4,19.8-29.9,2.5-.2.4-.4.7-.6,1.1-1.1,2-1.9,3.7-2.3,4.6,0,.2-.1.3-.1.3h0c-.2.3-.2.5-.2.5,0,0,0-1.4-.4-3.5h0c-7.2,7.8-20.7,7.9-29.3,3.9-12.1-5.6-21.5-14.4-39.7-11.5,11.2-.1,22.9,3.2,22.5,10.2-.4,6.6-39.9,8.5-41.9,5.4-2.5-3.9,4.5-9.8,10.2-13.4-6.4,2.3-10.8,5.6-13.6,8.5-2.6,3.5-4,5.8-4,5.8h0l-5.2-1.5c-.2,0-.5,0-.7-.2-1-.3-2.2-.6-3.7-1-.4,0-.7-.2-1.1-.3-.8-.2-1.6-.5-2.5-.7s-1.8-.5-2.8-.8c0,0,1.8,4.3-15.9,6.3h-.2,0Z"
			/>
			<path
				className="cloud-fade"
				fill={colors.sky.main}
				fillOpacity={distance ? `${distance}%` : '0'}
				d="M0,46.5h393.3c-4.4-1.8-11.5-5-19.7-6.1-10.7-1.4-23.5-.9-35.4,4.9,0,0-.1,0-.2-.2h0c-1.9-2.5-3.9-4.4-5.9-6-15.1-11.7-32.6-.6-34.8.9-.2,0-.2.2-.2.2v-.6c0-.5.1-1.4.1-2.6,0-1.8,0-4.2-.3-6.8-.7-5.6-2.8-11.9-8.4-14.2-8.7-3.5-17.1,8.6-21.6,16.7-2,3.7-3.3,6.5-3.3,6.5,0,0,0-1.4-.4-3.5-1.4-7.3-6.3-32.2-34.4-35.6-21.2-2.5-42.6,21.3-52.6,32.7-5.7,6.5-8.8,11.8-8.8,11.8l-15.9-4.5c-.2,0-.4,0-.7-.2-16.1-4.2-46.3,2.2-46.3,2.2,0,0-5.7-7.6-22-8.6-16.3-.9-39.8,11.9-39.8,11.9-22.3-1.5-42.7,1-42.7,1h0Z"
			/>
		</CustomSvg>
	);
};
