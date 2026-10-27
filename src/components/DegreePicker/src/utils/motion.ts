import type { CSSProperties } from 'react';

/**
 * How long exit animations run. Keep in step with --udp-exit-duration
 * in styles.css; elements stay mounted this long so they can fade out.
 */
export const EXIT_MS = 160;

/**
 * The delay to wait before removing an element, or 0 when the visitor
 * prefers reduced motion (or there is no browser to ask).
 */
export function exitDuration(): number {
	if ( typeof window === 'undefined' || typeof window.matchMedia !== 'function' ) {
		return 0;
	}

	return window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches ? 0 : EXIT_MS;
}

/**
 * Staggers a group's entrance, 30ms apart, so cards arrive in order
 * rather than all at once. Capped at 180ms so long lists stay snappy:
 * with the 200ms entrance, nothing takes longer than 380ms to appear.
 */
export function stagger( index: number ): CSSProperties {
	return { '--udp-delay': `${ Math.min( index, 6 ) * 30 }ms` } as CSSProperties;
}
