import { DEFAULTS } from '../defaults.ts';

export interface SearchUrlOptions {
	baseUrl?: string;
	programType?: string;
	/** Not used yet: degree search has no interests filter. */
	interests?: string[];
}

/**
 * Builds the "Explore our Programs" link from what the visitor has
 * chosen so far. This is the only code that knows the degree search
 * URL format.
 *
 * Degree search has no interests filter yet, so interests are
 * accepted but not used. When the filter exists, add it here.
 */
export function buildSearchUrl( { baseUrl = DEFAULTS.searchUrl, programType }: SearchUrlOptions = {} ): string {
	const base = baseUrl.endsWith( '/' ) ? baseUrl : `${ baseUrl }/`;

	if ( ! programType ) {
		return base;
	}

	return `${ base }${ encodeURIComponent( programType ) }/`;
}
