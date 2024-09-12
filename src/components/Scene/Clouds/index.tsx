import React from 'react';

import { Cloud1 } from './Cloud1';
import { Cloud2 } from './Cloud2';
import { Cloud3 } from './Cloud3';
import { Cloud4 } from './Cloud4';
import { Cloud5 } from './Cloud5';
import { Cloud6 } from './Cloud6';
import { Cloud7 } from './Cloud7';

export interface CloudProps {
	distance?: number;
	position: number;
}

export const Clouds = () => {
	return (
		<React.Fragment>
			<Cloud7 position={140} distance={40} />
			<Cloud6 position={160} distance={40} />
			<Cloud5 position={120} distance={50} />
			<Cloud4 position={196} distance={30} />
			<Cloud3 position={174} distance={20} />
			<Cloud2 position={150} />
			<Cloud1 position={190} />
		</React.Fragment>
	);
};
