import React from 'react';

import { Cloud01 } from './Cloud01';
import { Cloud02 } from './Cloud02';
import { Cloud03 } from './Cloud03';
import { Cloud04 } from './Cloud04';
import { Cloud05 } from './Cloud05';
import { Cloud06 } from './Cloud06';
import { Cloud07 } from './Cloud07';

export const Clouds = () => {
	return (
		<React.Fragment>
			<defs>
				<filter
					id="cloudBlur"
					x="0"
					y="0"
					xmlns="http://www.w3.org/2000/svg"
				>
					<feGaussianBlur in="SourceGraphic" stdDeviation="1" />
				</filter>
			</defs>
			{/* <g filter="cloudBlur"> */}
			<Cloud07 />
			<Cloud06 />
			<Cloud05 />
			<Cloud04 />
			<Cloud03 />
			<Cloud02 />
			<Cloud01 />
			{/* </g> */}
		</React.Fragment>
	);
};
