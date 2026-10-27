import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DegreePicker from '../src/DegreePicker.tsx';
import '../src/styles.css';

// Calls the live ucf.edu API, which allows requests from localhost.
// Add ?apiRoot=... to the preview URL to point at another site.
const params = new URLSearchParams( window.location.search );
const apiRoot = params.get( 'apiRoot' ) ?? undefined;

const root = document.getElementById( 'root' );

if ( root ) {
	createRoot( root ).render(
		<StrictMode>
			<DegreePicker apiRoot={ apiRoot } />
		</StrictMode>
	);
}
