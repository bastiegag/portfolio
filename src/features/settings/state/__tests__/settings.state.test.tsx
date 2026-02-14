import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
	useSettings,
	themes,
	isDaySettings,
	isNightSettings,
} from '../settings.state';
import { renderHookWithProviders } from '../../../../__tests__/helpers/render-with-providers';

describe('Settings State Management', () => {
	describe('SettingsProvider', () => {
		it('should render children without crashing', async () => {
			const { result } = await renderHookWithProviders(() =>
				useSettings(),
			);

			expect(result.current.settings).toBeDefined();
		});

		it('should have correct initial state', async () => {
			const { result } = await renderHookWithProviders(() =>
				useSettings(),
			);

			expect(result.current.settings.time).toBe('day');
			expect(result.current.settings.theme).toBe(themes.day);
		});

		it('should update theme when time changes', async () => {
			const { result } = await renderHookWithProviders(() =>
				useSettings(),
			);

			act(() => {
				result.current.setTime('night');
			});

			expect(result.current.settings.time).toBe('night');
			expect(result.current.settings.theme).toBe(themes.night);
		});

		it('should provide setTime function', async () => {
			const { result } = await renderHookWithProviders(() =>
				useSettings(),
			);

			expect(typeof result.current.setTime).toBe('function');
		});
	});

	describe('useSettings hook', () => {
		it('should throw error when used outside provider', () => {
			expect(() => {
				renderHook(() => useSettings());
			}).toThrow('useSettings must be used within a SettingsProvider');
		});

		it('should return settings context', async () => {
			const { result } = await renderHookWithProviders(() =>
				useSettings(),
			);

			expect(result.current).toHaveProperty('settings');
			expect(result.current).toHaveProperty('setTime');
		});

		it('should have valid theme objects', async () => {
			const { result } = await renderHookWithProviders(() =>
				useSettings(),
			);

			expect(result.current.settings.theme).toBeDefined();
			expect(result.current.settings.theme).toHaveProperty('palette');
		});
	});

	describe('themes constant', () => {
		it('should have day and night themes', () => {
			expect(themes).toHaveProperty('day');
			expect(themes).toHaveProperty('night');
		});

		it('should have valid theme structures', () => {
			expect(themes.day).toHaveProperty('palette');
			expect(themes.night).toHaveProperty('palette');
		});
	});

	describe('Type guards', () => {
		it('should correctly identify day settings', async () => {
			const { result } = await renderHookWithProviders(() =>
				useSettings(),
			);

			expect(isDaySettings(result.current.settings)).toBe(true);
			expect(isNightSettings(result.current.settings)).toBe(false);
		});

		it('should correctly identify night settings', async () => {
			const { result } = await renderHookWithProviders(() =>
				useSettings(),
			);

			act(() => {
				result.current.setTime('night');
			});

			expect(isNightSettings(result.current.settings)).toBe(true);
			expect(isDaySettings(result.current.settings)).toBe(false);
		});
	});
});
