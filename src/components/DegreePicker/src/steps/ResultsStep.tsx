import DegreeCard from '../components/DegreeCard.tsx';
import RequestStatus from '../components/RequestStatus.tsx';
import type { Degree } from '../types.ts';
import type { Request } from '../data/useRequest.ts';
import { countLabel } from '../utils/countLabel.ts';

interface ResultsStepProps {
	request: Request<Degree[]>;
}

/**
 * Last step: every degree that matches the chosen type and interests.
 */
export default function ResultsStep( { request }: ResultsStepProps ) {
	if ( request.status !== 'success' ) {
		return (
			<RequestStatus
				request={ request }
				loadingText="Finding programs…"
				errorText="We couldn’t load programs."
			/>
		);
	}

	const degrees = request.data;

	if ( ! degrees.length ) {
		return (
			<p className="ucf-degree-picker__status">
				No programs match those interests. Try going back and choosing others.
			</p>
		);
	}

	return (
		<>
			<p className="ucf-degree-picker__result-count">
				{ countLabel( degrees.length ) } found
			</p>
			<ul className="ucf-degree-picker__degree-list">
				{ degrees.map( ( degree ) => (
					<li key={ degree.id }>
						<DegreeCard degree={ degree } />
					</li>
				) ) }
			</ul>
		</>
	);
}
