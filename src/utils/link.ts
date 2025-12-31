export const openLink = (url: string, tab: boolean = true): void => {
	const target = tab ? '_blank' : '_self';

	const newWindow = window.open(url, target, 'noopener,noreferrer');

	if (newWindow) newWindow.opener = null;
};
