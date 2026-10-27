import type { Level, ProgramType } from '../types.ts';

/**
 * Top-level program types that we present under another level.
 * Professional programs are graduate-level study, so they appear
 * as a choice under Graduate.
 */
const MERGE_INTO: Record<string, string> = {
	'professional-program': 'graduate-program',
};

/**
 * Turns the program type tree into the levels shown on the first
 * step, each with the program types offered on the second.
 */
export function groupLevels( programTypes: ProgramType[] ): Level[] {
	const typesOf = ( type: ProgramType ) => ( type.children.length ? type.children : [ type ] );

	const levels = programTypes
		.filter( ( type ) => ! Object.hasOwn( MERGE_INTO, type.slug ) )
		.map( ( type ) => ( {
			slug: type.slug,
			name: type.name,
			plural: type.plural,
			types: [ ...typesOf( type ) ],
		} ) );

	for ( const type of programTypes ) {
		const targetSlug = MERGE_INTO[ type.slug ];
		if ( ! targetSlug ) {
			continue;
		}

		const target = levels.find( ( level ) => level.slug === targetSlug );
		if ( target ) {
			target.types.push( ...typesOf( type ) );
		} else {
			// The target level is missing from the data, so keep this one on its own.
			levels.push( { slug: type.slug, name: type.name, plural: type.plural, types: [ ...typesOf( type ) ] } );
		}
	}

	return levels.map( ( level ) => ( {
		...level,
		count: level.types.reduce( ( sum, type ) => sum + type.count, 0 ),
	} ) );
}
