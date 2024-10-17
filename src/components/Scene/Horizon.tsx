import { styled, useTheme } from '@mui/system';

const CustomSvg = styled('g', {
	name: 'horizon',
	slot: 'Root',
})(() => ({ mixBlendMode: 'multiply', opacity: 0.65 }));

export const Horizon = () => {
	const colors = useTheme().palette.scene.water;

	return (
		<CustomSvg transform={`translate(0,0)`} fill={colors.dark}>
			<path d="M1000,0v8.1s-118.6,1-197.2,0-131.4-1.5-131.4-1.5c0,0,88.2-.3,117.6-2.3,29.5-2,40.3-1.7,40.3-1.7,0,0-509-1-589.8,0-80.7,1-198.1,1.7-198.1,1.7,0,0,229.9.2,296.7,0,66.7-.2,333.2,2.3,333.2,2.3L0,8.5V0h1000Z" />
		</CustomSvg>
	);
};
