import { useEffect, useId, useMemo, useRef, useState } from 'react';
import ProgressBar from './components/ProgressBar.tsx';
import { createClient } from './data/client.ts';
import { useRequest } from './data/useRequest.ts';
import { DEFAULTS } from './defaults.ts';
import InterestStep from './steps/InterestStep.tsx';
import LevelStep from './steps/LevelStep.tsx';
import ProgramTypeStep from './steps/ProgramTypeStep.tsx';
import ResultsStep from './steps/ResultsStep.tsx';
import type { DegreeClient, Interest, Level, ProgramType } from './types.ts';
import { groupLevels } from './utils/levels.ts';
import { buildSearchUrl } from './utils/searchUrl.ts';

export interface DegreePickerProps {
	/** The WordPress REST API root that serves degree data. */
	apiRoot?: string;
	/** The degree search page that "Explore our Programs" links to. */
	searchUrl?: string;
	/** Replaces the data client, e.g. with sample data in a preview or story. */
	client?: DegreeClient;
}

const STEP = {
	level: 0,
	programType: 1,
	interests: 2,
	results: 3,
} as const;

const STEP_COUNT = 4;

/**
 * A four-step degree picker: level, then degree type, then interests,
 * then the matching degrees. Plain React with no WordPress
 * dependencies, so the same component runs in the block editor, on
 * the public page and in Puck.
 */
export default function DegreePicker( {
	apiRoot = DEFAULTS.apiRoot,
	searchUrl = DEFAULTS.searchUrl,
	client: clientProp,
}: DegreePickerProps ) {
	const client = useMemo( () => clientProp ?? createClient( { apiRoot } ), [ clientProp, apiRoot ] );
	const [ step, setStep ] = useState<number>( STEP.level );
	const [ level, setLevel ] = useState<Level | null>( null );
	const [ programType, setProgramType ] = useState<ProgramType | null>( null );
	const [ interests, setInterests ] = useState<Interest[]>( [] );

	const id = useId();
	const headingId = `${ id }-heading`;
	const hintId = `${ id }-hint`;
	const headingRef = useRef<HTMLHeadingElement>( null );
	const hasMoved = useRef( false );

	const interestSlugs = interests.map( ( interest ) => interest.slug );

	const levels = useRequest(
		async ( signal ) => groupLevels( await client.getProgramTypes( { signal } ) ),
		[ client ]
	);

	// Starts loading as soon as a type is picked, before Next is pressed.
	const interestOptions = useRequest(
		programType ? ( signal ) => client.getInterests( programType.slug, { signal } ) : null,
		[ client, programType?.slug ]
	);

	const isResults = step === STEP.results;
	const degrees = useRequest(
		isResults && programType
			? ( signal ) => client.getDegrees( programType.slug, interestSlugs, { signal } )
			: null,
		[ client, isResults, programType?.slug, interestSlugs.join( ',' ) ]
	);

	// Move focus to the new step's heading, so keyboard and screen-reader
	// users land on it. Skip the first render, so the page doesn't jump.
	useEffect( () => {
		if ( hasMoved.current ) {
			headingRef.current?.focus();
		}
	}, [ step ] );

	function goTo( next: number ) {
		hasMoved.current = true;
		setStep( next );
	}

	// Each choice narrows the next, so changing one clears what follows it.
	function selectLevel( next: Level ) {
		if ( next.slug !== level?.slug ) {
			setLevel( next );
			setProgramType( null );
			setInterests( [] );
		}
	}

	function selectProgramType( next: ProgramType ) {
		if ( next.slug !== programType?.slug ) {
			setProgramType( next );
			setInterests( [] );
		}
	}

	// Button labels name the next step, per the UCF brand's web guidance.
	const steps = [
		{
			heading: 'What level of degree are you looking for?',
			canContinue: level !== null,
			hint: 'Choose a level to continue.',
			nextLabel: 'Choose Degree Type',
		},
		{
			heading: `Which type of ${ level?.name.toLowerCase() ?? 'program' }?`,
			canContinue: programType !== null,
			hint: 'Choose a degree type to continue.',
			nextLabel: 'Choose Interests',
		},
		{
			heading: 'What are you interested in?',
			canContinue: interests.length > 0,
			hint: 'Choose at least one interest to continue.',
			nextLabel: 'See Matching Programs',
		},
		{
			heading: 'Programs that match your interests',
			canContinue: false,
			hint: '',
			nextLabel: '',
		},
	];

	const current = steps[ step ] ?? steps[ 0 ]!;
	const isLast = step === STEP_COUNT - 1;

	return (
		<div className="ucf-degree-picker">
			<h2 id={ headingId } ref={ headingRef } tabIndex={ -1 } className="ucf-degree-picker__heading">
				<span className="ucf-degree-picker__visually-hidden">
					Step { step + 1 } of { STEP_COUNT }:{ ' ' }
				</span>
				{ current.heading }
			</h2>

			<div className="ucf-degree-picker__body">
				{ step === STEP.level && (
					<LevelStep request={ levels } selected={ level } onSelect={ selectLevel } headingId={ headingId } />
				) }
				{ step === STEP.programType && level && (
					<ProgramTypeStep
						level={ level }
						selected={ programType }
						onSelect={ selectProgramType }
						headingId={ headingId }
					/>
				) }
				{ step === STEP.interests && (
					<InterestStep request={ interestOptions } selected={ interests } onChange={ setInterests } />
				) }
				{ isResults && <ResultsStep request={ degrees } /> }
			</div>

			<div className="ucf-degree-picker__footer">
				<div className="ucf-degree-picker__nav">
					{ step > 0 && (
						<button
							type="button"
							className="ucf-degree-picker__button ucf-degree-picker__button--secondary"
							onClick={ () => goTo( step - 1 ) }
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
							onClick={ () => current.canContinue && goTo( step + 1 ) }
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
						programType: programType?.slug ?? level?.slug,
						interests: interestSlugs,
					} ) }
				>
					Explore our Programs
				</a>

				<ProgressBar current={ step + 1 } total={ STEP_COUNT } />
			</div>
		</div>
	);
}
