import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

const CustomSvg = styled('g', {
	name: 'leaf',
	slot: 'Root',
})(() => ({}));

export const Leaf2 = ({ position }: { position: number[] }) => {
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
			svgOrigin: '37 31',
		});
	});

	return (
		<CustomSvg
			className="leaf leaf-2"
			transform={`translate(${position[0]},${position[1]})`}
		>
			<g id={id} className="leaf">
				<path
					fill={colors.leaf.darker}
					d="M13.3.3L2,.5.8,3l1.4,1.2-1.8-.3-.4,2.2c2.6.5,4.7.6,6.5.6,0-.5,0-1.1,0-1.1l1.2,1c3.4-.2,4.8-1.2,4.8-1.2,6.4-1.2,7.5-.9.7-5.2Z"
				/>
				<path
					fill={colors.leaf.main}
					d="M27.9,17.3c-.9-1-2.4-10.5-4.3-12.5S16.9.8,14.8.2C12.7-.4,2,.5,2,.5c.5.5,1.7.9,2.9,1.7,2.5-.1,5.4,0,5.4,0,0,0-3.2.4-5.1.7,1.4,1.1,2.7,2.4,5.2,4.2l4.6-.8-2.8,1.5c.6.5,2.4,2.3,2.4,2.3,1.2-1,2.8-2.2,3.1-2.3.6-.2,3.5.2,3.5.2,0,0-3,0-3.3.5-.2.3-1.1,1-2.2,2.3,5.4,4.5,9.9,6.2,11.1,7.3,1.3,1.2,3.7,5.6,5.9,12l4.2,1.3c-3.4-3.1-8.2-13.1-9-14.1Z"
				/>
				<path
					fill={colors.leaf.dark}
					d="M27.5,16.6c-.7-1.9-1.7-7-2.9-9.9-1.9-1.4-5.2-3.4-8.4-5-.5-.2-1.7-.7-1.5-1.6-.4-.1-1.3-.2-2.3-.2,1.3.3,2,.9,2.2.9.3.1,3.3,3.3,6.2,6.9.2,0,.2,0,.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.2,0,2.7,3.4,5.5,7.1,6.7,8.7Z"
				/>
			</g>
		</CustomSvg>
	);
};
