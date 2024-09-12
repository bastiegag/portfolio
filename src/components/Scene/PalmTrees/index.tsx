import React from 'react';

import { Palm1 } from './Palm1';
import { Palm2 } from './Palm2';
import { Palm3 } from './Palm3';

export interface PalmProps {
	position: number[];
}

export const PalmTrees = () => {
	return (
		<React.Fragment>
			<Palm1 position={[290, 110]} />
			<Palm2 position={[494, 86]} />
			<Palm3 position={[588, 128]} />
		</React.Fragment>
	);
};
