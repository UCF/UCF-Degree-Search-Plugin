import ChoiceCards from '../components/ChoiceCards.tsx';
import type { Level, ProgramType } from '../types.ts';
import { countLabel } from '../utils/countLabel.ts';

interface ProgramTypeStepProps {
	level: Level;
	selected: ProgramType | null;
	onSelect: ( type: ProgramType ) => void;
	headingId: string;
}

/**
 * Step 2: the program types within the chosen level, such as
 * Bachelor, Minor or Undergraduate Certificate.
 */
export default function ProgramTypeStep( { level, selected, onSelect, headingId }: ProgramTypeStepProps ) {
	return (
		<ChoiceCards
			labelledBy={ headingId }
			choices={ level.types.map( ( type ) => ( {
				slug: type.slug,
				title: type.name,
				detail: countLabel( type.count ),
			} ) ) }
			selected={ selected?.slug ?? null }
			onSelect={ ( slug ) => {
				const type = level.types.find( ( item ) => item.slug === slug );
				if ( type ) {
					onSelect( type );
				}
			} }
		/>
	);
}
