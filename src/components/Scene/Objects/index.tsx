import React from "react";

import { Clothesline } from "./Clothesline";
import { Bottle } from "./Bottle";
import { Deck } from "./Deck";
import { Firecamp } from "./Firecamp";
import { Map } from "./Map";

export const Objects = () => {
	return (
		<React.Fragment>
			<Clothesline params={{ x: 656, y: 240, scale: 1.1 }} />
			<Bottle params={{ x: 720, y: 326 }} />
			<Deck params={{ x: 300, y: 330, scale: 1.4 }} />
			<Firecamp params={{ x: 157, y: 119 }} />
			<Map params={{ x: 244, y: 296, scale: 0.9 }} />
		</React.Fragment>
	);
};
