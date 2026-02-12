import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useParallax } from '@shared/hooks/parallax/useParallax';
import { useSettings } from '@features/settings';
import { Link } from '@features/navigation';
import config from '@shared/data/config';

const WIDTH = 60;
const HEIGHT = 90;

export interface BottleProps {
	x: number;
	y: number;
	modifier: { x: number; y: number };
	scale: number;
}

const BottleRoot = styled('g', {
	name: 'Bottle',
	slot: 'root',
})<{ 'data-night': boolean }>(({ 'data-night': isNight }) => ({
	'.action': {
		transition: 'all 0.3s ease-out !important',
	},
	'&:hover .action': {
		transform: 'translateY(-4px)',
	},
	'.bottle-ripple': {
		mixBlend: 'overlay',
		opacity: 0.75,
		...(isNight && {
			opacity: 0.25,
		}),
	},
	'.bottle-white': {
		mixBlend: 'overlay',
		opacity: 0.75,
		...(isNight && {
			opacity: 0.1,
		}),
	},
	'.bottle-glass': {
		opacity: 0.9,
	},
}));

export const Bottle = ({ x, y, modifier, scale }: BottleProps) => {
	const { t } = useTranslation();
	const id = CSS.escape(useId());
	const { settings } = useSettings();
	const colors = useTheme().vars.palette;

	useParallax(`#${id}`, x, y, modifier);

	useGSAP(() => {
		const randomDuration = gsap.utils.random(1.5, 2.5, true);
		const randomY = gsap.utils.random(-2, 2, true);

		let duration = randomDuration();
		let yOffset = randomY();

		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
			defaults: {
				ease: 'power1.inOut',
				duration: 1.5,
			},
			onRepeat: () => {
				duration = randomDuration();
				yOffset = randomY();
			},
		});

		timeline.to(`#${id} .${id}-water-level`, {
			duration: () => duration,
			y: () => yOffset,
		});
	}, [id]);

	return (
		<BottleRoot
			id={id}
			className="Bottle-root link animate-all"
			data-night={settings.time === 'night'}
			transform={`translate(${x},${y})`}
			strokeWidth="0"
		>
			<svg
				id={`${id}-skew`}
				width={scale ? WIDTH * scale : WIDTH}
				height={scale ? HEIGHT * scale : HEIGHT}
				viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
			>
				<Link
					url={`mailto:${config.mail}`}
					title={t('menu.contact')}
					tab={false}
				>
					<defs>
						<clipPath
							id={`${id}-top-mask`}
							className={`${id}-water-level animate`}
						>
							<path d="M11.1,48.9c4.1,4.1,9.9,6,19,6s15.2-2.8,18.4-6h11.5s0,41.1,0,41.1H0v-41.1h11.1Z" />
						</clipPath>
						<clipPath
							id={`${id}-bottom-mask`}
							className={`${id}-water-level animate`}
						>
							<path d="M0,0v48.9h11.1c4.1,4.1,9.9,6,19,6s15.2-2.8,18.4-6h11.5V0H0Z" />
						</clipPath>
					</defs>
					<filter id={`${id}-blur`}>
						<feGaussianBlur
							in="SourceGraphic"
							stdDeviation="0.35"
							result="blurred"
						/>
					</filter>
					<rect fill="transparent" width="60" height="90" />
					<g
						id={`${id}-bottom`}
						clipPath={`url(#${id}-top-mask)`}
						filter="url(#water-filter)"
						opacity="0.35"
					>
						<g className="action animate-all">
							<path
								className="bottle-light"
								fill={colors.bottle.light}
								d="M35,32.4l1.2-11.5,2.1.2.7-7-11.4-1.2-.7,7,2.1.2-1.2,11.5s-7.9,1.3-8.5,7.3-3.8,40.7-.8,43.6c0,0,.4,1.5,7.4,2.2,7,.7,7.7-.6,7.7-.6,3.6-2.2,7.7-36.7,8.4-42.8s-6.8-9-6.8-9h0Z"
							/>
							<path
								className="bottle-main"
								fill={colors.bottle.main}
								d="M35,32.4l1.2-11.5,2.1.2.7-6.7-9.4-1-.7,6.7,1.9.2-1.2,11.5s-4.1,3.4-5.1,9.4c-1.8,10-3.6,25.8-2.5,34.4,1.1,8.7,2.8,8.3,5.3,8.6s4.3.3,5.4-.2c4.1-2.1,7.6-36.6,8.3-42.8s-5.8-9-5.8-9h-.1Z"
							/>
							<polygon
								className="bottle-dark"
								fill={colors.bottle.dark}
								points="28.9 20 36.4 20.8 36.1 22.8 28.7 22 28.9 20"
							/>
						</g>
					</g>
					<g id={`${id}-top`} clipPath={`url(#${id}-bottom-mask)`}>
						<g className="action">
							<polygon
								className="cap-dark"
								fill={colors.bottle.capDark}
								points="29.4 16.1 29.4 5.6 39.2 6.7 36.7 17.1 29.4 16.1"
							/>
							<ellipse
								className="cap-light"
								fill={colors.bottle.capLight}
								cx="34.2"
								cy="6"
								rx=".8"
								ry="5"
								transform="translate(24.6 39.4) rotate(-83.9)"
							/>
							<path
								className="bottle-light"
								fill={colors.bottle.light}
								d="M35,32.4l1.2-11.5,2.1.2.7-7-11.4-1.2-.7,7,2.1.2-1.2,11.5s-7.9,1.3-8.5,7.3-3.8,40.7-.8,43.6c0,0,.4,1.5,7.4,2.2,7,.7,7.7-.6,7.7-.6,3.6-2.2,7.7-36.7,8.4-42.8s-6.8-9-6.8-9h0Z"
							/>
							<path
								className="bottle-main"
								fill={colors.bottle.main}
								d="M35,32.4l1.2-11.5,2.1.2.7-6.7-9.4-1-.7,6.7,1.9.2-1.2,11.5s-4.1,3.4-5.1,9.4c-1.8,10-3.6,25.8-2.5,34.4,1.1,8.7,2.8,8.3,5.3,8.6s4.3.3,5.4-.2c4.1-2.1,7.6-36.6,8.3-42.8s-5.8-9-5.8-9h-.1Z"
							/>
							<path
								className="bottle-white"
								fill={colors.base.white}
								d="M20.4,38.7l4.5.5s1.1-4.3,5.2-7.4c-3.5-.4-9.2,2.3-9.7,6.9Z"
							/>
							<polygon
								className="bottle-dark"
								fill={colors.bottle.dark}
								points="28.9 20 36.4 20.8 36.1 22.8 28.7 22 28.9 20"
							/>
							<path
								fill="transparent"
								strokeWidth="1"
								d="M35,32.4l1.2-11.5,2.1.2.7-7-11.4-1.2-.7,7,2.1.2-1.2,11.5s-7.9,1.3-8.5,7.3-3.8,40.7-.8,43.6c0,0,.4,1.5,7.4,2.2,7,.7,7.7-.6,7.7-.6,3.6-2.2,7.7-36.7,8.4-42.8s-6.8-9-6.8-9h0Z"
							/>
						</g>
					</g>
				</Link>
			</svg>
		</BottleRoot>
	);
};
