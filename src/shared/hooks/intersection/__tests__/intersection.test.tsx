import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useIntersectionObserver } from '../useIntersectionObserver';
import { useLazyLoad } from '../useLazyLoad';

// Mock IntersectionObserver
class MockIntersectionObserver {
	callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;
	elements: Element[] = [];

	constructor(callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void) {
		this.callback = callback;
	}

	observe(element: Element) {
		this.elements.push(element);
	}

	unobserve(element: Element) {
		this.elements = this.elements.filter((el) => el !== element);
	}

	disconnect() {
		this.elements = [];
	}

	triggerIntersection(isIntersecting: boolean) {
		const entries: IntersectionObserverEntry[] = this.elements.map((element) => ({
			isIntersecting,
			target: element,
			boundingClientRect: element.getBoundingClientRect(),
			intersectionRatio: isIntersecting ? 1 : 0,
			intersectionRect: element.getBoundingClientRect(),
			rootBounds: null,
			time: Date.now(),
		}));

		this.callback(entries, this as unknown as IntersectionObserver);
	}
}

describe('useIntersection Observer', () => {
	let mockObserver: MockIntersectionObserver;

	beforeEach(() => {
		// Create mock observer instance
		mockObserver = new MockIntersectionObserver(() => {});
		
		// Setup mock constructor
		globalThis.Inter sectionObserver = vi.fn((callback) => {
			mockObserver.callback = callback;
			return mockObserver as unknown as IntersectionObserver;
		}) as unknown as typeof IntersectionObserver;
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should initialize with not intersecting', () => {
		const { result } = renderHook(() => useIntersectionObserver());
		const [, isIntersecting] = result.current;

		expect(isIntersecting).toBe(false);
	});

	it('should observe element when ref is set', () => {
		const { result } = renderHook(() => useIntersectionObserver());
		const [setRef] = result.current;

		const element = document.createElement('div');

		act(() => {
			setRef(element);
		});

		expect(mockObserver.elements).toContain(element);
	});

	it('should update intersection state when element becomes visible', () => {
		const { result } = renderHook(() => useIntersectionObserver());
		const [setRef] = result.current;

		const element = document.createElement('div');

		act(() => {
			setRef(element);
		});

		act(() => {
			mockObserver.triggerIntersection(true);
		});

		const [, isIntersecting] = result.current;
		expect(isIntersecting).toBe(true);
	});

	it('should freeze after first intersection when freezeOnceVisible is true', () => {
		const { result } = renderHook(() =>
			useIntersectionObserver({ freezeOnceVisible: true }),
		);
		const [setRef] = result.current;

		const element = document.createElement('div');

		act(() => {
			setRef(element);
		});

		// Trigger visible
		act(() => {
			mockObserver.triggerIntersection(true);
		});

		const [, isIntersectingAfterTrue] = result.current;
		expect(isIntersectingAfterTrue).toBe(true);

		// Trigger not visible (should stay true due to freeze)
		act(() => {
			mockObserver.triggerIntersection(false);
		});

		const [, isIntersectingAfterFalse] = result.current;
		expect(isIntersectingAfterFalse).toBe(true);
	});

	it('should not observe when enabled is false', () => {
		const { result } = renderHook(() =>
			useIntersectionObserver({ enabled: false }),
		);
		const [setRef] = result.current;

		const element = document.createElement('div');

		act(() => {
			setRef(element);
		});

		expect(mockObserver.elements).not.toContain(element);
	});

	it('should cleanup observer on unmount', () => {
		const { result, unmount } = renderHook(() => useIntersectionObserver());
		const [setRef] = result.current;

		const element = document.createElement('div');

		act(() => {
			setRef(element);
		});

		const disconnectSpy = vi.spyOn(mockObserver, 'disconnect');

		unmount();

		expect(disconnectSpy).toHaveBeenCalled();
	});

	it('should handle observer creation errors gracefully', () => {
		const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

		// Force IntersectionObserver to throw
		globalThis.IntersectionObserver = vi.fn(() => {
			throw new Error('Observer creation failed');
		}) as unknown as typeof IntersectionObserver;

		const { result } = renderHook(() => useIntersectionObserver());
		const [setRef] = result.current;

		const element = document.createElement('div');

		// Should not throw
		expect(() => {
			act(() => {
				setRef(element);
			});
		}).not.toThrow();

		consoleErrorSpy.mockRestore();
	});
});

describe('useLazyLoad', () => {
	let mockObserver: MockIntersectionObserver;

	beforeEach(() => {
		// Create mock observer instance
		mockObserver = new MockIntersectionObserver(() => {});
		
		// Setup mock constructor
		globalThis.IntersectionObserver = vi.fn((callback) => {
			mockObserver.callback = callback;
			return mockObserver as unknown as IntersectionObserver;
		}) as unknown as typeof IntersectionObserver;
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it('should initialize with shouldRender false', () => {
		const { result } = renderHook(() => useLazyLoad());
		const [, shouldRender] = result.current;

		expect(shouldRender).toBe(false);
	});

	it('should set shouldRender to true when element is visible', () => {
		const { result } = renderHook(() => useLazyLoad());
		const [setRef] = result.current;

		const element = document.createElement('div');

		act(() => {
			setRef(element);
		});

		act(() => {
			mockObserver.triggerIntersection(true);
		});

		const [, shouldRender] = result.current;
		expect(shouldRender).toBe(true);
	});

	it('should use default rootMargin of 200px', () => {
		const { result } = renderHook(() => useLazyLoad());
		const [setRef] = result.current;

		// Attach element to trigger observer creation
		const element = document.createElement('div');
		act(() => {
			setRef(element);
		});

		expect(globalThis.IntersectionObserver).toHaveBeenCalledWith(
			expect.any(Function),
			expect.objectContaining({
				rootMargin: '200px',
			}),
		);
	});

	it('should accept custom rootMargin', () => {
		const { result } = renderHook(() => useLazyLoad({ rootMargin: '500px' }));
		const [setRef] = result.current;

		// Attach element to trigger observer creation
		const element = document.createElement('div');
		act(() => {
			setRef(element);
		});

		expect(globalThis.IntersectionObserver).toHaveBeenCalledWith(
			expect.any(Function),
			expect.objectContaining({
				rootMargin: '500px',
			}),
		);
	});

	it('should freeze after first visibility', () => {
		const { result } = renderHook(() => useLazyLoad());
		const [setRef] = result.current;

		const element = document.createElement('div');

		act(() => {
			setRef(element);
		});

		// Make visible
		act(() => {
			mockObserver.triggerIntersection(true);
		});

		const [, shouldRenderAfterTrue] = result.current;
		expect(shouldRenderAfterTrue).toBe(true);

		// Make not visible (should stay true)
		act(() => {
			mockObserver.triggerIntersection(false);
		});

		const [, shouldRenderAfterFalse] = result.current;
		expect(shouldRenderAfterFalse).toBe(true);
	});

	it('should respect enabled option', () => {
		const { result } = renderHook(() => useLazyLoad({ enabled: false }));
		const [setRef] = result.current;

		const element = document.createElement('div');

		act(() => {
			setRef(element);
		});

		expect(mockObserver.elements).not.toContain(element);
	});
});
