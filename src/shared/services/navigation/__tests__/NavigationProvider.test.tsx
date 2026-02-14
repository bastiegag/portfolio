import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { NavigationProvider, useNavigation } from '../NavigationProvider';
import type { INavigationService } from '../INavigationService';

describe('NavigationProvider', () => {
	it('should provide navigation service to children', () => {
		const { result } = renderHook(() => useNavigation(), {
			wrapper: ({ children }: { children: ReactNode }) => (
				<NavigationProvider>{children}</NavigationProvider>
			),
		});

		expect(result.current).toBeDefined();
		expect(result.current.openLink).toBeInstanceOf(Function);
		expect(result.current.isValidUrl).toBeInstanceOf(Function);
		expect(result.current.sanitizeUrl).toBeInstanceOf(Function);
	});

	it('should allow custom service injection', () => {
		const mockService: INavigationService = {
			openLink: vi.fn(),
			isValidUrl: vi.fn().mockReturnValue(true),
			sanitizeUrl: vi.fn((url) => url),
		};

		const { result } = renderHook(() => useNavigation(), {
			wrapper: ({ children }: { children: ReactNode }) => (
				<NavigationProvider service={mockService}>
					{children}
				</NavigationProvider>
			),
		});

		expect(result.current).toBe(mockService);
	});
});

describe('useNavigation', () => {
	it('should throw error when used outside provider', () => {
		// Suppress console.error for this test
		const consoleErrorSpy = vi
			.spyOn(console, 'error')
			.mockImplementation(() => {});

		expect(() => {
			renderHook(() => useNavigation());
		}).toThrow('useNavigation must be used within a NavigationProvider');

		consoleErrorSpy.mockRestore();
	});

	it('should return navigation service when used inside provider', () => {
		const { result } = renderHook(() => useNavigation(), {
			wrapper: ({ children }: { children: ReactNode }) => (
				<NavigationProvider>{children}</NavigationProvider>
			),
		});

		expect(result.current).toBeDefined();
		expect(typeof result.current.openLink).toBe('function');
	});
});
