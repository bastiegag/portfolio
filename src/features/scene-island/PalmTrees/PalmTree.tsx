import { useId, useMemo } from 'react';
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

export const PalmTree = ({ origins, variant, x, y }: PalmTreeProps) => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatRefresh: true,
		});

		timeline
			.to(`#${id}`, {
				duration: gsap.utils.random(1.5, 2.5, true),
				rotation: gsap.utils.random(-1, 1, true),
				ease: 'sine.inOut',
				transformOrigin: origins[0],
			})
			.yoyo(true);

		const variantPaths = PALM_TREE_PATHS[variant];
		if (variantPaths) {
			variantPaths.forEach((pathGroup, groupIndex) => {
				if (pathGroup.type === 'leaf') {
					const leafTimeline = gsap.timeline({
						repeat: -1,
						repeatRefresh: true,
					});

					leafTimeline
						.to(`#${id}${groupIndex}`, {
							duration: gsap.utils.random(1, 1.5, true),
							rotation: gsap.utils.random(-3, 3, true),
							ease: 'sine.inOut',
							svgOrigin: origins[1],
						})
						.yoyo(true);
				}
			});
		}
	}, [id, origins, variant]);

	const palmTreePaths = useMemo(() => {
		const variantPaths = PALM_TREE_PATHS[variant];
		if (!variantPaths) return null;

		return (
			<>
				{variantPaths.map((pathGroup, groupIndex) => (
					<g
						{...(pathGroup.type === 'leaf' && {
							id: `${id}${groupIndex}`,
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
