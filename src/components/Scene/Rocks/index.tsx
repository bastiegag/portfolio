import { Rock1 } from './Rock1';
import { Rock2 } from './Rock2';
import { Rock3 } from './Rock3';
import { Rock4 } from './Rock4';
import { Rock5 } from './Rock5';
import { Rock6 } from './Rock6';
import { Rock7 } from './Rock7';

export interface IRockProps {
	params: {
		distance?: number;
		m: { x: number; y: number };
		x: number;
		y: number;
	};
	invert?: boolean;
}

export const Rocks = () => {
	return (
		<>
			<Rock7
				params={{ x: 356, y: 171, m: { x: 13, y: 9 }, distance: 20 }}
			/>
			<Rock6
				params={{ x: 304, y: 230, m: { x: 13, y: 9 }, distance: 20 }}
			/>
			<Rock5
				params={{ x: 600, y: 245, m: { x: 13, y: 9 }, distance: 20 }}
			/>
			<Rock4 params={{ x: 400, y: 146, m: { x: 14, y: 10 } }} />
			<Rock3 params={{ x: 329, y: 261, m: { x: 14, y: 10 } }} />
			<Rock2
				params={{ x: 284, y: 274, m: { x: 14, y: 10 }, distance: 0 }}
			/>
			<Rock1 params={{ x: 404, y: 278, m: { x: 14, y: 10 } }} />
		</>
	);
};

export { Rock1 } from './Rock1';
export { Rock2 } from './Rock2';
export { Rock3 } from './Rock3';
export { Rock4 } from './Rock4';
export { Rock5 } from './Rock5';
export { Rock6 } from './Rock6';
export { Rock7 } from './Rock7';
