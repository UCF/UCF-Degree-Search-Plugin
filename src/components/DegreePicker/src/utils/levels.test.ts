import { test } from 'node:test';
import assert from 'node:assert/strict';
import { groupLevels } from './levels.ts';
import type { ProgramType } from '../types.ts';

const type = ( slug: string, count: number, children: ProgramType[] = [] ): ProgramType => ( {
	slug,
	name: slug,
	plural: `${ slug }s`,
	count,
	children,
} );

const tree = [
	type( 'undergraduate-program', 480, [ type( 'bachelor', 254 ), type( 'minor', 143 ), type( 'undergraduate-certificate', 83 ) ] ),
	type( 'graduate-program', 429, [ type( 'master', 233 ), type( 'doctorate', 87 ), type( 'graduate-certificate', 106 ), type( 'specialist', 3 ) ] ),
	type( 'professional-program', 1 ),
];

test( 'offers Undergraduate and Graduate as the two levels', () => {
	assert.deepEqual( groupLevels( tree ).map( ( level ) => level.slug ), [ 'undergraduate-program', 'graduate-program' ] );
} );

test( 'lists Professional Program as a graduate program type', () => {
	const graduate = groupLevels( tree )[ 1 ];

	assert.deepEqual( graduate?.types.map( ( t ) => t.slug ), [
		'master', 'doctorate', 'graduate-certificate', 'specialist', 'professional-program',
	] );
	assert.equal( graduate?.count, 430 );
} );

test( 'keeps a merged type as its own level if its target is missing', () => {
	const levels = groupLevels( [ type( 'professional-program', 1 ) ] );

	assert.deepEqual( levels.map( ( level ) => level.slug ), [ 'professional-program' ] );
	assert.deepEqual( levels[ 0 ]?.types.map( ( t ) => t.slug ), [ 'professional-program' ] );
} );

test( 'does not change the tree it was given', () => {
	const before = JSON.stringify( tree );
	groupLevels( tree );
	assert.equal( JSON.stringify( tree ), before );
} );
