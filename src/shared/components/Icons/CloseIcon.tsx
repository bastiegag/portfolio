import { styled } from '@mui/material';
import { IconProps } from './';

// Styled SVG root for the CloseIcon
const CloseIconSvg = styled('svg', {
	name: 'CloseIcon',
	slot: 'root',
})();

// ViewBox and fill color constants for the icon
const VIEW_BOX = '0 0 101.08 104.71';
const ICON_FILL = '#fff';

/**
 * CloseIcon - a stylized "X" icon for closing dialogs or modals
 * @param size - optional pixel size for width/height
 */
export const CloseIcon = ({ size }: IconProps) => {
	return (
		<CloseIconSvg
			className="CloseIcon-root"
			viewBox={VIEW_BOX}
			fill={ICON_FILL}
			// If size is provided, set both width and height
			{...(size && { height: size, width: size })}
		>
			{/* Main diagonal paths forming the X */}
			<path d="M2.59,102.9s4.75,2.65,8.74,1.53,56.52-50.14,56.52-50.14c0,0,34.09-35.48,33.21-37.1s-11.12-1.37-15.56.49S2.59,102.9,2.59,102.9Z" />
			<path d="M.05.33c.53-2.34,19.58,8.49,24.97,13.87s76.02,84.89,76.02,84.89c0,0-5.71,3.32-7.87,2.37S3.38,14.75,3.38,14.75C3.38,14.75-.48,2.66.05.33Z" />
		</CloseIconSvg>
	);
};
