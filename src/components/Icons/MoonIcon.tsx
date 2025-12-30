import { JSX } from 'react';
import { styled } from '@mui/system';

import { IconProps } from './';

/**
 * Styled SVG root element for the moon icon
 */
const MoonIconRoot = styled('svg', {
	name: 'MoonIcon',
	slot: 'root',
})();

/**
 * SVG viewBox coordinates for the moon icon
 */
const VIEWBOX = '0 0 148.95 158.43';

/**
 * Default fill color for the icon
 */
const DEFAULT_FILL = '#fff';

/**
 * Hand-drawn style crescent moon icon component
 *
 * Renders an SVG icon depicting a crescent moon with an irregular,
 * hand-drawn appearance that matches the overall aesthetic of the
 * portfolio. Used for theme switching to indicate dark/night mode.
 * Size is customizable via props while maintaining aspect ratio.
 *
 * @param props - Icon component props
 * @returns SVG moon icon element
 */
export const MoonIcon = ({ size }: IconProps): JSX.Element => {
	return (
		<MoonIconRoot
			className="MoonIcon-root"
			viewBox={VIEWBOX}
			fill={DEFAULT_FILL}
			{...(size && { height: size, width: size })}
		>
			<path d="M77.83,158.43c-26.39,0-63.77-30.37-63.77-30.37,0,0-14.06-30.93-14.06-47.46,0-18.73,9.66-37.04,21.91-51.17C34.03,15.44,47.36,7.99,58.79,5.1L79.19,0l-4.71,15.3c-7.48,10.58-13.1,22.33-13.1,35.29,0,9.91-.05,19.15,4.07,27.48,5.32,10.74,16.37,22.01,26.29,28.64,15.3,10.23,37.54,8.66,41.59,7.85l15.61-.73-8.28,12.95c-6.89,10.78-26.95,20.34-26.95,20.34,0,0-21.98,11.3-35.88,11.3ZM56.83,19.95c-8.93,3.78-22.57,10.65-29.03,18.11-4.34,5.01-8.63,17.37-8.63,17.37,0,0-7.07,16.28-7.07,25,0,10.79,6.65,24.42,11.39,33.34s25.1,22.9,25.1,22.9c0,0,25.89,7.43,30.99,7.76,16.53,1.07,44.73-16.37,44.73-16.37,0,0-31.02-4.66-43.57-14.71-9.84-7.87-21.26-23.52-26.26-35.27-3.9-9.17-7.45-29.86-7.45-29.86,0,0,6.1-19.19,9.81-28.27Z" />
		</MoonIconRoot>
	);
};
