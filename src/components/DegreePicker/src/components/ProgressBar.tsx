interface ProgressBarProps {
	/** The current step, starting at 1. */
	current: number;
	total: number;
}

/**
 * A segmented progress bar, one segment per step. Screen readers hear
 * "Step 2 of 4" rather than the segments themselves.
 */
export default function ProgressBar( { current, total }: ProgressBarProps ) {
	return (
		<div
			className="ucf-degree-picker__progress"
			role="progressbar"
			aria-label="Progress"
			aria-valuemin={ 1 }
			aria-valuemax={ total }
			aria-valuenow={ current }
			aria-valuetext={ `Step ${ current } of ${ total }` }
		>
			{ Array.from( { length: total }, ( _, i ) => (
				<span
					key={ i }
					className={ `ucf-degree-picker__progress-segment${
						i < current ? ' ucf-degree-picker__progress-segment--filled' : ''
					}` }
				/>
			) ) }
		</div>
	);
}
