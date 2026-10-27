import { useId } from 'react';

export interface Choice {
	slug: string;
	title: string;
	detail?: string;
}

interface ChoiceCardsProps {
	choices: Choice[];
	selected: string | null;
	onSelect: ( slug: string ) => void;
	/** The id of the heading that names this group. */
	labelledBy: string;
	size?: 'large' | 'small';
}

/**
 * A single-choice group of cards. The cards are native radio buttons,
 * so arrow keys, Tab and screen readers behave as a radio group
 * without extra code.
 */
export default function ChoiceCards( { choices, selected, onSelect, labelledBy, size = 'small' }: ChoiceCardsProps ) {
	const name = useId();

	return (
		<div
			role="radiogroup"
			aria-labelledby={ labelledBy }
			className={ `ucf-degree-picker__choices ucf-degree-picker__choices--${ size }` }
		>
			{ choices.map( ( choice ) => (
				<label key={ choice.slug } className="ucf-degree-picker__option">
					<input
						type="radio"
						className="ucf-degree-picker__visually-hidden"
						name={ name }
						value={ choice.slug }
						checked={ selected === choice.slug }
						onChange={ () => onSelect( choice.slug ) }
					/>
					<span className="ucf-degree-picker__card ucf-degree-picker__choice-card">
						<span className="ucf-degree-picker__choice-title">{ choice.title }</span>
						{ choice.detail && <span className="ucf-degree-picker__choice-detail">{ choice.detail }</span> }
					</span>
				</label>
			) ) }
		</div>
	);
}
