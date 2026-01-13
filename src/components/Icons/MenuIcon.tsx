import { styled } from '@mui/material';
import { IconProps } from './';

const StyledSvg = styled('svg', {
	name: 'MenuIcon',
	slot: 'root',
})();

const MENU_ICON_VIEWBOX = '0 0 141.3 111.82';
const MENU_ICON_FILL = '#fff';

export const MenuIcon = ({ size }: IconProps) => {
	return (
		<StyledSvg
			className="MenuIcon-root"
			viewBox={MENU_ICON_VIEWBOX}
			fill={MENU_ICON_FILL}
			{...(size && { height: size, width: size })}
		>
			<path d="M7.59,100.05s1.48,5.23,5.1,7.26,75.41,4.51,75.41,4.51c0,0,49.19-.98,49.72-2.75s-6.9-8.83-11.35-10.66-118.88,1.63-118.88,1.63Z" />
			<path d="M0,49.58s5.85,10.53,8.24,11.38,50.35-1.57,56.79-2.29,20.92,3.4,20.92,3.4c0,0,49.11-1.18,51.76-2.68s-4.94-8.57-4.94-8.57L0,49.58Z" />
			<path d="M.06,7.85C-1.22,5.82,19.9,0,27.52,0s113.78,6.28,113.78,6.28c0,0-1.69,6.39-3.89,7.24S12.61,15.69,12.61,15.69C12.61,15.69,1.33,9.87.06,7.85Z" />
		</StyledSvg>
	);
};
