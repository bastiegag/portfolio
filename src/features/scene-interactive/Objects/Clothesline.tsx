import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/material';

import { Link } from '@features/navigation';
import { useParallax } from '@shared/hooks/parallax/useParallax';
import { useSettings } from '@features/settings';
import config from '@shared/data/config';

const WIDTH = 105;
const HEIGHT = 80;

export interface ClotheslineProps {
	x: number;
	y: number;
	modifier: { x: number; y: number };
	scale: number;
}

const ClotheslineRoot = styled('g', {
	name: 'Clothesline',
	slot: 'root',
})<{ 'data-night': boolean }>(({ theme, 'data-night': isNight }) => ({
	'.pole-shadow': {
		opacity: 0.15,
		mixBlendMode: 'multiply',
	},
	...(isNight && {
		'.towel-icon': {
			filter: `drop-shadow(0 0 3px ${theme.vars.palette.clothesline.icon})`,
		},
	}),
}));

export const Clothesline = ({ x, y, modifier, scale }: ClotheslineProps) => {
	const id = CSS.escape(useId());
	const { settings } = useSettings();
	const colors = useTheme().vars.palette;

	useParallax(`#${id}`, x, y, modifier);

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to(`#${id}-skew`, {
			duration: gsap.utils.random(1.5, 2.5),
			skewX: 'random(-1, 1)',
			ease: 'power1.inOut',
			svgOrigin: '51 79',
		});

		for (let i = 1; i <= 8; i++) {
			const towelTimeline = gsap.timeline({
				repeat: -1,
				repeatRefresh: true,
			});

			towelTimeline.to(`#${id}-${i}`, {
				duration: gsap.utils.random(1.5, 2),
				skewX: 'random(-4,4)',
				ease: 'sine.inOut',
				svgOrigin: '8 0',
			});
		}
	}, [id]);

	return (
		<ClotheslineRoot
			id={id}
			className="Clothesline-root"
			transform={`translate(${x},${y})`}
			data-night={settings.time === 'night'}
			strokeWidth="0"
		>
			<svg
				id={`${id}-skew`}
				width={scale ? WIDTH * scale : WIDTH}
				height={scale ? HEIGHT * scale : HEIGHT}
				viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
			>
				<g className="animate-color">
					<g className="pole">
						<path
							className="pole-shadow"
							d="M94,77s1.9-1,3.5-.9,3.7.6,3.7.6c1.8.5,5.8,2.1,3.4,2.8s-8.7,0-10.6-2.5Z"
						/>
						<path
							className="pole-dark"
							fill={colors.clothesline.poleDark}
							d="M101.8,1c1.7,28.4-.6,76.8-.6,76.8,0,0-2.2,1-4,1s-3.2-1.8-3.2-1.8c0,0,5.8-33,4.9-76.5l1.3-.5,1.6,1Z"
						/>
						<path
							className="pole-light"
							fill={colors.clothesline.poleLight}
							d="M100.2,0c.6,34.2-1.4,56.2-1.4,56.2l-3,6.9s3.4-28.2,3-62.6l1.3-.5Z"
						/>
					</g>
					<g className="pole">
						<path
							className="pole-shadow"
							d="M0,77s1.9-1,3.5-.9,3.7.6,3.7.6c1.8.5,5.8,2.1,3.4,2.8s-8.7,0-10.6-2.5Z"
						/>
						<path
							className="pole-dark"
							fill={colors.clothesline.poleDark}
							d="M7.8,1c1.7,28.4-.6,76.8-.6,76.8,0,0-1.7,1-4,1s-3.2-1.8-3.2-1.8C0,77,5.8,44,4.9.5l1.3-.5,1.6,1Z"
						/>
						<path
							className="pole-light"
							fill={colors.clothesline.poleLight}
							d="M6.2,0c.6,34.2-1.4,56.2-1.4,56.2l-3,6.9S5.3,35,4.9.5l1.3-.5Z"
						/>
					</g>
					<path
						id={`${id}-1`}
						className="towel-dark"
						fill={colors.clothesline.dark}
						d="M79.4,8.8v1.5s-.5,5.1-.5,5.1c0,0-.3,4.3.5,7.7s1.4,3.1,1.4,3.1l5,1.5.9-.7,4.7,1.6s3.2-2.1,2.9-3.5.2-6.5-.3-10l-1.1-7.3v-1.5c-.1,0-13.5,2.4-13.5,2.4Z"
					/>
					<path
						id={`${id}-2`}
						className="towel-dark"
						fill={colors.clothesline.dark}
						d="M65.7,27s5.3,2.1,5.8,1.5c.9-1.7,1.5,0,2.2-2.8s.3-3.9.4-7.4l.3-5.4-.2-3.3-15.4,1.3s0,.9,0,1.8c0,1.4,0,3.3,0,4,0,1.1-.5,5.7-.5,5.7l.3,2.2,1.7,3.4s2.3-.9,5.4-.9Z"
					/>
					<path
						id={`${id}-3`}
						className="towel-dark"
						fill={colors.clothesline.dark}
						d="M52.3,11.2s.2.7.3,1.3c.5,1.7.2,6.6.5,9.5s-.4,2.8-.8,6.3l.4,4-11-.6-6.5.9s-.4-1.1-.2-2.2.7-4.4.7-4.4l-.5-6.1v-8c-.1,0-.1-1.5-.1-1.5l17.3,1Z"
					/>
					<path
						id={`${id}-4`}
						className="towel-dark"
						fill={colors.clothesline.dark}
						d="M30.7,31.6s.4-4.1.5-5.5c.7-9.2.5-13.5.7-14.9l-.3-1.5-16.8-3.2s0,1.3-.2,2.2.3,6.4-.6,13.8c.2,1,0,2.4,0,2.4l-.2,2.6s.9,1.8,1.5,3.4l7.5-.2,7.9.9Z"
					/>
					<path
						className="clothesline-rope"
						fill={colors.clothesline.rope}
						d="M51.9,12.5c-15.1,0-29.4-2.1-43.7-6.2,0,0-.9-.3-1.8-.3s-1.6.5-1.6.5v-1c0,0,.7-.5,1.6-.5s1.8.4,1.8.4c28.4,8.2,58.1,8.3,90.7,0,0,0,.8-.4,1.5-.4s1.7.4,1.9.4v1s-1-.4-1.9-.4-1.3.3-1.5.4c-16.4,4.2-31.8,6.2-46.9,6.2Z"
					/>

					<g id={`${id}-5`} className="social animate-color">
						<path
							className="towel-light"
							strokeWidth="1"
							fill={colors.clothesline.light}
							d="M79.4,8.8l.3,1.4-.6,10.4s-1.1,5.7-.3,9.1.3,5.4.3,5.4l1.4,4.8,5.2-1.5,7.4-4.1s1.1-5.6.8-6.9,0-6.8-.1-8.8l-.9-10.6v-1.5c-.1,0-13.5,2.4-13.5,2.4Z"
						/>
					</g>
					<Link url={config.linkedin} title="LinkedIn">
						<g
							id={`${id}-6`}
							className="social linkedin animate-color"
						>
							<path
								className="towel-light"
								strokeWidth="1"
								fill={colors.clothesline.light}
								d="M68.8,39.3s5-.7,5.3-1.2c.7-1.6-.1-4.1.5-6.9s-.4-9.3-.3-12.8l.2-7.2-.3-1.6-15.4,1.3s0,.7-.2,1.6c-.1,1.4-.3,3.2-.3,3.9,0,1.1.7,8.8.7,8.8l-.8-.5.7,15.1s9.4,1.1,9.8-.4Z"
							/>
							<g
								transform="translate(-20 2)"
								className="towel-icon"
								fill={colors.clothesline.icon}
							>
								<path d="M89.5,18.1h-6c-.8,0-1.5.7-1.5,1.5v6c0,.8.7,1.5,1.5,1.5h6c.8,0,1.5-.7,1.5-1.5v-6c0-.8-.7-1.5-1.5-1.5ZM90,25.6c0,.3-.2.5-.5.5h-6c-.3,0-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5h6c.3,0,.5.2.5.5v6Z" />
								<path d="M84.5,21.6c-.3,0-.5.2-.5.5v2.5c0,.3.2.5.5.5s.5-.2.5-.5v-2.5c0-.3-.2-.5-.5-.5Z" />
								<path d="M84.5,20.1c-.3,0-.5.2-.5.5s.2.5.5.5.5-.2.5-.5h0c0-.3-.2-.5-.5-.5Z" />
								<path d="M87.5,21.6c-.2,0-.4,0-.6.2,0,0-.2-.2-.4-.2-.3,0-.5.2-.5.5v2.5c0,.3.2.5.5.5s.5-.2.5-.5v-1.5c0-.3.2-.5.5-.5s.5.2.5.5v1.5c0,.3.2.5.5.5s.5-.2.5-.5v-1.5c0-.8-.7-1.5-1.5-1.5Z" />
							</g>
						</g>
					</Link>
					<Link url={config.github} title="Github">
						<g
							id={`${id}-7`}
							className="social github animate-color"
						>
							<path
								className="towel-light"
								strokeWidth="1"
								fill={colors.clothesline.light}
								d="M52.3,11.2s-.2.9,0,1.5c.5,1.7,0,6.4.3,9.3s-.2,5.3-.6,8.8l-.2,6.8h-10.7c0,0-6-1.6-6-1.6,0,0,.2-3.9.3-5s-.1-5.9-.1-5.9l-.9.4.4-5.1v-8.6s.3-1.5.3-1.5l17.3,1Z"
							/>
							<path
								transform="translate(20 2)"
								className="towel-icon"
								fill={colors.clothesline.icon}
								d="M25.7,27.5c-.3,0-.5-.2-.5-.5v-1.9c0-.3,0-.3-.1-.5s-.2-.3-.1-.5c0-.2.2-.3.4-.3,1.2-.1,2.3-.5,2.3-2.5,0-.5-.2-.9-.5-1.3-.1-.1-.2-.3-.1-.5.1-.3.1-.6,0-.9-.2,0-.6.2-1.1.5s-.3.1-.4,0c-.9-.2-1.9-.2-2.8,0-.1,0-.3,0-.4,0-.5-.4-.9-.5-1.1-.5,0,.3,0,.6,0,.9,0,.2,0,.4-.1.5-.3.3-.5.8-.5,1.3,0,2,1.1,2.4,2.3,2.5.2,0,.4.1.4.3,0,.2,0,.4-.1.5s-.2.2-.1.6c0,0,0,0,0,0v.7h0v1c0,.3-.2.5-.5.5s-.5-.2-.5-.5v-.4c-1.3.2-1.9-.7-2.2-1.2-.1-.2-.3-.4-.4-.5-.3,0-.4-.4-.3-.6,0-.3.4-.4.6-.3.5.1.7.5,1,.9.3.5.6.9,1.4.7v-.3c0-.2,0-.4,0-.6-1-.2-2.5-.9-2.5-3.4,0-.6.2-1.2.6-1.7-.1-.6,0-1.2.2-1.7,0-.1.2-.2.3-.3.2,0,.8-.1,2,.6,1-.2,2-.2,2.9,0,1.2-.7,1.8-.6,2-.6.1,0,.3.1.3.3.2.5.3,1.1.2,1.7.4.5.6,1.1.6,1.7,0,2.5-1.5,3.2-2.5,3.4,0,.1,0,.3,0,.4v1.9c0,.3-.2.5-.5.5Z"
							/>
						</g>
					</Link>
					<g id={`${id}-8`} className="social animate-color">
						<path
							className="towel-light"
							strokeWidth="1"
							fill={colors.clothesline.light}
							d="M30.4,40s1.6-12.2,1.5-13.6c-.2-8.4-1-14.6-.7-15.2l.3-1.5-16.8-3.2s-.3.7-.7,1.3-.7,6.1.9,14.6c.2,1,.8,1.5.8,1.5l2-.7-2.2,1.6s-1,6.6-.3,8.2l-.5,8.3,15.7-1.2Z"
						/>
					</g>
				</g>
			</svg>
		</ClotheslineRoot>
	);
};
