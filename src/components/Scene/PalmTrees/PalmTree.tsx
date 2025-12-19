import { JSX, useId, useMemo } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/material';

import { PALM_TREE_PATHS } from './palmTreePaths';

export interface PalmTreeProps {
	origins: string[];
	variant: number;
	x: number;
	y: number;
}

const PalmTreeRoot = styled('g', {
	name: 'PalmTree',
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

export const PalmTree = ({
	origins,
	variant,
	x,
	y,
}: PalmTreeProps): JSX.Element => {
	const id = useId();
	const colors = useTheme().vars.palette;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline.to(`#${id}`, {
			duration: gsap.utils.random(2, 3, true),
			rotation: gsap.utils.random(-1, 1, true),
			ease: gsap.utils.random(['sine.inOut', 'sine.in', 'sine.out']),
			transformOrigin: origins[0],
		});

		for (let i = 1; i <= 8; i++) {
			const leafTimeline = gsap.timeline({
				repeat: -1,
				repeatRefresh: true,
			});

			leafTimeline.to(`#${id}-${i}`, {
				duration: gsap.utils.random(1, 3, true),
				rotation: gsap.utils.random(-5, 5, true),
				ease: gsap.utils.random(['sine.inOut', 'sine.in', 'sine.out']),
				svgOrigin: origins[1],
			});
		}
	}, [id, origins]);

	const palmTreePaths = useMemo(() => {
		const variantPaths = PALM_TREE_PATHS[variant];
		if (!variantPaths) return null;

		return (
			<>
				{variantPaths.map((pathGroup, groupIndex) => (
					<g
						{...(pathGroup.type === 'leaf' && {
							id: `${id}-${groupIndex}`,
						})}
						key={groupIndex}
					>
						{pathGroup.paths.map((path, index) => {
							const PathElement =
								path.type === 'polygon' ? 'polygon' : 'path';

							return (
								<PathElement
									key={index}
									className={path.color}
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
					</g>
				))}
			</>
		);
	}, [variant, colors, id]);

	return (
		<PalmTreeRoot
			id={id}
			className="PalmTree-root animate-color"
			transform={`translate(${x},${y})`}
		>
			{palmTreePaths}
		</PalmTreeRoot>
	);
};
