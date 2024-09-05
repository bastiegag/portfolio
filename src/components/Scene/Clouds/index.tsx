import React from 'react';

import { Cloud1 } from './Cloud1';
import { Cloud2 } from './Cloud2';
import { Cloud3 } from './Cloud3';
import { Cloud4 } from './Cloud4';
import { Cloud5 } from './Cloud5';
import { Cloud6 } from './Cloud6';
import { Cloud7 } from './Cloud7';

export const Clouds = () => {
	return (
		<React.Fragment>
			<Cloud7 distance={40} />
			<Cloud6 distance={40} />
			<Cloud5 distance={50} />
			<Cloud4 distance={30} />
			<Cloud3 distance={20} />
			<Cloud2 />
			<Cloud1 />
		</React.Fragment>
	);
};
