import { useId } from 'react';
import { styled } from '@mui/material';

import { Grass } from './Grass';
import { Plant } from './Plant';
import { FOLIAGE_DATA, FOLIAGE_ORIGINS } from './foliageData';
import { useParallax } from '@shared/hooks/parallax/useParallax';

const FOLIAGE_MODIFIER = { x: 15, y: 10 };

const FoliageRoot = styled('g', {
	name: 'Foliage',
	slot: 'root',
})();

export const Foliage = () => {
	const id = CSS.escape(useId());

	useParallax(`#${id}`, 0, 0, FOLIAGE_MODIFIER);

	return (
		<FoliageRoot id={id} className="Rocks-root">
			{FOLIAGE_DATA.map((props, index) => {
				const Component = props.type === 'grass' ? Grass : Plant;

				return (
					<Component
						key={index}
						x={props.x}
						y={props.y}
						origin={FOLIAGE_ORIGINS[props.type][props.variant]}
						variant={props.variant}
					/>
				);
			})}
		</FoliageRoot>
	);
};
