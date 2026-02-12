import { useId } from 'react';
import { styled, useTheme } from '@mui/material';

import { useParallax } from '@shared/hooks/parallax/useParallax';

const WIDTH = 40;
const HEIGHT = 40;

export interface MugProps {
	x: number;
	y: number;
	modifier: { x: number; y: number };
}

const MugRoot = styled('g', {
	name: 'Mug',
	slot: 'root',
})();

export const Mug = ({ x, y, modifier }: MugProps) => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;

	useParallax(`#${id}`, x, y, modifier);

	return (
		<MugRoot
			id={id}
			className="Mug-root animate-all"
			transform={`translate(${x},${y})`}
			strokeWidth="0"
		>
			<rect fill="transparent" width={WIDTH} height={HEIGHT} />
			<path
				fill={colors.mug.main}
				className="main"
				d="M30,16.1c-.1-.3-1.2-1.1-1.7-1.1-.5,0-1.9,0-2.3.2,0,0-1.5-1.5-6-1.5s-6.5.9-6.7,1.9c0,0-.3,1,1.1,1.8,0,0-.2,4.8-.2,5.4s0,1.8.2,2c.4.7,3.7,1.5,5.6,1.5s4.8-.7,5.1-.8c.2-.1.5-.3.5-.7s0-.9,0-.9c0,0,.5.3,1,.1.4-.2.3-.4.2-.5,0-.2-.3-.6.1-.6s1.2,0,1.8-.3c.6-.4,1-2.4,1.2-3.3.2-.9.4-2.7.2-3.1ZM27.8,18.3c-.1.9-.4,2.8-.6,3-.3.2-1,.1-1.8.2v-2.2c0,0,.6.1.7,0,.1,0,.1-.3.1-.4,0-.1,0-1.4.2-1.7.2-.3.6-.6,1.5-.6,0,0,0,.7-.1,1.6Z"
			/>
			<path
				fill={colors.mug.dark}
				className="dark"
				d="M29,16.8c-.2-.2-1.1-.2-1-.2,0,0,0,.7-.1,1.6s-.4,2.8-.6,3c-.3.2-1,.1-1.8.2,0,.3,0,.5,0,.8.2,0,.4,0,.7,0,1.1,0,1.5-.1,1.9-.4.4-.2.8-2.1.8-2.6,0-.5.3-2.3.1-2.5Z"
			/>
			<path
				fill={colors.mug.light}
				className="light"
				d="M29.9,16c-.3-.4-1.2-1-1.7-1-.5,0-1.9,0-2.3.2v1.4c.6-.3,3.1-.8,4-.6Z"
			/>
			<path
				fill={colors.mug.dark}
				className="dark"
				d="M25.2,17.5c.1,0,.7-.5.8-.7.1-.2.3-.5.3-.8,0,0-1.9-2.2-6.4-2.2s-6.4.7-6.7,1.7c0,0-.3,1.1,1.1,1.9,0,0,2.6.7,5.6.7s5.2-.7,5.2-.7Z"
			/>
			<path
				fill={colors.mug.light}
				className="light"
				d="M19.9,13.7c-4.1,0-6.5.7-6.7,1.8s3.3,1.8,6.7,1.8,6.3-.6,6.3-1.3-1.9-2.3-6.3-2.3Z"
			/>
			<path
				fill={colors.mug.darker}
				className="darker"
				d="M19.7,14.6c-2.7,0-4.7.5-4.7,1.1s3.3.8,4.7.8,4.8-.2,4.8-.8-2.5-1.1-4.8-1.1Z"
			/>
			{/* <path
					fill={colors.mug.light}
					className="light"
					d="M19.9,23.1c-.6-4.8-4.1-5.1-4.8-4.9-.2,0-.6.3-.9,1,0,1.5-.1,3.4-.2,3.7,0,0,0,.1,0,.2.6,1.7,2.1,2.4,3.4,2.3,1.5,0,2.5-1.1,2.4-2.4Z"
				/>
				<path
					fill={colors.mug.lighter}
					className="lighter"
					d="M15.6,20.2c0,.9-.3,1.4-.4,1.4s-.4-.1-.4-1.2.3-1.2.4-1.2.6.6.5,1.1Z"
				/> */}
			<path
				fill="transparent"
				strokeWidth="1"
				d="M30,16.1c-.1-.3-1.2-1.1-1.7-1.1-.5,0-1.9,0-2.3.2,0,0-1.5-1.5-6-1.5s-6.5.9-6.7,1.9c0,0-.3,1,1.1,1.8,0,0-.2,4.8-.2,5.4s0,1.8.2,2c.4.7,3.7,1.5,5.6,1.5s4.8-.7,5.1-.8c.2-.1.5-.3.5-.7s0-.9,0-.9c0,0,.5.3,1,.1.4-.2.3-.4.2-.5,0-.2-.3-.6.1-.6s1.2,0,1.8-.3c.6-.4,1-2.4,1.2-3.3.2-.9.4-2.7.2-3.1ZM27.8,18.3c-.1.9-.4,2.8-.6,3-.3.2-1,.1-1.8.2v-2.2c0,0,.6.1.7,0,.1,0,.1-.3.1-.4,0-.1,0-1.4.2-1.7.2-.3.6-.6,1.5-.6,0,0,0,.7-.1,1.6Z"
			/>
		</MugRoot>
	);
};
