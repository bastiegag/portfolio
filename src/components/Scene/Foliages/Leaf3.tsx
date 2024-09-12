import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

const CustomSvg = styled('g', {
	name: 'leaf',
	slot: 'Root',
})(() => ({}));

export const Leaf3 = ({ position }: { position: number[] }) => {
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
			svgOrigin: '8 38',
		});
	});

	return (
		<CustomSvg
			className="leaf leaf-3"
			transform={`translate(${position[0]},${position[1]})`}
		>
			<g id={id} className="leaf">
				<polygon
					fill={colors.leaf.darker}
					points="16.1 4.8 5.2 4 7.8 13.5 15.2 8.8 14.9 7.1 16.1 4.8"
				/>
				<path
					fill={colors.leaf.main}
					d="M16.1,4.8C15.8,4.7,8.9,0,8.1,0c0,0,0,0,0,0,0,0,0,0,0,0C7.3.1.2,3.1.2,3.1c0,.1-.1.3-.1.5h1.9C2,3.7,0,4.3,0,4.3c0,.6,0,.9.3,1.6l4.1.2s-2,.3-4,.7c1.4,5,6.5,11.7,6.5,11.7,0,0,1.2,6.1-.6,19.9l2.8-3.2c-.5-1.7-1.3-14.4-1.3-16.3,0,0,0-.1,0-.1,0,0,0,0,0,0,0,0,0,0,0,0,0-.3,1.4-6.8,3-8.5.3-.3.7-.7,1.1-1.1-.7-.4-2-1.3-1.7-1.2.2,0,1.5.4,2.3.6.6-.5,1.1-1.1,1.7-1.6l-2.8-1.8,3.9.8c.6-.6,1-1,.9-1Z"
				/>
				<path
					fill={colors.leaf.dark}
					d="M6.5,6.5L.7,7.7c-.1-.3-.2-.6-.3-.9,1.9-.4,4-.7,4-.7l-4.1-.2c0-.1,0-.3,0-.4,3,.2,6.2-.3,6.2-.3v1.3ZM7.4.2C6,.7,3,2,1.4,2.6c3.1-.6,5.7-1.2,5.7-1.2l.3-1.2ZM15.8,5.1L7.6,1.6c-.1.4-.2.9-.4,1.4,2.6,1.5,5.2,3.2,6.6,4.1.1-.1.2-.2.3-.3l-2.8-1.8,3.9.8c.3-.3.5-.5.6-.7ZM9,35.2c-.6-1.8-1.4-16.3-1.3-16.6,0-.1.3-1.6.8-3.3l-1.5,2.4s-.5-.4-1.9-1.7c1,1.5,1.7,2.5,1.7,2.5,0,0,1.2,6.1-.6,19.9l2.8-3.2Z"
				/>
			</g>
		</CustomSvg>
	);
};
