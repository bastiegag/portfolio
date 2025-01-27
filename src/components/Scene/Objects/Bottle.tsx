import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/system';

import { Link } from 'components';
import { useParallax } from 'hooks';
import config from '@/config';

const CustomSvg = styled('g', {
	name: 'bottle',
	slot: 'Root',
})(({ theme }) => ({
	'.action': {
		transition: 'all 0.3s ease-out !important',
	},
	'&:hover .action': {
		transform: 'translateY(-4px)',
	},
	'.bottle-ripple': {
		mixBlend: 'overlay',
		opacity: 0.75,
		...theme.applyStyles('dark', {
			opacity: 0.25,
		}),
	},
	'.bottle-glass': {
		opacity: 0.9,
	},
}));

export interface BottleProps {
	params: {
		x: number;
		y: number;
		offset: {
			x: number;
			y: number;
		};
	};
}

export const Bottle = ({ params }: BottleProps) => {
	gsap.registerPlugin(useGSAP);

	const name = 'bottle';
	const id = React.useId();
	const colors = useTheme().palette.scene;
	const multiplier = { x: 30, y: 15 };

	useGSAP(() => {
		const randDur = gsap.utils.random(1.5, 2.5, true);
		const randY = gsap.utils.random(-2, 2, true);

		let newDur = randDur();
		let newY = randY();

		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
			defaults: {
				ease: 'power1.inOut',
				duration: 1.5,
			},
			onRepeat: () => {
				newDur = randDur();
				newY = randY();
			},
		});

		timeline.to('.bottle-water-level', {
			duration: () => newDur,
			y: () => newY,
		});
	});

	useParallax(
		`#${name}`,
		{ x: params.x, y: params.y },
		params.offset,
		multiplier
	);

	return (
		<React.Fragment>
			<Link url={`mailto:${config.mail}`} title="Contact" tab={false}>
				<CustomSvg
					id={name}
					className={`${name} link animate-all`}
					transform={`translate(${params.x},${params.y})`}
					strokeWidth="0"
				>
					<defs>
						<clipPath
							id={`${name}-top-mask`}
							className={`${name}-water-level animate`}
						>
							<path d="M19.1,30s-3.1,2.6-9.6,2.6-12.4-2.6-12.4-2.6v23h22s0-23,0-23Z" />
						</clipPath>
						<clipPath
							id={`${name}-bottom-mask`}
							className={`${name}-water-level animate`}
						>
							<path d="M-3-19V28.6s5.9,4,12.4,4,9.6-4,9.6-4V-19H-3Z" />
						</clipPath>
					</defs>
					<filter id={`${name}-blur`}>
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="0.35"
							result="blurred"
						/>
					</filter>
					<g
						id={`${id}-bottom`}
						clipPath={`url(#${name}-top-mask)`}
						filter="url(#waterReflection)"
						opacity="0.35"
					>
						<g className="action animate-all">
							<polygon
								className="main"
								fill={colors.bottle.main}
								points="13 16.7 13.4 13.3 14.1 13.5 15.6 10.7 14.2 9 9.9 8 8.1 8.5 8.2 11.8 9.4 12.2 8.5 15.7 2 18 0 47.7 2.8 49.4 6.8 49.9 10.1 49.2 18.3 20.9 13 16.7"
							/>
							<path
								className="dark"
								fill={colors.bottle.dark}
								d="M11,12.6l-1.2,4.2-3.4,4.1-4,28.1-1.6-1,2.3-29.3,5.8-2.7,1.2-3.7,1,.3ZM8.7,8.9v3c-.1,0,.7.2.7.2l.5-2.5-1.2-.8Z"
							/>
							<polygon
								className="light"
								fill={colors.bottle.light}
								points="12.2 18.3 14.7 19.9 15.1 21.5 11.4 21.3 12.2 18.3"
							/>
						</g>
					</g>
					<g
						className={`${name}-water-level animate`}
						filter="url(#waterRipple)"
					>
						<path
							fill={colors.white}
							className={`${name}-ripple animate`}
							d="M27.2,29.6c3.2,2.2-28.8,7.5-36,2.4-7.2-5.1,30-6.4,36-2.4Z"
						/>
					</g>
					<g id={`${id}-top`} clipPath={`url(#${name}-bottom-mask)`}>
						<g className="action">
							<g className={`${name}-glass`}>
								<polygon
									className="main"
									strokeWidth="1"
									fill={colors.bottle.main}
									points="13 16.7 13.4 13.3 14.1 13.5 15.6 10.7 14.2 9 9.9 8 8.1 8.5 8.2 11.8 9.4 12.2 8.5 15.7 2 18 0 47.7 2.8 49.4 6.8 49.9 10.1 49.2 18.3 20.9 13 16.7"
								/>
								<path
									className="dark"
									fill={colors.bottle.dark}
									d="M11,12.6l-1.2,4.2-3.4,4.1-4,28.1-1.6-1,2.3-29.3,5.8-2.7,1.2-3.7,1,.3ZM8.7,8.9v3c-.1,0,.7.2.7.2l.5-2.5-1.2-.8Z"
								/>
								<polygon
									className="light"
									filter={`url(#${name}-blur)`}
									fill={colors.bottle.light}
									points="12.2 18.3 14.7 19.9 15.1 21.5 11.4 21.3 12.2 18.3"
								/>
							</g>
							<g className="message">
								<polygon
									fill={colors.towel.light}
									strokeWidth="1"
									points="10 9 10.6 .9 14.8 0 17.8 3 14.3 10.4 10 9"
								/>
								<polygon
									fill={colors.towel.dark}
									points="14.3 1.3 11.8 1.9 14.4 3.7 13.1 10 16.2 2.7 14.3 1.3"
								/>
							</g>
						</g>
					</g>
				</CustomSvg>
			</Link>
		</React.Fragment>
	);
};
