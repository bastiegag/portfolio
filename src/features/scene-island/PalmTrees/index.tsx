import { useId } from 'react';
import { styled } from '@mui/material';

import { PalmTree } from './PalmTree';
import { PALM_TREE_DATA, PALM_TREE_ORIGINS } from './palmTreeData';
import { useParallax } from '@shared/hooks/parallax/useParallax';

const PALM_TREES_MODIFIER = { x: 13, y: 10 };

const PalmTreesRoot = styled('g', {
	name: 'PalmTrees',
	slot: 'root',
})();

export const PalmTrees = () => {
	const id = CSS.escape(useId());

	useParallax(`#${id}`, 0, 0, PALM_TREES_MODIFIER);

	return (
		<PalmTreesRoot id={id} className="PalmTrees-root">
			{PALM_TREE_DATA.map((props, index) => (
				<PalmTree
					key={index}
					x={props.x}
					y={props.y}
					origins={PALM_TREE_ORIGINS[props.variant]}
					variant={props.variant}
				/>
			))}
		</PalmTreesRoot>
	);
};
