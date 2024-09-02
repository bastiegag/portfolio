import { styled } from '@mui/system';

import { Sky } from './Sky';
import { Ocean } from './Ocean';
import { Island } from './Island';
import { Ripples } from './Ripples';
import { PalmTrees } from './PalmTrees';
import { Rocks } from './Rocks';

const CustomSvg = styled('svg', {
	name: 'scene',
	slot: 'Root',
})(() => ({
	'.island': {
		transform: 'scale(0.85) translateY(12px) translateX(2%)',
		transformOrigin: '50% 50%',
	},
}));

export const Scene = () => {
	return (
		<CustomSvg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 1000 400"
			preserveAspectRatio="xMidYMid slice"
		>
			<Sky />
			<Ocean />
			<g className="island">
				{/* <Island /> */}
				<Ripples />
				{/* <PalmTrees /> */}
				{/* <Rocks /> */}
			</g>
		</CustomSvg>
	);
};
