import type { Request } from '../data/useRequest.ts';

interface RequestStatusProps {
	request: Request<unknown>;
	loadingText: string;
	errorText: string;
}

/**
 * Shows loading and error states for a request made with useRequest.
 * Renders nothing once the request succeeds.
 */
export default function RequestStatus( { request, loadingText, errorText }: RequestStatusProps ) {
	if ( request.status === 'loading' ) {
		return <p className="ucf-degree-picker__status ucf-degree-picker__motion" role="status">{ loadingText }</p>;
	}

	if ( request.status === 'error' ) {
		return (
			<div className="ucf-degree-picker__status ucf-degree-picker__status--error ucf-degree-picker__motion" role="alert">
				<p>{ errorText }</p>
				<button type="button" className="ucf-degree-picker__button" onClick={ request.retry }>
					Try again
				</button>
			</div>
		);
	}

	return null;
}
