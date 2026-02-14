import { useCallback } from 'react';
import { Link as RouterLink } from 'react-router';

import { usePopper } from '@shared/hooks/popper/popper.state';
import { useCursor } from '@shared/components/cursor/cursor.state';
import { useNavigation } from '@shared/services/navigation';
import type { WithChildren } from '@shared/types';

export interface LinkProps extends WithChildren {
	url?: string;
	to?: string;
	title: string;
	tab?: boolean;
}

export const Link = ({ url, to, title, tab, children }: LinkProps) => {
	const { popper, setPopper } = usePopper();
	const { setCursor } = useCursor();
	const navigation = useNavigation();

	const handlePopoverOpen = useCallback(
		(event: React.MouseEvent<HTMLAnchorElement>, title: string) => {
			setCursor({ hover: true });
			setPopper({
				...popper,
				anchorEl: event.currentTarget,
				title: title,
			});
		},
		[popper, setCursor, setPopper],
	);

	const handlePopoverClose = useCallback(() => {
		setCursor({ hover: false });
		setPopper({
			...popper,
			anchorEl: null,
			title: '',
		});
	}, [popper, setCursor, setPopper]);

	const handleClick = useCallback(() => {
		if (url) {
			navigation.openLink(url, {
				newTab: tab,
				trackingEvent: {
					category: 'navigation',
					action: 'external-link',
					label: url,
				},
			});
		}
	}, [url, tab, navigation]);

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
