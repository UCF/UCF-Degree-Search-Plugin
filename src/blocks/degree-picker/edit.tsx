import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import type { BlockEditProps } from '@wordpress/blocks';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { MouseEvent } from 'react';
import { DEFAULTS, DegreePicker } from '../../components/DegreePicker/src/index.ts';

export type Attributes = {
	/** A program type slug, or "" to ask the visitor. */
	programType: string;
};

/**
 * The editor shows the live picker, so editors can try it as visitors
 * will. Links inside it don't navigate away from the editor.
 */
export default function Edit( { attributes, setAttributes }: BlockEditProps<Attributes> ) {
	const blockProps = useBlockProps();
	const settings = window.ucfDegreePickerSettings ?? {};

	const typeOptions = [
		{ value: '', label: __( 'Ask the visitor', 'ucf-degree-search' ) },
		...DEFAULTS.programTypes.map( ( type ) => ( { value: type.slug, label: type.label } ) ),
	];

	// The editor canvas is an iframe with its own Element class, so
	// `instanceof Element` would always fail here. Check for closest().
	function stopLinks( event: MouseEvent ) {
		const target = event.target as Partial<Element>;
		if ( typeof target.closest === 'function' && target.closest( 'a' ) ) {
			event.preventDefault();
		}
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'ucf-degree-search' ) }>
					<SelectControl
						__next40pxDefaultSize
						label={ __( 'Degree type', 'ucf-degree-search' ) }
						help={ __(
							'On a page about one degree type, such as a masters page, choose it here and the picker skips that question.',
							'ucf-degree-search'
						) }
						value={ attributes.programType }
						options={ typeOptions }
						onChange={ ( programType ) => setAttributes( { programType } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps } onClickCapture={ stopLinks }>
				<DegreePicker
					apiRoot={ settings.apiRoot }
					searchUrl={ settings.searchUrl }
					programType={ attributes.programType || undefined }
				/>
			</div>
		</>
	);
}
