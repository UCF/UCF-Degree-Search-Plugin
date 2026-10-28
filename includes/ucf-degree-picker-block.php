<?php
/**
 * Registers the Degree Picker block.
 *
 * The block is built from src/blocks/degree-picker into
 * build/degree-picker by `npm run build:blocks`.
 */

if ( ! function_exists( 'ucf_degree_picker_block_settings' ) ) {
	/**
	 * Site-wide settings for the picker, from the plugin settings page.
	 * Used by the editor preview and by render.php.
	 *
	 * @since 2.0.0
	 * @return array
	 */
	function ucf_degree_picker_block_settings() {
		return array(
			'apiRoot'   => UCF_Degree_Search_Config::get_option_or_default( 'picker_api_root' ),
			'searchUrl' => UCF_Degree_Search_Config::get_option_or_default( 'form_action' ),
		);
	}
}

if ( ! function_exists( 'ucf_degree_picker_block_register' ) ) {
	/**
	 * Registers the block from its built block.json, and gives the
	 * editor script the same settings the front end gets.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	function ucf_degree_picker_block_register() {
		$block = register_block_type( UCF_DEGREE_SEARCH__PLUGIN_DIR . 'build/degree-picker' );

		if ( ! $block ) {
			return;
		}

		foreach ( $block->editor_script_handles as $handle ) {
			wp_add_inline_script(
				$handle,
				'window.ucfDegreePickerSettings = ' . wp_json_encode( ucf_degree_picker_block_settings() ) . ';',
				'before'
			);
		}
	}

	add_action( 'init', 'ucf_degree_picker_block_register' );
}
