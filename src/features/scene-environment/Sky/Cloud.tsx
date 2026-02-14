import { useId, useMemo, memo } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { styled, useTheme } from '@mui/material';

import { CLOUD_PATHS } from './cloudPaths';
import config from '@shared/data/config';

export interface CloudProps {
	distance?: number;
	duration: number;
	repeatDelay: number;
	start: number;
	variant: number;
	width: number;
	y: number;
}

const CloudRoot = styled('g', {
	name: 'Cloud',
	slot: 'root',
})();

const CloudComponent = ({
	distance,
	duration,
	repeatDelay,
	start,
	variant,
	width,
	y,
}: CloudProps) => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;

	useGSAP(() => {
		const timeline = gsap.timeline({
			repeat: -1,
			repeatDelay: repeatDelay,
		});

		timeline.fromTo(
			`#${id}`,
			{ x: width * -1 },
			{
				x: config.sceneWidth,
				duration: duration * config.cloudsSpeed,
				ease: 'none',
			},
		);

		timeline.seek(start * config.cloudsSpeed);
	}, [id, width, duration, repeatDelay, start]);

	const cloudPaths = useMemo(() => {
		const variantPaths = CLOUD_PATHS[variant];
		if (!variantPaths) return null;

		const distanceOpacity = distance ? `${distance}%` : '0';

		return (
			<>
				{variantPaths.light.map((path, index) => (
					<path key={index} fill={colors.cloud.light} d={path} />
				))}
				{variantPaths.dark?.map((path, index) => (
					<path key={index} fill={colors.cloud.dark} d={path} />
				))}
				{variantPaths.overlay.map((path, index) => (
					<path
						key={index}
						fill={colors.sky.main}
						fillOpacity={distanceOpacity}
						d={path}
					/>
				))}
			</>
		);
	}, [variant, distance, colors]);

	return (
		<CloudRoot
			id={id}
			className="Cloud-root animate"
			transform={`translate(0,${y})`}
		>
			{cloudPaths}
		</CloudRoot>
	);
};

export const Cloud = memo(CloudComponent);
