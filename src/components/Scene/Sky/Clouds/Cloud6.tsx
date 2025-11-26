import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/material';

import { CloudProps } from './';
import config from '@/config';

const animation = {
	width: 374.2,
	duration: 10,
	repeatDelay: 0,
	start: 2,
};

const Cloud6Root = styled('g', {
	name: 'Cloud6',
	slot: 'root',
})(() => ({ position: 'relative' }));

export const Cloud6 = ({ params }: CloudProps) => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatDelay: animation.repeatDelay,
		});

		timeline.fromTo(
			`#${id}`,
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
		<Cloud6Root
			id={id}
			className="Cloud6-root"
			transform={`translate(0,${params.y})`}
		>
			<path
				fill={colors.cloud.light}
				d="M374.2,57.8s-96.3.2-156.6,0c-79.8-.2-217.6,0-217.6,0,0,0,34.5-8.4,117.7-10.5,0,0,5.7-8.7,14.6-7.6,8.9,1.1,15.3,7,15.3,7,0,0,12.1-44.5,36.5-46.6,24.4-2.1,28.6,40.3,28.6,40.3,0,0,8.3-2.9,14.2,2.6,0,0,7.8,7.6,21.7,6.8,23-1.4,39.6-22.4,51.4-25.5s18.3,4.1,23.9,8.5c13,10.2,33.1,20.5,50.4,25.1h0Z"
			/>
			<path
				fill={colors.sky.main}
				fillOpacity={params.distance ? `${params.distance}%` : '0'}
				d="M374.2,57.8s-96.3.2-156.6,0c-79.8-.2-217.6,0-217.6,0,0,0,34.5-8.4,117.7-10.5,0,0,5.7-8.7,14.6-7.6,8.9,1.1,15.3,7,15.3,7,0,0,12.1-44.5,36.5-46.6,24.4-2.1,28.6,40.3,28.6,40.3,0,0,8.3-2.9,14.2,2.6,0,0,7.8,7.6,21.7,6.8,23-1.4,39.6-22.4,51.4-25.5s18.3,4.1,23.9,8.5c13,10.2,33.1,20.5,50.4,25.1h0Z"
			/>
		</Cloud6Root>
	);
};
