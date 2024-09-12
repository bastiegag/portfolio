import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

const CustomSvg = styled('g', {
	name: 'leaf',
	slot: 'Root',
})(() => ({}));

export const Leaf1 = ({ position }: { position: number[] }) => {
	gsap.registerPlugin(useGSAP);

	const id = useId();
	const colors = useTheme().palette.scene;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to(`#${CSS.escape(id)}`, {
			rotation: 'random(-3,3)',
			duration: gsap.utils.random(1, 2),
			// ease: 'power2.inOut',
			svgOrigin: '2 27',
		});
	});

	return (
		<CustomSvg
			className="leaf leaf-1"
			transform={`translate(${position[0]},${position[1]})`}
		>
			<g id={id} className="leaf">
				<path
					fill={colors.leaf.darker}
					d="M41.3,23.4s-2.5-2.1-3.9-4.3c-.8-1.2-1.3-2.5-1.6-3.7l-2.2-.9h2c-.4-2.2-.1-4.1,0-4.7l-3-1.2,3.1.9c0-.2.3-.9.6-1.8-1.4-.3-2.9-.6-2.9-.6,0,0,1.4,0,3.1-.3.4-1.6,1.1-3.8.5-5.4l-19.9,3,3.1,5.9s.3,1.4.9,3.2l6-2.5-5.7,3.2c.3.9.8,1.8,1.3,2.7l3.3,2.6,1.7-2-.8,2.8,1.9,1.5c.7.2,3.5.8,3.5.8,4.4.7,8.9.8,8.9.8Z"
				/>
				<path
					fill={colors.leaf.main}
					d="M37,1.5S26.4,0,25.6,0,9.5,2.8,9.5,2.8l-1.2,2.5,1.1.2,2.3.6c-1.5-.2-2.8-.3-3.9.1l-2.4,9.4s0,0,0,0C4.4,17.6,0,26.2,0,26.2l3.2,1.1s1.3-8.4,3.7-12c0-.1.2-.3.3-.4,5.7-2.5,16.6-4.3,16.6-4.3l-1.8-3.2,3,3.4s1.5-.9,3.8-2.9l-2.1-2.3,3.2,2.1.5-.4-2.9-3.1,4.3,2.3,5.4-4.9Z"
				/>
				<path
					fill={colors.leaf.dark}
					d="M19.2,11.4c-4.2.9-10.3,2.4-13.4,4.1,3.6-4.6,8.3-9.4,10.2-11.3.6,1.1,2,3.8,3.2,7.2ZM9.5,2.9l7.6.5-3.7-1.3c-2.2.4-3.8.7-3.8.7h0ZM30.3,7.1h0s-2.9-3.1-2.9-3.1l4.3,2.3,1.4-1.3L22.8.9l7.5,6.2ZM20.2,2l-.6.3,5.9,8.1c.6-.4,1.7-1.2,3.1-2.4L20.2,2Z"
				/>
			</g>
		</CustomSvg>
	);
};
