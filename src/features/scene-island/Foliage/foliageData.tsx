// Origins for each foliage variant (used for transform/origin in rendering)
interface FoliageOrigins {
	grass: Record<number, string>;
	plant: Record<number, string>;
}

export const FOLIAGE_ORIGINS: FoliageOrigins = {
	grass: {
		1: '25 11',
		2: '21 13',
		3: '32 15',
	},
	plant: {
		1: '30 24',
		2: '39 32',
		3: '33 27',
		4: '33 21',
	},
};

// Data for each foliage element to render on the island scene
export interface FoliageInstance {
	type: 'grass' | 'plant';
	x: number;
	y: number;
	variant: number;
}

export const FOLIAGE_DATA: FoliageInstance[] = [
	{ type: 'grass', x: 528, y: 288, variant: 1 },
	{ type: 'grass', x: 600, y: 290, variant: 2 },
	{ type: 'plant', x: 570, y: 279, variant: 1 },
	{ type: 'grass', x: 500, y: 293, variant: 1 },
	{ type: 'grass', x: 415, y: 287, variant: 2 },
	{ type: 'grass', x: 430, y: 293, variant: 1 },
	{ type: 'grass', x: 360, y: 283, variant: 3 },
	{ type: 'grass', x: 284, y: 286, variant: 2 },
	{ type: 'grass', x: 310, y: 288, variant: 1 },
	{ type: 'plant', x: 490, y: 270, variant: 2 },
	{ type: 'plant', x: 410, y: 280, variant: 3 },
	{ type: 'plant', x: 320, y: 279, variant: 4 },
];
