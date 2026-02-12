import { useId } from 'react';
import { styled, useTheme } from '@mui/material';

import { RockProps, Rock } from '@features/scene-island/Rocks/Rock';
import { useParallax } from '@shared/hooks/parallax/useParallax';

const ROCKS_DATA: RockProps[] = [
	{
		variant: 9,
		x: 1,
		y: 170,
	},
	{
		variant: 8,
		x: 83,
		y: 166,
	},
	{
		variant: 10,
		x: 39,
		y: 175,
	},
];

export interface CampfireProps {
	x: number;
	y: number;
	modifier: { x: number; y: number };
}

const CampfireRoot = styled('g', {
	name: 'Campfire',
	slot: 'root',
})(() => ({
	'.wood-shadow': {
		mixBlend: 'multiply',
		opacity: 0.25,
	},
	'.campfire-shadow': {
		mixBlend: 'multiply',
		opacity: 0.15,
	},
}));

export const Campfire = ({ x, y, modifier }: CampfireProps) => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;

	useParallax(`#${id}`, x, y, modifier);

	return (
		<CampfireRoot
			id={id}
			className="Campfire-root animate-color"
			transform={`translate(${x},${y})`}
		>
			<g className="campfire-wood">
				<path
					fill={colors.wood.darker}
					d="M36,178.9s6.8-10.9,10.7-12.1c3.9-1.3,23.2-1,25.2.2,2,1.2,2.9,4.5,2.9,4.5,0,0,16.4-1.5,18.4-.7,2.1.8,4.8,8.9,4.8,8.9l-16.4,3.4-26.1.6h-18.3l-1.3-4.9Z"
				/>
				<polygon
					fill={colors.wood.dark}
					points="56.9 177.2 59.3 153.3 61.8 144.5 64.2 144.5 67.3 164.9 67.3 178.9 56.3 178.9 56.9 177.2"
				/>
				<path
					fill={colors.wood.main}
					d="M72.3,162.8l-1.3-9.6-3.1-13.6-.6,1.2-1.4-4.9-3.3,2.8-.6,9.7c-1.9-.6-4.1.3-4.1.3l-3.9,2.9v-2.9l-22.5,31.8,15.6,2,15-29.6.5,8.7-3.2,1.2c-.7.9-1.5,18.4-1.5,18.4l17.2-1.5v-2.7l-2.8-14.4Z"
				/>
				<path
					fill={colors.wood.light}
					d="M53.9,151.7l-7.8,8.1s4.6-2.1,7.8-5.1c3.2-2.9,4.5-6.2,4.5-6.2,0,0-2.5,1.1-4.5,3.1Z"
				/>
				<polygon
					fill={colors.wood.dark}
					points="76.6 176.2 72.7 159.8 70.9 152.1 73.7 156.4 75 157.1 78.7 168.8 81.1 169.8 86.3 181.6 80.5 181.6 76.6 176.2"
				/>
				<path
					fill={colors.wood.darker}
					d="M60.9,166.4l1.7,10,4.7,1.6,2.5-.7-2-14.5-.5-10.6v-11.3l.5,12.4,1.5,9.4,5.8,17.3-14.2,1.2v-14.8ZM47,182.6l7.6-14.9,5.4-10.6-5.9,7.9-1.3.4,3.5-8.4,4.4-8.8-6.4,8.3s-4.3,9.1-4.5,9.6c-.2.4-2.9,2.8-2.9,2.8l-.3-5.7,1.7-4.8,5.5-6.7-6.9,7.7-7.1,15.7-8.5,5.6,15.6,2ZM76.6,162v8.7h0l-1.1-3-2.9-13.1-1.7-2.5,4.1,17.6,1.5,6.6,3.9,5.4h5.8l-5.2-11.9-3.2,2.1.8-3.1-2.1-6.8Z"
				/>
				<path
					fill={colors.wood.dark}
					d="M44.8,181.4l4.7-10s5.3-4.3,8.3-4.7l3.1-.4v14.8l-8.1,2.6-8.1-2.3Z"
				/>
				<path
					fill={colors.wood.lighter}
					d="M62.5,161.8l5.3.9h-4.1c0,.1-4.4.4-4.4.4l3.2-1.2ZM49.5,171.4s1.6,2.6,5.8,1.7c4.2-.9,5.6-6.7,5.6-6.7,0,0-5.3-1-11.4,5.1Z"
				/>
				<path
					fill={colors.wood.darker}
					d="M44.8,181.4s7.3,1.6,8.1,1.7,2.8-10.1,2.8-10.1l2.2-1.1-.8,6.9.8,2.1,1.3-10.6,1.7-3.8v14.8l-8.1,2.6-8.1-2.3Z"
				/>
			</g>
			<polygon
				className="campfire-shadow"
				points="3.6 189.7 35 191.9 83.5 191.9 130.3 190.3 131.8 189.3 127.5 187.3 136 186.8 108.5 184.7 113.6 179 3.6 189.7"
			/>
			{ROCKS_DATA.map((props, index) => (
				<Rock key={index} {...props} />
			))}
		</CampfireRoot>
	);
};
