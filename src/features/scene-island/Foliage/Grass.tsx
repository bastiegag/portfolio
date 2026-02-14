import { useId, useMemo } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/material';
import { GRASS_PATHS } from './grassPaths';
import type { PositionedVariant } from '@shared/types';

export interface GrassProps extends PositionedVariant {
	origin: string;
}

const StyledGrassGroup = styled('g', {
	name: 'Grass',
	slot: 'root',
})();

export const Grass = ({ origin, variant, x, y }: GrassProps) => {
	const grassId = CSS.escape(useId());
	const palette = useTheme().vars.palette;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});
		timeline
			.to(`#${grassId}`, {
				duration: gsap.utils.random(1, 1.5, true),
				rotation: gsap.utils.random(-1, 1, true),
				skewX: gsap.utils.random(-15, 15, true),
				ease: 'sine.inOut',
				transformOrigin: origin,
			})
			.yoyo(true);
	}, [grassId, origin]);

	const grassElements = useMemo(() => {
		const variantPaths = GRASS_PATHS[variant];
		if (!variantPaths) return null;
		return (
			<>
				{variantPaths.map((path, idx) => {
					const ElementType =
						path.type === 'polygon' ? 'polygon' : 'path';
					return (
						<ElementType
							key={idx}
							fill={
								palette.foliage[
									path.color as keyof typeof palette.foliage
								]
							}
							{...(ElementType === 'polygon'
								? { points: path.d }
								: { d: path.d })}
						/>
					);
				})}
			</>
		);
	}, [variant, palette]);

	return (
		<StyledGrassGroup
			id={grassId}
			className="Grass-root animate-color"
			transform={`translate(${x},${y})`}
		>
			{grassElements}
		</StyledGrassGroup>
	);
};
