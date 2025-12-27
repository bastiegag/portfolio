export const PALM_TREE_ORIGINS: Record<number, string[]> = {
	1: ['71 168', '46 15'],
	2: ['54 167', '65 14'],
	3: ['4 173', '91 20'],
};

interface PalmTreeData {
	x: number;
	y: number;
	variant: number;
}

export const PALM_TREE_DATA: PalmTreeData[] = [
	{
		x: 286,
		y: 110,
		variant: 1,
	},
	{
		x: 494,
		y: 86,
		variant: 2,
	},
	{
		x: 588,
		y: 126,
		variant: 3,
	},
];
