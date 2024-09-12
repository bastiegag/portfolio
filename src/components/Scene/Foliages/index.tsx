import React from 'react';

import { Leaf1 } from './Leaf1';
import { Leaf2 } from './Leaf2';
import { Leaf3 } from './Leaf3';

export const Foliages = () => {
	return (
		<React.Fragment>
			<Leaf1 position={[440, 278]} />
			<Leaf2 position={[404, 278]} />
			<Leaf3 position={[434, 268]} />
		</React.Fragment>
	);
};
