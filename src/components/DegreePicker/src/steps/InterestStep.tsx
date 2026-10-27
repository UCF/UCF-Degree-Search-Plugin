import { useRef, useState, type Dispatch, type SetStateAction } from 'react';
import InterestCombobox from '../components/InterestCombobox.tsx';
import RequestStatus from '../components/RequestStatus.tsx';
import type { Interest } from '../types.ts';
import type { Request } from '../data/useRequest.ts';
import { exitDuration } from '../utils/motion.ts';

interface InterestStepProps {
	request: Request<Interest[]>;
	selected: Interest[];
	onChange: Dispatch<SetStateAction<Interest[]>>;
}

/**
 * Choose one or more interests with a typeahead. Each choice
 * shows as a removable chip.
 */
export default function InterestStep( { request, selected, onChange }: InterestStepProps ) {
	const inputRef = useRef<HTMLInputElement>( null );
	// Chips animating out, by slug. They leave the list once the animation ends.
	const [ removing, setRemoving ] = useState<string[]>( [] );

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
		// The chip's button is going away, so give focus somewhere useful.
		inputRef.current?.focus();

		const drop = () => onChange( ( current ) => current.filter( ( item ) => item.slug !== interest.slug ) );
		const delay = exitDuration();

		if ( ! delay ) {
			drop();
			return;
		}

		setRemoving( ( slugs ) => [ ...slugs, interest.slug ] );
		setTimeout( () => {
			drop();
			setRemoving( ( slugs ) => slugs.filter( ( slug ) => slug !== interest.slug ) );
		}, delay );
	}

	return (
		<div className="ucf-degree-picker__interests">
			<div className="ucf-degree-picker__combobox-layer ucf-degree-picker__motion">
				<InterestCombobox
					ref={ inputRef }
					options={ request.data }
					selected={ selected }
					onAdd={ ( interest ) => onChange( ( current ) => [ ...current, interest ] ) }
				/>
			</div>
			{ selected.length > 0 && (
				<ul className="ucf-degree-picker__chips" aria-label="Selected interests">
					{ selected.map( ( interest ) => {
						const isLeaving = removing.includes( interest.slug );
						return (
							<li
								key={ interest.slug }
								className={ `ucf-degree-picker__chip ucf-degree-picker__motion${
									isLeaving ? ' ucf-degree-picker__motion--exit' : ''
								}` }
							>
								<span>{ interest.name }</span>
								<button
									type="button"
									className="ucf-degree-picker__chip-remove"
									aria-label={ `Remove ${ interest.name }` }
									disabled={ isLeaving }
									onClick={ () => remove( interest ) }
								>
									<span aria-hidden="true">×</span>
								</button>
							</li>
						);
					} ) }
				</ul>
			) }
		</div>
	);
}
