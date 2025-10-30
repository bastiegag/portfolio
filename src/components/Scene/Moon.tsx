import React from 'react';
import { styled, useTheme } from '@mui/system';

import { useParallax } from 'hooks';
import { SceneComponentProps } from 'components/Scene';

const width = 40;
const height = 40;

const CustomSvg = styled('g', {
	name: 'moon',
	slot: 'Root',
})(({ theme }) => ({}));

export const Moon = ({ params }: SceneComponentProps) => {
	const id = React.useId();
	const colors = useTheme().palette.scene;

	useParallax(`#${CSS.escape(id)}`, params.x, params.y, params.m);

	return (
		<CustomSvg
			id={id}
			className="moon animate-all"
			transform={`translate(${params.x},${params.y})`}
			strokeWidth="0"
		>
			<circle
				cx={width / 2}
				cy={height / 2}
				r={width / 2}
				fill={colors.white}
			/>
		</CustomSvg>
	);
};
