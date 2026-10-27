import { useEffect, useId, useMemo, useRef, useState } from 'react';
import ProgressBar from './components/ProgressBar.tsx';
import { createClient } from './data/client.ts';
import { useRequest } from './data/useRequest.ts';
import { DEFAULTS } from './defaults.ts';
import InterestStep from './steps/InterestStep.tsx';
import ProgramTypeStep from './steps/ProgramTypeStep.tsx';
import ResultsStep from './steps/ResultsStep.tsx';
import type { DegreeClient, Interest, ProgramTypeOption } from './types.ts';
import { programTypeCounts } from './utils/programTypeCounts.ts';
import { buildSearchUrl } from './utils/searchUrl.ts';

export interface DegreePickerProps {
	/** The WordPress REST API root that serves degree data. */
	apiRoot?: string;
	/** The degree search page that "Explore our Programs" links to. */
	searchUrl?: string;
	/** The choices on the first step. Defaults to Bachelors, Masters and Doctorates. */
	programTypes?: readonly ProgramTypeOption[];
	/**
	 * A program type slug, such as "master", when the page already
	 * answers the first question. The picker then skips that step.
	 */
	programType?: string;
	/** Replaces the data client, e.g. with sample data in a preview or story. */
	client?: DegreeClient;
}

type StepKey = 'programType' | 'interests' | 'results';

/**
 * A degree picker: degree type, then interests, then the matching
 * degrees. When the page already knows the degree type, pass it as
 * `programType` and the picker starts at interests.
 *
 * Plain React with no WordPress dependencies, so the same component
 * runs in the block editor, on the public page and in Puck.
 */
export default function DegreePicker( {
	apiRoot = DEFAULTS.apiRoot,
	searchUrl = DEFAULTS.searchUrl,
	programTypes = DEFAULTS.programTypes,
	programType: presetType,
	client: clientProp,
}: DegreePickerProps ) {
	const client = useMemo( () => clientProp ?? createClient( { apiRoot } ), [ clientProp, apiRoot ] );
	const [ step, setStep ] = useState( 0 );
	const [ chosenType, setChosenType ] = useState<string | null>( null );
	const [ interests, setInterests ] = useState<Interest[]>( [] );

	const id = useId();
	const headingId = `${ id }-heading`;
	const hintId = `${ id }-hint`;
	const headingRef = useRef<HTMLHeadingElement>( null );
	const hasMoved = useRef( false );

	const stepKeys: StepKey[] = presetType ? [ 'interests', 'results' ] : [ 'programType', 'interests', 'results' ];
	const stepIndex = Math.min( step, stepKeys.length - 1 );
	const currentKey = stepKeys[ stepIndex ] ?? 'interests';
	const programType = presetType ?? chosenType;
	const interestSlugs = interests.map( ( interest ) => interest.slug );

	// If the preset changes, e.g. while an editor adjusts the block, start over.
	useEffect( () => {
		setStep( 0 );
		setChosenType( null );
		setInterests( [] );
	}, [ presetType ] );

	// Counts for the first step's cards. Not needed when the type is preset.
	const counts = useRequest(
		presetType ? null : async ( signal ) => programTypeCounts( await client.getProgramTypes( { signal } ) ),
		[ client, presetType ]
	);

	// Starts loading as soon as a type is picked, before the visitor continues.
	const interestOptions = useRequest(
		programType ? ( signal ) => client.getInterests( programType, { signal } ) : null,
		[ client, programType ]
	);

	const isResults = currentKey === 'results';
	const degrees = useRequest(
		isResults && programType
			? ( signal ) => client.getDegrees( programType, interestSlugs, { signal } )
			: null,
		[ client, isResults, programType, interestSlugs.join( ',' ) ]
	);

	// Move focus to the new step's heading, so keyboard and screen-reader
	// users land on it. Skip the first render, so the page doesn't jump.
	useEffect( () => {
		if ( hasMoved.current ) {
			headingRef.current?.focus();
		}
	}, [ stepIndex ] );

	function goTo( next: number ) {
		hasMoved.current = true;
		setStep( next );
	}

	function selectProgramType( slug: string ) {
		if ( slug !== chosenType ) {
			setChosenType( slug );
			// Interests belong to a degree type, so a new type starts fresh.
			setInterests( [] );
		}
	}

	// Button labels name the next step, per the UCF brand's web guidance.
	const stepContent: Record<StepKey, { heading: string; canContinue: boolean; hint: string; nextLabel: string }> = {
		programType: {
			heading: 'What type of degree are you looking for?',
			canContinue: chosenType !== null,
			hint: 'Choose a degree type to continue.',
			nextLabel: 'Choose Interests',
		},
		interests: {
			heading: 'What are you interested in?',
			canContinue: interests.length > 0,
			hint: 'Choose at least one interest to continue.',
			nextLabel: 'See Matching Programs',
		},
		results: {
			heading: 'Programs that match your interests',
			canContinue: false,
			hint: '',
			nextLabel: '',
		},
	};

	const current = stepContent[ currentKey ];
	const isLast = stepIndex === stepKeys.length - 1;

	return (
		<div className="ucf-degree-picker">
			<h2 id={ headingId } ref={ headingRef } tabIndex={ -1 } className="ucf-degree-picker__heading">
				<span className="ucf-degree-picker__visually-hidden">
					Step { stepIndex + 1 } of { stepKeys.length }:{ ' ' }
				</span>
				{ current.heading }
			</h2>

			<div className="ucf-degree-picker__body">
				{ currentKey === 'programType' && (
					<ProgramTypeStep
						options={ programTypes }
						counts={ counts.status === 'success' ? counts.data : null }
						selected={ chosenType }
						onSelect={ selectProgramType }
						headingId={ headingId }
					/>
				) }
				{ currentKey === 'interests' && (
					<InterestStep request={ interestOptions } selected={ interests } onChange={ setInterests } />
				) }
				{ isResults && <ResultsStep request={ degrees } /> }
			</div>

			<div className="ucf-degree-picker__footer">
				<div className="ucf-degree-picker__nav">
					{ stepIndex > 0 && (
						<button
							type="button"
							className="ucf-degree-picker__button ucf-degree-picker__button--secondary"
							onClick={ () => goTo( stepIndex - 1 ) }
						>
							Back
						</button>
					) }
					{ ! isLast && (
						<button
							type="button"
							className="ucf-degree-picker__button"
							// aria-disabled, not disabled, so the button stays reachable
							// and screen readers can say why it's inactive.
							aria-disabled={ ! current.canContinue }
							aria-describedby={ current.canContinue ? undefined : hintId }
							onClick={ () => current.canContinue && goTo( stepIndex + 1 ) }
						>
							{ current.nextLabel }
						</button>
					) }
					{ ! isLast && ! current.canContinue && (
						<p id={ hintId } className="ucf-degree-picker__hint">{ current.hint }</p>
					) }
				</div>

				<a
					className="ucf-degree-picker__explore"
					href={ buildSearchUrl( {
						baseUrl: searchUrl,
						programType: programType ?? undefined,
						interests: interestSlugs,
					} ) }
				>
					Explore our Programs
				</a>

				<ProgressBar current={ stepIndex + 1 } total={ stepKeys.length } />
			</div>
		</div>
	);
}
