/**
 * The shapes the components work with. The data client converts API
 * responses into these, so nothing else depends on the API's format.
 */

export interface ProgramType {
	slug: string;
	name: string;
	plural: string;
	count: number;
	children: ProgramType[];
}

/**
 * A level of study, such as Undergraduate or Graduate, and the
 * program types a visitor can choose within it.
 */
export interface Level {
	slug: string;
	name: string;
	plural: string;
	count: number;
	types: ProgramType[];
}

export interface Interest {
	slug: string;
	name: string;
}

export interface Degree {
	id: number;
	title: string;
	url: string;
}

export interface RequestOptions {
	signal?: AbortSignal;
}

export interface DegreeClient {
	getProgramTypes( options?: RequestOptions ): Promise<ProgramType[]>;
	getInterests( programType: string, options?: RequestOptions ): Promise<Interest[]>;
	getDegrees( programType: string, interests: string[], options?: RequestOptions ): Promise<Degree[]>;
}
