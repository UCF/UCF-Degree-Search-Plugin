/**
 * Editor entry: registers the Degree Picker block.
 */
import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import metadata from './block.json';
import Edit, { type Attributes } from './edit.tsx';

// TypeScript reads block.json values as plain strings (e.g. "wide"
// rather than the literal "wide"), so it needs telling that the file
// is block metadata. WordPress validates block.json itself.
const blockMetadata = metadata as unknown as BlockConfiguration<Attributes>;

registerBlockType<Attributes>( blockMetadata, {
	edit: Edit,
	// A dynamic block: render.php builds the front end, so the post
	// saves only the attributes.
	save: () => null,
} );
