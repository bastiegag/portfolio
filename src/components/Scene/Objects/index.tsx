import React from 'react';

import { Clothesline } from './Clothesline';
import { Bottle } from './Bottle';
import { Mug } from './Mug';
import { Deck } from './Deck';
import { Firecamp } from './Firecamp';
import { Rock8 } from '../Rocks/Rock8';
import { Rock9 } from '../Rocks/Rock9';
import { Rock10 } from '../Rocks/Rock10';
import { Map } from './Map';

export const Objects = () => {
	return (
		<React.Fragment>
			<Clothesline
				params={{ x: 656, y: 240, m: { x: 16, y: 12 }, scale: 1.1 }}
			/>
			<Bottle
				params={{ x: 720, y: 326, m: { x: 19, y: 13 }, scale: 0.75 }}
			/>
			{/* <Deck
				params={{ x: 300, y: 330, m: { x: 19, y: 12 }, scale: 1.4 }}
				/> */}
			<Firecamp params={{ x: 157, y: 119, m: { x: 15, y: 10 } }} />
			<Rock9 params={{ x: 160, y: 289, m: { x: 15, y: 10 } }} />
			<Rock8 params={{ x: 242, y: 285, m: { x: 15, y: 10 } }} />
			<Rock10 params={{ x: 198, y: 294, m: { x: 15, y: 10 } }} />
			<Mug params={{ x: 158, y: 270, m: { x: 15, y: 10 } }} />
			{/* <Map params={{ x: 244, y: 296, m: { x: 15, y: 10 }, scale: 0.9 }} /> */}
		</React.Fragment>
	);
};
