import ChoiceCards from '../components/ChoiceCards.tsx';
import RequestStatus from '../components/RequestStatus.tsx';
import type { Request } from '../data/useRequest.ts';
import type { Level } from '../types.ts';
import { countLabel } from '../utils/countLabel.ts';

interface LevelStepProps {
	request: Request<Level[]>;
	selected: Level | null;
	onSelect: ( level: Level ) => void;
	headingId: string;
}

/**
 * Step 1: Undergraduate or Graduate.
 */
export default function LevelStep( { request, selected, onSelect, headingId }: LevelStepProps ) {
	if ( request.status !== 'success' ) {
		return (
			<RequestStatus
				request={ request }
				loadingText="Loading programs…"
				errorText="We couldn’t load programs."
			/>
		);
	}

	const levels = request.data;

	return (
		<ChoiceCards
			size="large"
			labelledBy={ headingId }
			choices={ levels.map( ( level ) => ( {
				slug: level.slug,
				title: level.plural,
				detail: countLabel( level.count ),
			} ) ) }
			selected={ selected?.slug ?? null }
			onSelect={ ( slug ) => {
				const level = levels.find( ( item ) => item.slug === slug );
				if ( level ) {
					onSelect( level );
				}
			} }
		/>
	);
}
