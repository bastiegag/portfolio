import { JSX, useId, useMemo } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/material';

import { GRASS_PATHS } from './grassPaths';

export interface GrassProps {
	origin: string;
	variant: number;
	x: number;
	y: number;
}

const GrassRoot = styled('g', {
	name: 'Grass',
	slot: 'root',
})();

export const Grass = ({ origin, variant, x, y }: GrassProps): JSX.Element => {
	const id = useId();
	const colors = useTheme().vars.palette;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to(`#${id}`, {
			duration: gsap.utils.random(1, 2, true),
			rotation: gsap.utils.random(-1, 1, true),
			skewX: gsap.utils.random(-15, 15, true),
			ease: gsap.utils.random(['sine.inOut', 'sine.in', 'sine.out']),
			transformOrigin: origin,
		});
	}, [id, origin]);

	const grassPaths = useMemo(() => {
		const variantPaths = GRASS_PATHS[variant];
		if (!variantPaths) return null;

		return (
			<>
				{variantPaths.map((path, index) => {
					const PathElement =
						path.type === 'polygon' ? 'polygon' : 'path';

					return (
						<PathElement
							key={index}
							fill={
								colors.foliage[
									path.color as keyof typeof colors.foliage
								]
							}
							{...(PathElement === 'polygon'
								? { points: path.d }
								: { d: path.d })}
						/>
					);
				})}
			</>
		);
	}, [variant, colors]);

	return (
		<GrassRoot
			id={id}
			className="Grass-root animate-color"
			transform={`translate(${x},${y})`}
		>
			{grassPaths}
		</GrassRoot>
	);
};
