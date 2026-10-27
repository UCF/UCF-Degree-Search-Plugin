import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import DegreePicker from '../src/DegreePicker.tsx';
import '../src/styles.css';

// Calls the live ucf.edu API, which allows requests from localhost.
// URL options:
//   ?apiRoot=...        point at another site's API
//   ?programType=master  skip the first step, as on a /masters page
const params = new URLSearchParams( window.location.search );
const apiRoot = params.get( 'apiRoot' ) ?? undefined;
const programType = params.get( 'programType' ) ?? undefined;

const root = document.getElementById( 'root' );

if ( root ) {
	createRoot( root ).render(
		<StrictMode>
			<DegreePicker apiRoot={ apiRoot } programType={ programType } />
		</StrictMode>
	);
}
