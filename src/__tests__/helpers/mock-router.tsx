/* eslint-disable react-refresh/only-export-components */
import { ReactNode } from 'react';
import { MemoryRouter, MemoryRouterProps } from 'react-router-dom';
import { vi } from 'vitest';

/**
 * Mock router for testing components that use React Router hooks
 * Wraps components in MemoryRouter with configurable initial routes
 */

interface MockRouterProps extends MemoryRouterProps {
	children: ReactNode;
}

/**
 * Wrapper component for testing with React Router
 * Use this when testing components that use useNavigate, useLocation, etc.
 */
export const MockRouter = ({
	children,
	initialEntries = ['/'],
	initialIndex = 0,
	...props
}: MockRouterProps) => {
	return (
		<MemoryRouter
			initialEntries={initialEntries}
			initialIndex={initialIndex}
			{...props}
		>
			{children}
		</MemoryRouter>
	);
};

/**
 * Helper to create a router wrapper with specific route
 * Useful for testing components at specific routes
 */
export const createRouterWrapper = (initialRoute: string = '/') => {
	return ({ children }: { children: ReactNode }) => (
		<MemoryRouter initialEntries={[initialRoute]}>{children}</MemoryRouter>
	);
};

/**
 * Mock navigation object for testing
 * Use when you need to test navigation without actual routing
 */
export const createMockNavigate = () => {
	const navigate = vi.fn();
	return navigate;
};

/**
 * Mock location object for testing
 */
export const createMockLocation = (pathname: string = '/') => ({
	pathname,
	search: '',
	hash: '',
	state: null,
	key: 'default',
});

// Re-export for convenience
export { MemoryRouter };
