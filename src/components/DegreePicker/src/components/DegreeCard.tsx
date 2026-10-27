import type { Degree } from '../types.ts';

interface DegreeCardProps {
	degree: Degree;
}

/**
 * One result on the last step. It takes the whole degree record so
 * that adding a field later, such as the college or a description,
 * means changing only this component.
 */
export default function DegreeCard( { degree }: DegreeCardProps ) {
	return (
		<a className="ucf-degree-picker__card ucf-degree-picker__degree-card" href={ degree.url }>
			<span className="ucf-degree-picker__degree-title">{ degree.title }</span>
		</a>
	);
}
