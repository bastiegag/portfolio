import { JSX, ReactNode, useCallback } from 'react';
import { Link as RouterLink } from 'react-router';

import { usePopper, useCursor } from 'hooks';
import { openLink } from 'utils';

export interface LinkProps {
	url?: string;
	to?: string;
	title: string;
	tab?: boolean;
	children: ReactNode;
}

export const Link = ({
	url,
	to,
	title,
	tab,
	children,
}: LinkProps): JSX.Element => {
	const { settings, setSettings } = usePopper();
	const { setCursor } = useCursor();

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

	const handlePopoverClose = useCallback(() => {
		setCursor({ hover: false });
		setSettings({
			...settings,
			anchorEl: null,
			title: '',
		});
	}, [settings, setCursor, setSettings]);

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
