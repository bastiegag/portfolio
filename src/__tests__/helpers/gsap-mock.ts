import { vi } from 'vitest';

/**
 * Mock GSAP for predictable animation testing
 * Returns controllable timeline with progress() method
 */

interface MockTimelineInstance {
	fromTo: () => MockTimelineInstance;
	to: () => MockTimelineInstance;
	from: () => MockTimelineInstance;
	progress: (value?: number) => number | MockTimelineInstance;
	play: () => MockTimelineInstance;
	pause: () => MockTimelineInstance;
	kill: () => void;
	seek?: (value: number) => MockTimelineInstance;
	yoyo?: (_v?: unknown) => MockTimelineInstance;
}

const createMockTimeline = (): MockTimelineInstance => {
	let currentProgress = 0;

	const timeline: MockTimelineInstance = {
		fromTo: () => timeline,
		to: () => timeline,
		from: () => timeline,
		progress: (value?: number) => {
			if (value !== undefined) {
				currentProgress = value;
				return timeline;
			}
			return currentProgress;
		},
		play: () => timeline,
		pause: () => timeline,
		kill: vi.fn(),
		seek: (v: number) => {
			currentProgress = v;
			return timeline;
		},
		yoyo: () => timeline,
	};

	return timeline;
};

export const gsapMock = {
	quickTo: vi.fn(() => vi.fn()),
	to: vi.fn(() => createMockTimeline()),
	from: vi.fn(() => createMockTimeline()),
	fromTo: vi.fn(() => createMockTimeline()),
	timeline: vi.fn(() => createMockTimeline()),
	set: vi.fn(),
	killTweensOf: vi.fn(),
	registerPlugin: vi.fn(),
	context: vi.fn(() => ({
		add: vi.fn(),
		revert: vi.fn(),
	})),
	utils: {
		random: vi.fn((a: number, b: number) => (a + b) / 2),
	},
};

export const ScrollTriggerMock = {
	create: vi.fn(() => ({ kill: vi.fn() })),
	refresh: vi.fn(),
	update: vi.fn(),
	getAll: vi.fn(() => []),
	kill: vi.fn(),
};

/**
 * Setup GSAP mocks for tests
 * Call this in beforeEach or at the start of tests using GSAP
 */
export const setupGsapMocks = () => {
	vi.mock('gsap', () => ({
		default: gsapMock,
		gsap: gsapMock,
	}));

	vi.mock('gsap/ScrollTrigger', () => ({
		ScrollTrigger: ScrollTriggerMock,
	}));
};

/**
 * Reset all GSAP mocks
 * Call this in afterEach to clean up
 */
export const resetGsapMocks = () => {
	vi.clearAllMocks();
};
