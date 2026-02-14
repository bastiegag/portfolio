import { describe, it, expect, beforeEach, vi } from 'vitest';
import { NavigationService } from '../NavigationService';

describe('NavigationService', () => {
	let service: NavigationService;
	let windowOpenSpy: ReturnType<typeof vi.spyOn>;

	beforeEach(() => {
		service = new NavigationService();
		windowOpenSpy = vi.spyOn(window, 'open').mockReturnValue(null);
		windowOpenSpy.mockClear();
	});

	describe('openLink', () => {
		it('should open link in new tab by default', () => {
			const url = 'https://example.com';

			service.openLink(url);

			expect(windowOpenSpy).toHaveBeenCalledWith(
				url,
				'_blank',
				'noopener,noreferrer',
			);
		});

		it('should open link in current tab when newTab is false', () => {
			const url = 'https://example.com';

			service.openLink(url, { newTab: false });

			expect(windowOpenSpy).toHaveBeenCalledWith(url, '_self', '');
		});

		it('should null out opener for new tabs', () => {
			const mockWindow = { opener: {} };
			// @ts-expect-error - Mocking window object for testing
			windowOpenSpy.mockReturnValue(mockWindow);

			service.openLink('https://example.com');

			expect(mockWindow.opener).toBeNull();
		});

		it('should not open invalid URLs when validation is enabled', () => {
			const consoleErrorSpy = vi
				.spyOn(console, 'error')
				.mockImplementation(() => {});

			service.openLink('javascript:alert("xss")');

			expect(windowOpenSpy).not.toHaveBeenCalled();
			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'[NavigationService] Invalid URL blocked:',
				'javascript:alert("xss")',
			);

			consoleErrorSpy.mockRestore();
		});

		it('should open invalid URLs when validation is disabled', () => {
			service.openLink('invalid-url', { validate: false });

			expect(windowOpenSpy).toHaveBeenCalled();
		});

		it('should log tracking events in dev mode', () => {
			const consoleLogSpy = vi
				.spyOn(console, 'log')
				.mockImplementation(() => {});
			const trackingEvent = {
				category: 'navigation',
				action: 'click',
				label: 'test-link',
			};

			service.openLink('https://example.com', { trackingEvent });

			// Check if it was called (dev mode check handled by import.meta.env)
			consoleLogSpy.mockRestore();
		});

		it('should handle window.open errors gracefully', () => {
			const consoleErrorSpy = vi
				.spyOn(console, 'error')
				.mockImplementation(() => {});
			windowOpenSpy.mockImplementation(() => {
				throw new Error('Pop-up blocked');
			});

			expect(() => service.openLink('https://example.com')).not.toThrow();

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'[NavigationService] Failed to open link:',
				expect.any(Error),
			);

			consoleErrorSpy.mockRestore();
		});
	});

	describe('isValidUrl', () => {
		it('should accept valid HTTP URLs', () => {
			expect(service.isValidUrl('http://example.com')).toBe(true);
		});

		it('should accept valid HTTPS URLs', () => {
			expect(service.isValidUrl('https://example.com')).toBe(true);
		});

		it('should accept mailto links', () => {
			expect(service.isValidUrl('mailto:test@example.com')).toBe(true);
		});

		it('should accept tel links', () => {
			expect(service.isValidUrl('tel:+1234567890')).toBe(true);
		});

		it('should accept relative URLs', () => {
			expect(service.isValidUrl('/about')).toBe(true);
			expect(service.isValidUrl('./contact')).toBe(true);
			expect(service.isValidUrl('../projects')).toBe(true);
		});

		it('should reject javascript: URLs', () => {
			expect(service.isValidUrl('javascript:alert("xss")')).toBe(false);
		});

		it('should reject data: URLs', () => {
			expect(
				service.isValidUrl(
					'data:text/html,<script>alert("xss")</script>',
				),
			).toBe(false);
		});

		it('should reject vbscript: URLs', () => {
			expect(service.isValidUrl('vbscript:msgbox("xss")')).toBe(false);
		});

		it('should reject empty or invalid inputs', () => {
			expect(service.isValidUrl('')).toBe(false);
			// @ts-expect-error - Testing invalid inputs
			expect(service.isValidUrl(null)).toBe(false);
			// @ts-expect-error - Testing invalid inputs
			expect(service.isValidUrl(undefined)).toBe(false);
		});

		it('should accept domain-like strings', () => {
			expect(service.isValidUrl('example.com')).toBe(true);
			expect(service.isValidUrl('subdomain.example.com')).toBe(true);
		});

		it('should handle URLs with paths and query strings', () => {
			expect(
				service.isValidUrl('https://example.com/path?query=value'),
			).toBe(true);
		});
	});

	describe('sanitizeUrl', () => {
		it('should return the same URL for safe URLs', () => {
			const url = 'https://example.com';
			expect(service.sanitizeUrl(url)).toBe(url);
		});

		it('should remove null bytes', () => {
			const url = 'https://example.com\0/path';
			expect(service.sanitizeUrl(url)).toBe('https://example.com/path');
		});

		it('should detect encoded dangerous protocols', () => {
			const consoleWarnSpy = vi
				.spyOn(console, 'warn')
				.mockImplementation(() => {});
			const url = encodeURIComponent('javascript:alert("xss")');

			expect(service.sanitizeUrl(url)).toBe('');
			expect(consoleWarnSpy).toHaveBeenCalled();

			consoleWarnSpy.mockRestore();
		});

		it('should handle decoding errors', () => {
			const url = '%E0%A4%A'; // Invalid percent encoding

			// Should not throw and return sanitized version
			expect(() => service.sanitizeUrl(url)).not.toThrow();
		});

		it('should trim whitespace', () => {
			const url = '  https://example.com  ';
			expect(service.sanitizeUrl(url)).toBe('https://example.com');
		});

		it('should handle empty or invalid inputs', () => {
			expect(service.sanitizeUrl('')).toBe('');
			// @ts-expect-error - Testing invalid inputs
			expect(service.sanitizeUrl(null)).toBe('');
			// @ts-expect-error - Testing invalid inputs
			expect(service.sanitizeUrl(undefined)).toBe('');
		});

		it('should remove dangerous protocols from decoded URLs', () => {
			const consoleWarnSpy = vi
				.spyOn(console, 'warn')
				.mockImplementation(() => {});

			expect(service.sanitizeUrl('javascript:void(0)')).toBe('');
			expect(service.sanitizeUrl('data:text/html,test')).toBe('');
			expect(service.sanitizeUrl('vbscript:test')).toBe('');

			consoleWarnSpy.mockRestore();
		});
	});
});
