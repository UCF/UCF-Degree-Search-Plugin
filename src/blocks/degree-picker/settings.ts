/**
 * Site-wide settings the plugin passes to the block, from the plugin's
 * settings page. Shared by the editor and the front end.
 */
export interface PickerSettings {
	apiRoot?: string;
	searchUrl?: string;
	programType?: string;
}

declare global {
	interface Window {
		/** Set by includes/ucf-degree-picker-block.php in the editor. */
		ucfDegreePickerSettings?: PickerSettings;
	}
}

/**
 * Reads the settings that render.php writes on the container.
 * Bad or missing JSON falls back to the component's defaults.
 */
export function readSettings( json: string | undefined ): PickerSettings {
	if ( ! json ) {
		return {};
	}

	try {
		const value: unknown = JSON.parse( json );
		return value && typeof value === 'object' ? ( value as PickerSettings ) : {};
	} catch {
		return {};
	}
}
