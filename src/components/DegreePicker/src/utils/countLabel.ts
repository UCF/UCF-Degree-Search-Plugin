/**
 * "1 program", "254 programs".
 */
export function countLabel( count: number ): string {
	return `${ count } ${ count === 1 ? 'program' : 'programs' }`;
}
