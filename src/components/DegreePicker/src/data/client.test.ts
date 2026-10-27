import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createClient } from './client.ts';

interface FakeResponse {
	body: unknown;
	totalPages?: number;
	status?: number;
}

/**
 * A fake fetch that answers from a function and records every URL.
 */
function fakeFetch( respond: ( url: URL ) => FakeResponse ) {
	const calls: URL[] = [];
	const fetch = async ( input: string | URL | Request ) => {
		const url = new URL( String( input ) );
		calls.push( url );
		const { body, totalPages = 1, status = 200 } = respond( url );
		return new Response( JSON.stringify( body ), {
			status,
			headers: { 'X-WP-TotalPages': String( totalPages ) },
		} );
	};
	return { fetch: fetch as typeof globalThis.fetch, calls };
}

test( 'getProgramTypes normalizes the tree', async () => {
	const { fetch, calls } = fakeFetch( () => ( {
		body: [
			{
				name: 'Undergraduate Program',
				plural: 'Undergraduate Programs',
				slug: 'undergraduate-program',
				count: 480,
				children: [ { name: 'Bachelor', plural: 'Bachelors', slug: 'bachelor', count: 254, children: [] } ],
			},
			{ name: 'Professional Program', slug: 'professional-program', count: 1 },
		],
	} ) );

	const types = await createClient( { apiRoot: 'https://example.edu/wp-json/', fetch } ).getProgramTypes();

	assert.equal( calls[ 0 ]?.href, 'https://example.edu/wp-json/ucf-degree-search/v1/program-types' );
	assert.deepEqual( types[ 0 ]?.children[ 0 ], {
		slug: 'bachelor', name: 'Bachelor', plural: 'Bachelors', count: 254, children: [],
	} );
	assert.equal( types[ 1 ]?.plural, 'Professional Program', 'falls back to name when plural is missing' );
	assert.deepEqual( types[ 1 ]?.children, [] );
} );

test( 'getInterests filters by program type and sorts by name', async () => {
	const { fetch, calls } = fakeFetch( () => ( {
		body: [
			{ slug: 'biology', name: 'Biology', display_text: 'Biology' },
			{ slug: 'arts', name: 'Arts', display_text: 'Arts &amp; Humanities' },
		],
	} ) );

	const interests = await createClient( { fetch } ).getInterests( 'bachelor' );

	assert.equal( calls[ 0 ]?.searchParams.get( 'program_types' ), 'bachelor' );
	assert.deepEqual( interests, [
		{ slug: 'arts', name: 'Arts & Humanities' },
		{ slug: 'biology', name: 'Biology' },
	] );
} );

test( 'getDegrees loads every page, not just the first', async () => {
	const { fetch, calls } = fakeFetch( ( url ) => {
		const page = Number( url.searchParams.get( 'page' ) );
		return {
			totalPages: 3,
			body: [ { id: page, title: { rendered: `Degree ${ page }` }, link: `https://example.edu/degree/${ page }/` } ],
		};
	} );

	const degrees = await createClient( { fetch } ).getDegrees( 'bachelor', [ 'biology' ] );

	assert.equal( calls.length, 3 );
	assert.deepEqual( degrees.map( ( d ) => d.id ), [ 1, 2, 3 ] );
} );

test( 'getDegrees sends several interests as one comma-separated filter', async () => {
	const { fetch, calls } = fakeFetch( () => ( { body: [] } ) );

	await createClient( { fetch } ).getDegrees( 'bachelor', [ 'anthropology', 'accounting-and-related-services' ] );

	const params = calls[ 0 ]?.searchParams;
	assert.equal( calls[ 0 ]?.pathname, '/wp-json/wp/v2/degrees' );
	assert.equal( params?.get( 'program_types' ), 'bachelor' );
	assert.equal( params?.get( 'interests' ), 'anthropology,accounting-and-related-services' );
	assert.equal( params?.get( 'per_page' ), '100' );
} );

test( 'getDegrees decodes titles and returns normalized records', async () => {
	const { fetch } = fakeFetch( () => ( {
		body: [ {
			id: 64854,
			title: { rendered: 'Anthropology (BA) &#8211; General Track' },
			link: 'https://www.ucf.edu/degree/anthropology-ba/general-track/',
		} ],
	} ) );

	const [ degree ] = await createClient( { fetch } ).getDegrees( 'bachelor', [ 'anthropology' ] );

	assert.deepEqual( degree, {
		id: 64854,
		title: 'Anthropology (BA) – General Track',
		url: 'https://www.ucf.edu/degree/anthropology-ba/general-track/',
	} );
} );

test( 'getDegrees makes no request when no interests are chosen', async () => {
	const { fetch, calls } = fakeFetch( () => ( { body: [] } ) );

	assert.deepEqual( await createClient( { fetch } ).getDegrees( 'bachelor', [] ), [] );
	assert.equal( calls.length, 0 );
} );

test( 'a failed request throws', async () => {
	const { fetch } = fakeFetch( () => ( { status: 404, body: {} } ) );

	await assert.rejects( createClient( { fetch } ).getProgramTypes(), /status 404/ );
} );
