import { useId } from 'react';
import { styled } from '@mui/material';

import { Link } from 'components';
import { useParallax, useSettings } from 'hooks';

const WIDTH = 39;
const HEIGHT = 25;

export interface PlanksProps {
	x: number;
	y: number;
	modifier: { x: number; y: number };
}

const PlanksRoot = styled('g', {
	name: 'Planks',
	slot: 'root',
})(() => ({}));

export const Planks = ({ x, y, modifier }: PlanksProps) => {
	const id = CSS.escape(useId());
	const { settings } = useSettings();
	//const colors = useTheme().vars.palette;

	useParallax(`#${id}`, x, y, modifier);
	return (
		<Link to="/projects" title="Projects" tab={false}>
			<PlanksRoot
				id={id}
				className="Planks-root link animate-all"
				data-night={settings.time === 'night'}
				transform={`translate(${x},${y})`}
				strokeWidth="0"
			>
				<svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}></svg>
			</PlanksRoot>
		</Link>
	);
};
