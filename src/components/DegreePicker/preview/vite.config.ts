import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// A local preview of the component on its own, outside WordPress.
// Run `npm run dev` from the component folder.
export default defineConfig( {
	plugins: [ react() ],
} );
