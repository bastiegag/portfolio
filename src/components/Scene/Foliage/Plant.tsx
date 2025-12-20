import { JSX, useId, useMemo } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/material';

import { PLANT_PATHS } from './plantPaths';

export interface PlantProps {
	origin: string;
	variant: number;
	x: number;
	y: number;
}

const PlantRoot = styled('g', {
	name: 'Plant',
	slot: 'root',
})(() => ({
	'.black, .white': {
		opacity: 0.25,
	},
	'.black': {
		mixBlendMode: 'multiply',
	},
	'.white': {
		mixBlendMode: 'overlay',
	},
}));

export const Plant = ({ origin, variant, x, y }: PlantProps): JSX.Element => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline
			.to(`#${id}`, {
				duration: gsap.utils.random(1, 2, true),
				rotation: gsap.utils.random(-2, 2, true),
				skewX: gsap.utils.random(-4, 4, true),
				ease: 'sine.inOut',
				transformOrigin: origin,
			})
			.yoyo(true);

		const variantPaths = PLANT_PATHS[variant];
		if (variantPaths) {
			variantPaths.forEach((pathGroup, groupIndex) => {
				const leafTimeline = gsap.timeline({
					repeat: -1,
					repeatRefresh: true,
				});

				leafTimeline
					.to(`#${id}${groupIndex}`, {
						duration: gsap.utils.random(1, 1.5, true),
						rotation: gsap.utils.random(-3, 3, true),
						ease: 'sine.inOut',
						svgOrigin: origin,
					})
					.yoyo(true);
			});
		}
	}, [id, origin, variant]);

	const plantPaths = useMemo(() => {
		const variantPaths = PLANT_PATHS[variant];
		if (!variantPaths) return null;

		return (
			<>
				{variantPaths.map((pathGroup, groupIndex) => (
					<g id={`${id}${groupIndex}`} key={groupIndex}>
						{pathGroup.map((path, index) => {
							const PathElement =
								path.type === 'polygon' ? 'polygon' : 'path';

							return (
								<PathElement
									key={index}
									className={path.color}
									fill={
										colors.foliage[
											path.color as unknown as keyof typeof colors.foliage
										]
									}
									{...(PathElement === 'polygon'
										? { points: path.d }
										: { d: path.d })}
								/>
							);
						})}
					</g>
				))}
			</>
		);
	}, [variant, colors]);

	return (
		<PlantRoot
			id={id}
			className="Plant-root animate-color"
			transform={`translate(${x},${y})`}
		>
			<g id={`${id}-skew`} className="animate-color">
				{plantPaths}
			</g>
		</PlantRoot>
	);
};
