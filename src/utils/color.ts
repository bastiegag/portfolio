/**
 * Convert HEX to RGBA
 * @param {string} hex
 * @returns
 */
export const hexToRgba = (hexCode: string, opacity = 1) => {
	let hex = hexCode.replace('#', '');

	if (hex.length === 3) {
		hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
	}

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	/* Backward compatibility for whole number based opacity values. */
	if (opacity > 1 && opacity <= 100) {
		opacity = opacity / 100;
	}

	return `rgba(${r},${g},${b},${opacity})`;
};

/**
 * Convert RGB to HEX
 * @param {object} color
 * @returns
 */
interface Color {
	r: number;
	g: number;
	b: number;
}

export const rgbToHex = (color: Color) => {
	return (
		'#' +
		componentToHex(color.r) +
		componentToHex(color.g) +
		componentToHex(color.b)
	);
};

const componentToHex = (c: number) => {
	var hex = c.toString(16);

	return hex.length == 1 ? '0' + hex : hex;
};
