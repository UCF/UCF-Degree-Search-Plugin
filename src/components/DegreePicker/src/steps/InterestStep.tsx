import { useRef } from 'react';
import InterestCombobox from '../components/InterestCombobox.tsx';
import RequestStatus from '../components/RequestStatus.tsx';
import type { Interest } from '../types.ts';
import type { Request } from '../data/useRequest.ts';

interface InterestStepProps {
	request: Request<Interest[]>;
	selected: Interest[];
	onChange: ( interests: Interest[] ) => void;
}

/**
 * Step 3: choose one or more interests with a typeahead. Each choice
 * shows as a removable chip.
 */
export default function InterestStep( { request, selected, onChange }: InterestStepProps ) {
	const inputRef = useRef<HTMLInputElement>( null );

	if ( request.status !== 'success' ) {
		return (
			<RequestStatus
				request={ request }
				loadingText="Loading interests…"
				errorText="We couldn’t load interests."
			/>
		);
	}

	function remove( interest: Interest ) {
		onChange( selected.filter( ( item ) => item.slug !== interest.slug ) );
		// The chip's button is gone, so give focus somewhere useful.
		inputRef.current?.focus();
	}

	return (
		<div className="ucf-degree-picker__interests">
			<InterestCombobox
				ref={ inputRef }
				options={ request.data }
				selected={ selected }
				onAdd={ ( interest ) => onChange( [ ...selected, interest ] ) }
			/>
			{ selected.length > 0 && (
				<ul className="ucf-degree-picker__chips" aria-label="Selected interests">
					{ selected.map( ( interest ) => (
						<li key={ interest.slug } className="ucf-degree-picker__chip">
							<span>{ interest.name }</span>
							<button
								type="button"
								className="ucf-degree-picker__chip-remove"
								aria-label={ `Remove ${ interest.name }` }
								onClick={ () => remove( interest ) }
							>
								<span aria-hidden="true">×</span>
							</button>
						</li>
					) ) }
				</ul>
			) }
		</div>
	);
}
