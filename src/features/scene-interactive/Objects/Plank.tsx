import { useId } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Link } from '@features/navigation';
import { useParallax } from '@shared/hooks/parallax/useParallax';
import { useSettings } from '@features/settings';

const WIDTH = 82.4;
const HEIGHT = 10.2;

export interface PlanksProps {
	x: number;
	y: number;
	modifier: { x: number; y: number };
	scale: number;
}

const PlanksRoot = styled('g', {
	name: 'Planks',
	slot: 'root',
})(() => ({}));

export const Plank = ({ x, y, modifier, scale }: PlanksProps) => {
	const { t } = useTranslation();
	const id = CSS.escape(useId());
	const { settings } = useSettings();
	const colors = useTheme().vars.palette;

	useParallax(`#${id}`, x, y, modifier);

	useGSAP(() => {
		const randomDuration = gsap.utils.random(1.5, 2, true);
		const randomY = gsap.utils.random(0.1, 1, true);

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
		<Link to="/projects" title={t('menu.projects')} tab={false}>
			<PlanksRoot
				id={id}
				className="Planks-root link animate-all"
				data-night={settings.time === 'night'}
				transform={`translate(${x},${y})`}
				strokeWidth="0"
			>
				<defs>
					<clipPath
						id={`${id}-mask`}
						className={`${id}-water-level animate`}
					>
						<path d="M24.76,1.5c-.2,0-24.76,1.4-24.76,1.4l.76,1.82L50.76,1.7l1.15-.24,31.15.39.46-1.85h-31.46s-27.1,1.5-27.3,1.5Z" />
					</clipPath>
				</defs>
				<svg
					width={scale ? WIDTH * scale : WIDTH}
					height={scale ? HEIGHT * scale : HEIGHT}
					viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
				>
					<polygon
						className="light"
						fill={colors.wood.light}
						points="11 1.5 0 8.9 .8 10.2 50.2 7.3 51.4 7 81.6 7.4 82.4 6 80 0 11 1.5"
					/>
					<path
						className="main"
						fill={colors.wood.main}
						d="M80.4.9c-3.4,1-19.9,6.9-29.2.7,0,0-6.6-.3-13.4-.7l-13.1.3c1.5,1,2.1,2.7-6.6,4.5C6.3,8.1,7.9,3.6,7.9,3.6L.1,8.9l12.1-.5s12-4.4,28.5-5.9c12-1.1,9.7,1.9,15.5,2.3s14.2.8,25-2.1l-.7-1.8h-.1Z"
					/>
					<path
						className="dark"
						fill={colors.wood.dark}
						d="M24.1,7.5c-.2,0-24.1,1.4-24.1,1.4l.7,1.3,49.4-2.9,1.1-.3,30.3.4.9-1.4h-31s-27.1,1.5-27.3,1.5Z"
					/>
					<path
						className="darker"
						fill={colors.wood.darker}
						d="M28.3,8.6l.9-1.4,5.8-3.8-7.5,3.9.8,1.3ZM42.1,7.7l-.3-1.2,1.2-2.8-2.4,2.9,1.5,1.1Z"
					/>
					<path
						className="water-level"
						clipPath={`url(#${id}-mask)`}
						fill={colors.water.light}
						transform="translate(0,6)"
						fillOpacity={0.75}
						d="M24.76,1.5c-.2,0-24.76,1.4-24.76,1.4l.76,1.82L50.76,1.7l1.15-.24,31.15.39.46-1.85h-31.46s-27.1,1.5-27.3,1.5Z"
					/>
					<polygon
						fill="transparent"
						strokeWidth="0.5"
						points="11 1.5 0 8.9 .8 10.2 50.2 7.3 51.4 7 81.6 7.4 82.4 6 80 0 11 1.5"
					/>
				</svg>
			</PlanksRoot>
		</Link>
	);
};
