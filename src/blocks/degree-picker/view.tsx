/**
 * Front end: starts the Degree Picker in each block on the page.
 */
import { createRoot } from '@wordpress/element';
import { DegreePicker } from '../../components/DegreePicker/src/index.ts';
import '../../components/DegreePicker/src/styles.css';
import './alignment.css';
import { readSettings } from './settings.ts';

function start() {
	document.querySelectorAll<HTMLElement>( '[data-ucf-degree-picker]' ).forEach( ( container ) => {
		const settings = readSettings( container.dataset.ucfDegreePicker );
		createRoot( container ).render( <DegreePicker { ...settings } /> );
	} );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', start );
} else {
	start();
}
