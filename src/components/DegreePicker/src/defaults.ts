/**
 * Default props for the degree picker. The WordPress block and any
 * future Puck config should read their defaults from here, so the
 * three never disagree.
 */
export const DEFAULTS = Object.freeze( {
	// The WordPress REST API root. The client calls two namespaces
	// under it: ucf-degree-search/v1 and wp/v2.
	apiRoot: 'https://www.ucf.edu/wp-json/',

	// The degree search page that "Explore our Programs" links to.
	searchUrl: 'https://www.ucf.edu/degree-search/',
} );
