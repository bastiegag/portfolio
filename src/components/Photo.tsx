import { JSX, useId, useMemo } from 'react';
import { styled, useTheme } from '@mui/material';

/**
 * Styled SVG root element for the photo component
 */
const PhotoRoot = styled('svg', {
	name: 'Photo',
	slot: 'root',
})(() => ({}));

/**
 * Props for the Photo component
 */
export interface PhotoProps {
	/** Image source URL to display in the photo frame */
	src: string;
}

/**
 * SVG viewBox coordinates for the photo frame
 */
const VIEWBOX = '0 0 69.9 72.5';

/**
 * Shadow polygon points (offset background layer)
 */
const SHADOW_POINTS =
	'2.8 5.6 37.8 1.6 65 3.5 66.7 39.8 69.2 72.4 32.5 72.5 1.5 72.5 4.2 47.4 2.8 5.6';

/**
 * Main frame polygon points (white background)
 */
const FRAME_POINTS =
	'0 2.6 36.6 .6 67.2 0 68.1 35.3 69.9 70.5 32.8 71.6 1.6 72.4 1.7 47.5 0 2.6';

/**
 * Mask polygon points defining the visible image area
 */
const MASK_POINTS =
	'3.4 6.1 23.2 4.9 27.3 4.3 64.1 3 65.7 57.5 47 58.4 5.1 60.1 4.8 27.1 3.4 6.1';

/**
 * Shadow opacity value
 */
const SHADOW_OPACITY = 0.15;

/**
 * Photo frame component with polaroid-style appearance
 *
 * Renders an SVG-based photo frame with irregular edges that mimics
 * a hand-drawn polaroid photo. Includes a subtle drop shadow effect
 * and masks the image to fit within the frame borders. The image is
 * centered and cropped using objectFit cover behavior.
 *
 * @param props - Photo component props
 * @returns SVG photo frame with masked image
 */
export const Photo = ({ src }: PhotoProps): JSX.Element => {
	const id = CSS.escape(useId());
	const colors = useTheme().vars.palette;

	/**
	 * Generate unique mask ID for this photo instance
	 */
	const maskId = useMemo(() => `svgmask-${id}`, [id]);

	return (
		<PhotoRoot id={id} viewBox={VIEWBOX}>
			<polygon
				fill={colors.base.black}
				fillOpacity={SHADOW_OPACITY}
				points={SHADOW_POINTS}
			/>
			<polygon
				className="main"
				fill={colors.base.white}
				points={FRAME_POINTS}
			/>
			<image
				xlinkHref={src}
				mask={`url(#${maskId})`}
				width="100%"
				height="100%"
				preserveAspectRatio="xMidYMid slice"
			></image>
			<mask id={maskId}>
				<polygon fill={colors.base.white} points={MASK_POINTS} />
			</mask>
		</PhotoRoot>
	);
};
