import React from 'react';

import { Clothesline } from './Clothesline';
import { Bottle } from './Bottle';
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
				params={{ x: 656, y: 240, multiplier: 15, scale: 1.1 }}
			/>
			<Bottle params={{ x: 720, y: 326, multiplier: 17 }} />
			<Deck params={{ x: 300, y: 330, multiplier: 17, scale: 1.4 }} />
			<Firecamp params={{ x: 157, y: 119, multiplier: 13 }} />
			<Rock9 params={{ x: 160, y: 289, multiplier: 14 }} />
			<Rock8 params={{ x: 242, y: 285, multiplier: 14 }} />
			<Rock10 params={{ x: 198, y: 294, multiplier: 14 }} />
			<Map params={{ x: 244, y: 296, multiplier: 15, scale: 0.9 }} />
		</React.Fragment>
	);
};
