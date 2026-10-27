import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSearchUrl } from './searchUrl.ts';

test( 'links to degree search when nothing is chosen', () => {
	assert.equal( buildSearchUrl(), 'https://www.ucf.edu/degree-search/' );
} );

test( 'adds the program type as a path segment', () => {
	assert.equal(
		buildSearchUrl( { programType: 'bachelor' } ),
		'https://www.ucf.edu/degree-search/bachelor/'
	);
} );

test( 'accepts a base URL with or without a trailing slash', () => {
	assert.equal(
		buildSearchUrl( { baseUrl: 'https://example.edu/search', programType: 'minor' } ),
		'https://example.edu/search/minor/'
	);
} );

test( 'ignores interests until degree search can filter on them', () => {
	assert.equal(
		buildSearchUrl( { programType: 'bachelor', interests: [ 'biology' ] } ),
		'https://www.ucf.edu/degree-search/bachelor/'
	);
} );
