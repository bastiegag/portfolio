/**
 * Opens a URL in a new tab or the current window with security best practices
 *
 * This function provides a secure way to open external links by:
 * - Using 'noopener' and 'noreferrer' to prevent the opened page from accessing window.opener
 * - Explicitly setting opener to null as an additional security measure
 *
 * @param url - The URL to open
 * @param tab - If true, opens in a new tab (_blank); if false, opens in current window (_self). Defaults to true.
 * @returns void
 */
export const openLink = (url: string, tab: boolean = true): void => {
	// Determine the target based on whether to open in new tab or current window
	const target = tab ? '_blank' : '_self';

	// Open the URL with security features to prevent reverse tabnabbing
	const newWindow = window.open(url, target, 'noopener,noreferrer');

	// Additional security: explicitly remove the opener reference
	if (newWindow) newWindow.opener = null;
};
