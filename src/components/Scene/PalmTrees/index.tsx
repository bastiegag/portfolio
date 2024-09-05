import React from 'react';

import { Palm1 } from './Palm1';
import { Palm2 } from './Palm2';
import { Palm3 } from './Palm3';

export const PalmTrees = () => {
	return (
		<React.Fragment>
			<Palm3 />
			<Palm2 />
			<Palm1 />
		</React.Fragment>
	);
};
