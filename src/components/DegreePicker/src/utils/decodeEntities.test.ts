import { test } from 'node:test';
import assert from 'node:assert/strict';
import { decodeEntities } from './decodeEntities.ts';

test( 'decodes the entities WordPress uses in titles', () => {
	assert.equal( decodeEntities( 'Art &#8211; Studio' ), 'Art – Studio' );
	assert.equal( decodeEntities( 'Arts &#038; Sciences' ), 'Arts & Sciences' );
	assert.equal( decodeEntities( 'Women&#8217;s Studies' ), 'Women’s Studies' );
	assert.equal( decodeEntities( 'Tom &amp; Jerry' ), 'Tom & Jerry' );
	assert.equal( decodeEntities( '&#x41;' ), 'A' );
} );

test( 'leaves unknown entities and plain text alone', () => {
	assert.equal( decodeEntities( '&unknown; text' ), '&unknown; text' );
	assert.equal( decodeEntities( 'No entities' ), 'No entities' );
	assert.equal( decodeEntities( undefined ), '' );
} );
