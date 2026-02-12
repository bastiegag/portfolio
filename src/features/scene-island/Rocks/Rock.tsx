import { useId, useMemo } from 'react';
import { styled, useTheme } from '@mui/material';

import { ROCK_PATHS } from './rockPaths';

export interface RockProps {
	variant: number;
	x: number;
	y: number;
	distance?: number;
}

const RockRoot = styled('g', {
	name: 'Rock',
	slot: 'root',
})();

export const Rock = ({ variant, x, y, distance }: RockProps) => {
	const id = useId();
	const colors = useTheme().vars.palette;

	const rockPaths = useMemo(() => {
		const variantPaths = ROCK_PATHS[variant];
		if (!variantPaths) return null;

		const distanceOpacity = distance ? `${distance}%` : '0';

		return (
			<>
				{variantPaths.map((path, index) => {
					const PathElement =
						path.type === 'polygon' ? 'polygon' : 'path';
					const fillOpacity =
						path.color === 'fade' ? distanceOpacity : undefined;

					return (
						<PathElement
							key={index}
							fill={
								colors.rock[
									path.color as keyof typeof colors.rock
								]
							}
							fillOpacity={fillOpacity}
							{...(PathElement === 'polygon'
								? { points: path.d }
								: { d: path.d })}
						/>
					);
				})}
			</>
		);
	}, [variant, distance, colors]);

	return (
		<RockRoot
			id={id}
			className="Rock-root animate-color"
			transform={`translate(${x},${y})`}
		>
			{rockPaths}
		</RockRoot>
	);
};
