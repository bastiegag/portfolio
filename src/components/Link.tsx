import { JSX, ReactNode, useCallback } from 'react';
import { Link as RouterLink } from 'react-router';

import { usePopper, useCursor } from 'hooks';
import { openLink } from 'utils';

/**
 * Props for the Link component
 */
export interface LinkProps {
	/** External URL to open (mutually exclusive with 'to') */
	url?: string;
	/** Internal route path for navigation (mutually exclusive with 'url') */
	to?: string;
	/** Tooltip title displayed on hover */
	title: string;
	/** Whether to open URL in a new tab (only applies to external URLs) */
	tab?: boolean;
	/** Child elements to render as link content */
	children: ReactNode;
}

/**
 * Custom Link component with hover tooltip and cursor state
 *
 * Supports both internal routing (via 'to' prop) and external links (via 'url' prop).
 * Shows a tooltip on hover and updates the custom cursor state.
 *
 * @param props - Link component props
 * @returns Interactive link element with hover effects
 */
export const Link = ({
	url,
	to,
	title,
	tab,
	children,
}: LinkProps): JSX.Element => {
	const { settings, setSettings } = usePopper();
	const { setCursor } = useCursor();

	/**
	 * Handle mouse enter event to show tooltip and update cursor
	 */
	const handlePopoverOpen = useCallback(
		(event: React.MouseEvent<HTMLAnchorElement>, title: string) => {
			setCursor({ hover: true });
			setSettings({
				...settings,
				anchorEl: event.currentTarget,
				title: title,
			});
		},
		[settings, setCursor, setSettings]
	);

	/**
	 * Handle mouse leave event to hide tooltip and reset cursor
	 */
	const handlePopoverClose = useCallback(() => {
		setCursor({ hover: false });
		setSettings({
			...settings,
			anchorEl: null,
			title: '',
		});
	}, [settings, setCursor, setSettings]);

	/**
	 * Handle click event to open external URL
	 */
	const handleClick = useCallback(() => {
		if (url) {
			openLink(url, tab);
		}
	}, [url, tab]);

	return (
		<RouterLink
			className="link"
			onMouseEnter={(event) => title && handlePopoverOpen(event, title)}
			onMouseLeave={handlePopoverClose}
			to={to ?? ''}
			onClick={handleClick}
		>
			{children}
		</RouterLink>
	);
};
