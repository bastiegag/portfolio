import { styled, useTheme } from '@mui/system';

import { RockProps } from './';

const CustomSvg = styled('g', {
	name: 'rock9',
	slot: 'Root',
})(() => ({
	'.rock-shadow': {
		opacity: 0.25,
	},
}));

export const Rock9 = ({ params }: RockProps) => {
	const colors = useTheme().palette;

	const x = typeof params.x == 'undefined' ? 0 : params.x;
	const y = typeof params.y == 'undefined' ? 0 : params.y;

	return (
		<CustomSvg className="rock rock-9" transform={`translate(${x},${y})`}>
			<path
				fill={colors.scene.rock.alt.dark}
				d="M39.3,17.8L3.3,19.8l-3.3-1.8L5.9,6.6S25.4-1,37.6.1l4.5,12.8.3,4.4-3.1.5Z"
			/>
			<polygon
				className="rock-shadow"
				fill={colors.common.black}
				points="22.9 18.7 22.5 17.4 29.6 14.1 39.3 17.8 22.9 18.7"
			/>
			<polygon
				fill={colors.scene.rock.alt.darker}
				points="20.5 9.1 22.5 17.4 29.6 14.1 34 5 32.1 5.4 20.5 9.1"
			/>
			<path
				fill={colors.scene.rock.alt.main}
				d="M5.9,6.6s5.4,2.3,15,2.1c9.6-.2,17.4-6.5,17.4-6.5l-.7-2.1S23.4-1.4,5.9,6.6Z"
			/>
			<path
				fill={colors.scene.rock.alt.light}
				d="M5.9,6.6S14.6,2.2,22.8,1.2c0,0,7.2,1.2,11.2,3.8,0,0-6.5,3.7-14.3,4.2,0,0-9.2.4-13.8-2.7Z"
			/>
			<path
				className="rock-shadow"
				fill={colors.common.black}
				d="M34,5l-4.4,9.1-7.1,3.3-19.2,2.5,35.9-2,1.8-4.1,1-.8-3.7-10.7c-1.9,1.6-4.3,2.8-4.3,2.8Z"
			/>
			<polygon
				fill={colors.scene.rock.alt.lighter}
				points="18.2 9.2 23.4 8.7 20.8 10.5 18.2 9.2"
			/>
		</CustomSvg>
	);
};
