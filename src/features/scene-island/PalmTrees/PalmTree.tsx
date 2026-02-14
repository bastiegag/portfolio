import { useId, useMemo, memo } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/material';

import { PALM_TREE_PATHS } from './palmTreePaths';
import { useLazyLoad } from '@shared/hooks/intersection';
import type { PositionedVariant } from '@shared/types';

export interface PalmTreeProps extends PositionedVariant {
	origins: string[];
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

const PalmTreeComponent = ({ origins, variant, x, y }: PalmTreeProps) => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;
	const [lazyRef, shouldRender] = useLazyLoad({ rootMargin: '400px' });

	// Compute paths before conditional render (hooks must be unconditional)
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

	useGSAP(() => {
		if (!shouldRender) return;

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
	}, [id, origins, variant, shouldRender]);

	// Lightweight placeholder while loading
	if (!shouldRender) {
		return (
			<PalmTreeRoot
				ref={lazyRef}
				id={id}
				transform={`translate(${x},${y})`}
				aria-label="Palm tree loading"
			/>
		);
	}

	return (
		<PalmTreeRoot
			ref={lazyRef}
			id={id}
			className="PalmTree-root animate-color"
			transform={`translate(${x},${y})`}
		>
			{palmTreePaths}
		</PalmTreeRoot>
	);
};

// Custom comparison for origins array
const arePropsEqual = (prev: PalmTreeProps, next: PalmTreeProps) => {
	return (
		prev.variant === next.variant &&
		prev.x === next.x &&
		prev.y === next.y &&
		prev.origins.length === next.origins.length &&
		prev.origins.every((origin, i) => origin === next.origins[i])
	);
};

export const PalmTree = memo(PalmTreeComponent, arePropsEqual);
