import { test } from 'node:test';
import assert from 'node:assert/strict';
import { programTypeCounts } from './programTypeCounts.ts';
import type { ProgramType } from '../types.ts';

const type = ( slug: string, count: number, children: ProgramType[] = [] ): ProgramType => ( {
	slug,
	name: slug,
	plural: `${ slug }s`,
	count,
	children,
} );

test( 'finds counts at any depth of the tree', () => {
	const counts = programTypeCounts( [
		type( 'undergraduate-program', 480, [ type( 'bachelor', 254 ), type( 'minor', 143 ) ] ),
		type( 'graduate-program', 429, [ type( 'master', 233 ), type( 'doctorate', 87 ) ] ),
		type( 'professional-program', 1 ),
	] );

	assert.equal( counts.get( 'bachelor' ), 254 );
	assert.equal( counts.get( 'master' ), 233 );
	assert.equal( counts.get( 'doctorate' ), 87 );
	assert.equal( counts.get( 'professional-program' ), 1 );
	assert.equal( counts.get( 'missing' ), undefined );
} );
