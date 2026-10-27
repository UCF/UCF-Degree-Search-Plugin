import type { ProgramType } from '../types.ts';

/**
 * Flattens the program type tree into a slug-to-count lookup, so a
 * card can show how many programs its type has wherever the type sits
 * in the tree.
 */
export function programTypeCounts( programTypes: ProgramType[] ): Map<string, number> {
	const counts = new Map<string, number>();

	const visit = ( type: ProgramType ) => {
		counts.set( type.slug, type.count );
		type.children.forEach( visit );
	};
	programTypes.forEach( visit );

	return counts;
}
