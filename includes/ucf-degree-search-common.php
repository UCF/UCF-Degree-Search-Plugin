<?php
/**
 * Provides hooks for modifying the degree search shortcode
 **/
if ( ! class_exists( 'UCF_Degree_Search_Common' ) ) {
	class UCF_Degree_Search_Common {
		public static function display_degree_search( $placeholder, $result_count, $query_params, $form_action, $form_query ) {

			$args = array(
				'placeholder' => $placeholder,
				'result_count' => $result_count,
				'query_params' => $query_params,
				'form_action' => $form_action,
				'form_query' => $form_query
			);

			ucf_degree_search_enqueue_scripts();

			ob_start();

			$output = '';
			if ( has_filter( 'ucf_degree_search_display' ) ) {
				// Backward compatibility--use old display hook if a filter is
				// registered
				$output = ucf_degree_search_display();
				$output = apply_filters( 'ucf_degree_search_display', $output, $args );
			}
			else {
				$output = apply_filters( 'ucf_degree_search_input', $output, $args );
			}

			echo $output;

			return ob_get_clean();
		}

		public static function get_localize_script_defaults() {
			return array(
				'remote_path'     => UCF_Degree_Search_Config::get_option_or_default( 'rest_api_path' ),
				'num_results'     => UCF_Degree_Search_Config::get_option_or_default( 'number_results' ),
				'query_params'    => UCF_Degree_Search_Config::get_option_or_default( 'query_params' ),
				'suggestion'      => apply_filters( 'ucf_degree_search_suggestion', 'ucf_degree_search_suggestion' ),
				'empty'           => apply_filters( 'ucf_degree_search_empty', 'ucf_degree_search_empty' ),
				'footer'          => apply_filters( 'ucf_degree_search_footer', 'ucf_degree_search_footer' )
			);
		}

		public static function localize_script() {

			$localize_settings = UCF_Degree_Search_Common::get_localize_script_defaults();

			wp_localize_script( 'ucf-degree-search-js', 'UCF_DEGREE_SEARCH', $localize_settings );

			// Dequeue any existing script, so that any custom overrides above
			// are applied
			wp_dequeue_script( 'ucf-degree-search-js' );
		}
	}
}

/** Typeahead templates */

if ( ! function_exists( 'ucf_degree_search_display' ) ) {
	/**
	 * DEPRECATED as of v0.3.0--use ucf_degree_search_input instead
	 */
	function ucf_degree_search_display( $output='', $args ) {
		$auto_initialize = UCF_Degree_Search_Config::get_option_or_default( 'auto_initialize' );

		$init = filter_var( $auto_initialize, FILTER_VALIDATE_BOOLEAN ) ? ' data-degree-search-init' : '';
		$result_count = isset( $args['result_count'] ) ? ' data-degree-search-count="' . (int)$args['result_count'] . '"' : '';
		$query_params = isset( $args['query_params'] ) ? ' data-degree-search-params="' . $args['query_params'] . '"' : '';

		ob_start();
	?>
		<input type="text" class="degree-search-typeahead"<?php echo $init; ?><?php echo $result_count; ?><?php echo $query_params; ?>>
	<?php
		return ob_get_clean();
	}
}

if ( ! function_exists( 'ucf_degree_search_input' ) ) {
	function ucf_degree_search_input( $output='', $args ) {
		$auto_initialize = UCF_Degree_Search_Config::get_option_or_default( 'auto_initialize' );

		$init = filter_var( $auto_initialize, FILTER_VALIDATE_BOOLEAN ) ? ' data-degree-search-init' : '';
		$result_count = isset( $args['result_count'] ) ? ' data-degree-search-count="' . (int)$args['result_count'] . '"' : '';
		$query_params = isset( $args['query_params'] ) ? ' data-degree-search-params="' . $args['query_params'] . '"' : '';

		ob_start();
	?>
		<?php if ( $args['form_action'] ): ?>
		<form class="ucf-degree-search" action="<?php echo $args['form_action']; ?>" method="GET">
			<div class="ucf-degree-search-input-group">

			<?php
			if ( $args['form_query'] ):
				foreach ( $args['form_query'] as $query_name => $query_value ):
			?>
				<input type="hidden" name="<?php echo $query_name; ?>" value="<?php echo $query_value; ?>">
			<?php
				endforeach;
			endif;
			?>
		<?php endif; ?>

				<input type="text" name="search" class="degree-search-typeahead ucf-degree-search-typeahead" aria-label="Search degree programs" placeholder="<?php echo $args['placeholder']; ?>"<?php echo $init; ?><?php echo $result_count; ?><?php echo $query_params; ?>>

		<?php if ( $args['form_action'] ): ?>
				<span class="ucf-degree-search-btn-group">
					<button type="submit" class="ucf-degree-search-submit">
						<span class="ucf-degree-search-submit-text">Search</span>
					</button>
				</span>
			</div>
		</form>
		<?php endif; ?>
	<?php
		return ob_get_clean();
	}

	add_filter( 'ucf_degree_search_input', 'ucf_degree_search_input', 10, 2 );
}

if ( ! function_exists( 'ucf_degree_search_suggestion' ) ) {
	function ucf_degree_search_suggestion() {
		ob_start();
	?>
		<a class="ucf-degree-search-suggestion" href="{{link}}">{{{title.rendered}}}</a>
	<?php
		return ob_get_clean();
	}

	add_filter( 'ucf_degree_search_suggestion', 'ucf_degree_search_suggestion', 10, 0 );
}

if ( ! function_exists( 'ucf_degree_search_empty' ) ) {
	function ucf_degree_search_empty() {
		ob_start();
	?>
		<div class="empty-message"><p>Unable to find any degrees matching that keyword...</p></div>
	<?php
		return ob_get_clean();
	}

	add_filter( 'ucf_degree_search_empty', 'ucf_degree_search_empty', 10, 0 );
}

if ( ! function_exists( 'ucf_degree_search_footer' ) ) {
	function ucf_degree_search_footer() {
		// Does nothing by default
		return;
	}

	add_filter( 'ucf_degree_search_footer', 'ucf_degree_search_footer', 10, 0 );
}

if ( ! function_exists( 'ucf_degree_search_register_scripts' ) ) {
	function ucf_degree_search_register_scripts() {
		$plugin_data = get_plugin_data( UCF_DEGREE_SEARCH__PLUGIN_FILE, false, false );
		$version     = $plugin_data['Version'];
		$include_js  = UCF_Degree_Search_Config::get_option_or_default( 'include_typeahead' );

		$script_deps = array( 'jquery' );

		if ( $include_js ) {
			$script_deps = array_merge( $script_deps, array( 'typeahead-js', 'handlebars-js' ) );
			wp_register_script( 'typeahead-js', UCF_DEGREE_SEARCH__TYPEAHEAD, null, null, true );
			wp_register_script( 'handlebars-js', UCF_DEGREE_SEARCH__HANDLEBARS, null, null, true );
		}

		wp_register_script(
			'ucf-degree-search-js',
			UCF_DEGREE_SEARCH__STATIC_URL . '/js/ucf-degree-search.min.js',
			$script_deps,
			$version,
			true
		);

		UCF_Degree_Search_Common::localize_script();
	}

	add_action( 'wp_enqueue_scripts', 'ucf_degree_search_register_scripts' );
}


if ( ! function_exists( 'ucf_degree_search_enqueue_scripts' ) ) {
	function ucf_degree_search_enqueue_scripts() {
		wp_enqueue_script( 'ucf-degree-search-js' );
		do_action( 'ucf_degree_search_enqueue_scripts_after' );
	}
}
