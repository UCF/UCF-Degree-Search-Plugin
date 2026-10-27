import DegreeCard from '../components/DegreeCard.tsx';
import RequestStatus from '../components/RequestStatus.tsx';
import type { Degree } from '../types.ts';
import type { Request } from '../data/useRequest.ts';
import { countLabel } from '../utils/countLabel.ts';
import { stagger } from '../utils/motion.ts';

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
			<p className="ucf-degree-picker__status ucf-degree-picker__motion">
				No programs match those interests. Try going back and choosing others.
			</p>
		);
	}

	return (
		<>
			<p className="ucf-degree-picker__result-count ucf-degree-picker__motion">
				{ countLabel( degrees.length ) } found
			</p>
			<ul className="ucf-degree-picker__degree-list">
				{ degrees.map( ( degree, i ) => (
					<li key={ degree.id } className="ucf-degree-picker__motion" style={ stagger( i ) }>
						<DegreeCard degree={ degree } />
					</li>
				) ) }
			</ul>
		</>
	);
}
