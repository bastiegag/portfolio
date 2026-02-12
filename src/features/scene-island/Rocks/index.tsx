import { useId } from 'react';
import { styled } from '@mui/material';

import { Rock } from './Rock';
import { ROCKS_DATA } from './rocksData';
import { useParallax } from '@shared/hooks/parallax/useParallax';

const ROCKS_MODIFIER = { x: 14, y: 10 };

const RocksRoot = styled('g', {
	name: 'Rocks',
	slot: 'root',
})();

export const Rocks = () => {
	const id = CSS.escape(useId());

	useParallax(`#${id}`, 0, 0, ROCKS_MODIFIER);

	return (
		<RocksRoot id={id} className="Rocks-root">
			{ROCKS_DATA.map((props, index) => (
				<Rock key={index} {...props} />
			))}
		</RocksRoot>
	);
};
