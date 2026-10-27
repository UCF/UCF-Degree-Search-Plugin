import { useEffect, useState, type DependencyList } from 'react';

export type RequestState<T> =
	| { status: 'idle' | 'loading'; data: null; error: null }
	| { status: 'success'; data: T; error: null }
	| { status: 'error'; data: null; error: Error };

export type Request<T> = RequestState<T> & { retry: () => void };

/**
 * Runs an async load function whenever its dependencies change, and
 * cancels the previous request when they do. Pass null to make no
 * request. Runs only in the browser, so it is safe during server
 * rendering.
 */
export function useRequest<T>(
	load: ( ( signal: AbortSignal ) => Promise<T> ) | null,
	deps: DependencyList
): Request<T> {
	const [ state, setState ] = useState<RequestState<T>>( { status: 'loading', data: null, error: null } );
	const [ attempt, setAttempt ] = useState( 0 );

	useEffect( () => {
		if ( ! load ) {
			setState( { status: 'idle', data: null, error: null } );
			return undefined;
		}

		const controller = new AbortController();
		setState( { status: 'loading', data: null, error: null } );

		load( controller.signal ).then(
			( data ) => {
				if ( ! controller.signal.aborted ) {
					setState( { status: 'success', data, error: null } );
				}
			},
			( error: unknown ) => {
				if ( ! controller.signal.aborted ) {
					setState( {
						status: 'error',
						data: null,
						error: error instanceof Error ? error : new Error( String( error ) ),
					} );
				}
			}
		);

		return () => controller.abort();
		// The caller's deps decide when to reload, not the identity of load.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ ...deps, attempt ] );

	return { ...state, retry: () => setAttempt( ( n ) => n + 1 ) };
}
