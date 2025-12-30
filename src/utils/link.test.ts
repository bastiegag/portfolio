import { describe, it, expect, vi, beforeEach } from 'vitest';
import { openLink } from './link';

describe('openLink', () => {
	beforeEach(() => {
		// Mock window.open
		vi.stubGlobal('open', vi.fn());
	});

	it('should open link in new tab by default', () => {
		const url = 'https://example.com';
		const mockOpen = vi.fn(() => ({ opener: null }));
		vi.stubGlobal('open', mockOpen);

		openLink(url);

		expect(mockOpen).toHaveBeenCalledWith(
			url,
			'_blank',
			'noopener,noreferrer'
		);
	});

	it('should open link in current window when tab is false', () => {
		const url = 'https://example.com';
		const mockOpen = vi.fn(() => ({ opener: null }));
		vi.stubGlobal('open', mockOpen);

		openLink(url, false);

		expect(mockOpen).toHaveBeenCalledWith(
			url,
			'_self',
			'noopener,noreferrer'
		);
	});

	it('should set opener to null for security', () => {
		const url = 'https://example.com';
		const mockWindow = { opener: 'something' };
		const mockOpen = vi.fn(() => mockWindow);
		vi.stubGlobal('open', mockOpen);

		openLink(url);

		expect(mockWindow.opener).toBeNull();
	});

	it('should handle when window.open returns null', () => {
		const url = 'https://example.com';
		const mockOpen = vi.fn(() => null);
		vi.stubGlobal('open', mockOpen);

		expect(() => openLink(url)).not.toThrow();
	});
});
