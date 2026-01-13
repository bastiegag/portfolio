import { useId, useMemo } from 'react';
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

const StyledPlantGroup = styled('g', {
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

export const Plant = ({ origin, variant, x, y }: PlantProps) => {
	const plantId = CSS.escape(useId());
	const palette = useTheme().vars.palette;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});
		timeline
			.to(`#${plantId}`, {
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
					.to(`#${plantId}${groupIndex}`, {
						duration: gsap.utils.random(1, 1.5, true),
						rotation: gsap.utils.random(-3, 3, true),
						ease: 'sine.inOut',
						svgOrigin: origin,
					})
					.yoyo(true);
			});
		}
	}, [plantId, origin, variant]);

	const plantElements = useMemo(() => {
		const variantPaths = PLANT_PATHS[variant];
		if (!variantPaths) return null;
		return (
			<>
				{variantPaths.map((pathGroup, groupIndex) => (
					<g id={`${plantId}${groupIndex}`} key={groupIndex}>
						{pathGroup.map((path, index) => {
							const ElementType =
								path.type === 'polygon' ? 'polygon' : 'path';
							return (
								<ElementType
									key={index}
									className={path.color}
									fill={
										palette.foliage[
											path.color as unknown as keyof typeof palette.foliage
										]
									}
									{...(ElementType === 'polygon'
										? { points: path.d }
										: { d: path.d })}
								/>
							);
						})}
					</g>
				))}
			</>
		);
	}, [plantId, variant, palette]);

	return (
		<StyledPlantGroup
			id={plantId}
			className="Plant-root animate-color"
			transform={`translate(${x},${y})`}
		>
			<g id={`${plantId}-skew`} className="animate-color">
				{plantElements}
			</g>
		</StyledPlantGroup>
	);
};
