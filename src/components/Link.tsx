import { JSX, ReactNode } from 'react';
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
	const { cursor, setCursor } = useCursor();

	const handlePopoverOpen = (
		event: React.MouseEvent<HTMLAnchorElement>,
		title: string
	) => {
		setCursor({ hover: true });
		setSettings({
			...settings,
			anchorEl: event.currentTarget,
			title: title,
		});
	};

	const handlePopoverClose = () => {
		setCursor({ hover: false });
		setSettings({
			...settings,
			anchorEl: null,
			title: '',
		});
	};

	return (
		<RouterLink
			className="link"
			onMouseEnter={(event) => title && handlePopoverOpen(event, title)}
			onMouseLeave={handlePopoverClose}
			to={to ?? ''}
			onClick={() => url && openLink(url, tab)}
		>
			{children}
		</RouterLink>
	);
};
