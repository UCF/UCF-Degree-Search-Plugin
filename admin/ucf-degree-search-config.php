<?php
/**
 * Registers UCF Degree Search Options
 **/
if ( ! class_exists( 'UCF_Degree_Search_Config' ) ) {
	class UCF_Degree_Search_Config {
		public static
			$option_prefix = 'ucf_degree_search_',
			$options_defaults = array(
				'rest_api_path'       => 'https://www.ucf.edu/online/wp-json/wp/v2/degrees/',
				'query_params'        => '%q',
				'number_results'      => 5,
				'include_typeahead'   => true
			);

		/**
		 * Creates options via the WP Options API that are utilized by the
		 * plugin.  Intended to be run on plugin activation.
		 * @author Jo Dickson
		 * @since 0.0.1
		 * @return void
		 **/
		public static function add_options() {
			$default = self::$options_defaults;

			add_option( self::$option_prefix . 'rest_api_path', $defaults['rest_api_path'] );
			add_option( self::$option_prefix . 'query_params', $defaults['query_params'] );
			add_option( self::$option_prefix . 'number_results', $defaults['number_results'] );
			add_option( self::$option_prefix . 'include_typeahead', $defaults['include_typeahead'] );
		}

		/**
		 * Deletes options via the WP Options API that are utilized by the
		 * plugin.  Intended to be run on plugin uninstallation.
		 * @author Jo Dickson
		 * @since 0.0.1
		 * @return void
		 **/
		public static function delete_options() {
			delete_option( self::$option_prefix . 'rest_api_path' );
			delete_option( self::$option_prefix . 'number_results' );
			delete_option( self::$option_prefix . 'include_typeahead' );
		}

		/**
		 * Returns a list of default plugin options. Applies any overridden
		 * default values set within the options page.
		 * @author Jo Dickson
		 * @since 0.0.1
		 * @return array
		 **/
		public static function get_option_defaults() {
			$defaults = self::$options_defaults;

			$configurable_defaults = array(
				'rest_api_path'     => get_option( self::$option_prefix . 'rest_api_path' ),
				'query_params'      => get_option( self::$option_prefix . 'query_params' ),
				'number_results'    => get_option( self::$option_prefix . 'number_results' ),
				'include_typeahead' => get_option( self::$option_prefix . 'include_typeahead' )
			);

			$configurable_defaults = self::format_options( $configurable_defaults );

			$defaults = array_merge( $defaults, $configurable_defaults );

			return $defaults;
		}

		/**
		 * Returns an array with plugin defaults applied.
		 * @author Jo Dickson
		 * @since 0.0.1
		 * @param array $list
		 * @param boolean $list_keys_only Modifies results to only return array key
		 *                                values present in $list.
		 * @return array
		 **/
		public static function apply_option_defaults( $list, $list_keys_only=false ) {
			$defaults = self::get_option_defaults();
			$options = array();

			if ( $list_keys_only ) {
				foreach( $list as $key => $val ) {
					$options[$key] = ! empty( $val ) ? $val : $defaults[$key];
				}
			} else {
				$options = array_merge( $defaults, $list );
			}

			$options = self::format_options( $options );

			return $options;
		}

		/**
		 * Performs typecasting, sanitization, etc on an array of plugin options.
		 * @author Jo Dickson
		 * @since 0.0.1
		 * @param array $list
		 * @return array
		 **/
		public static function format_options( $list ) {
			foreach( $list as $key => $val ) {
				switch ( $key ) {
					case 'number_results':
						$list[$key] = intval( $val );
						break;
					case 'include_typeahead':
						$list[$key] = filter_var( $val, FILTER_VALIDATE_BOOLEAN );
						break;
					default:
						break;
				}
			}

			return $list;
		}

		/**
		 * Convenience method for returning an option from the WP Options API
		 * or a plugin option default.
		 * @author Jo Dickson
		 * @since 0.0.1
		 * @param $option_name
		 * @return mixed
		 **/
		public static function get_option_or_default( $option_name ) {
			$option_name_no_prefix = str_replace( self::$option_prefix, '', $option_name );
			$option_name = self::$option_prefix . $option_name_no_prefix;

			$option = get_option( $option_name );
			$option_formatted = self::apply_option_defaults( array(
				$option_name_no_prefix => $option
			), true );

			return $option_formatted[$option_name_no_prefix];
		}

		/**
		 * Initializes setting registration with the Settings API.
		 * @author Jim Barnes
		 * @since 0.0.1
		 * @return void
		 **/
		public static function settings_init() {
			// General Section
			add_settings_section(
				'ucf_degree_search_section_general',
				'General Settings',
				'',
				'ucf_degree_search'
			);

			register_setting( 'ucf_degree_search', self::$option_prefix . 'number_results' );

			add_settings_field(
				self::$option_prefix . 'number_results',
				'(Default) Number of Typeahead Results',
				array( 'UCF_Degree_Search_Config', 'display_settings_field' ),
				'ucf_degree_search',
				'ucf_degree_search_section_general',
				array(
					'label_for'   => self::$option_prefix . 'number_results',
					'description' => 'The default number of results to show in the typeahead.',
					'type'        => 'number'
				)
			);

			register_setting( 'ucf_degree_search', self::$option_prefix . 'include_typeahead' );

			add_settings_field(
				self::$option_prefix . 'include_typeahead',
				'Include Typeahead',
				array( 'UCF_Degree_Search_Config', 'display_settings_field' ),
				'ucf_degree_search',
				'ucf_degree_search_section_general',
				array(
					'label_for'  => self::$option_prefix . 'include_typeahead',
					'description' => 'If checked, the bundled typeahead JS and Handlebars files will be included from CDNJS.',
					'type'        => 'checkbox'
				)
			);

			// Rest API Section
			add_settings_section(
				'ucf_degree_search_section_rest_api',
				'Rest API',
				'',
				'ucf_degree_search'
			);

			register_setting( 'ucf_degree_search', self::$option_prefix . 'rest_api_path' );

			add_settings_field(
				self::$option_prefix . 'rest_api_path',
				'Degree Rest API Path',
				array( 'UCF_Degree_Search_Config', 'display_settings_field' ),
				'ucf_degree_search',
				'ucf_degree_search_section_rest_api',
				array(
					'label_for'   => self::$option_prefix . 'rest_api_path',
					'description' => 'The path to the Degree Rest API used to retrieve degrees.',
					'type'        => 'text' 
				)
			);

			register_setting( 'ucf_degree_search', self::$option_prefix . 'query_params' );

			add_settings_field(
				self::$option_prefix . 'query_params',
				'Query Parameters (Default)',
				array( 'UCF_Degree_Search_Config', 'display_settings_field' ),
				'ucf_degree_search',
				'ucf_degree_search_section_rest_api',
				array(
					'label_for'   => self::$option_prefix . 'query_params',
					'description' => 'The default query parameter structure. Use <pre>%q</pre> to denote the search query.',
					'type'        => 'text' 
				)
			);
		}

		/**
		 * Displays an individual setting's field markup.
		 * @author Jo Dickson
		 * @since 0.0.1
		 * @return string | The formatted html of the field
		 **/
		public static function display_settings_field( $args ) {
			$option_name   = $args['label_for'];
			$description   = $args['description'];
			$field_type    = $args['type'];
			$current_value = self::get_option_or_default( $option_name );
			$markup        = '';

			switch( $field_type ) {
				case 'checkbox':
					ob_start();
				?>
					<input type="checkbox" id="<?php echo $option_name; ?>" name="<?php echo $option_name; ?>" <?php echo ( $current_value == true ) ? 'checked' : ''; ?>>
					<p class="description">
						<?php echo $description; ?>
					</p>
				<?php
					break;
				case 'number':
					ob_start();
				?>
					<input type="number" id="<?php echo $option_name; ?>" name="<?php echo $option_name; ?>" value="<?php echo $current_value; ?>">
					<p class="description">
						<?php echo $description; ?>
					</p>
				<?php
					$markup = ob_get_clean();
					break;
				case 'text':
				default:
					ob_start();
				?>
					<input type="text" id="<?php echo $option_name; ?>" name="<?php echo $option_name; ?>" value="<?php echo $current_value; ?>">
					<p class="description">
						<?php echo $description; ?>
					</p>
				<?php
					$markup = ob_get_clean();
					break;
			}

			echo $markup;
		}

		/**
		 * Registers the settings page to display in the WordPress admin.
		 * @author Jo Dickson
		 * @since 0.0.1
		 * @return string | The resulting page's hook_suffix 
		 **/
		public static function add_options_page() {
			$page_title = 'UCF Degree Search Settings';
			$menu_title = 'UCF Degree Search';
			$capability = 'manage_options';
			$menu_slug  = 'ucf_degree_search';
			$callback   = array( 'UCF_Degree_Search_Config', 'options_page_html' );

			return add_options_page(
				$page_title,
				$menu_title,
				$capability,
				$menu_slug,
				$callback
			);
		}

		/**
		 * Displays the plugin's settings page form.
		 * @author Jo Dickson
		 * @since 0.0.1
		 * @return void | echoes output
		 **/
		public static function options_page_html() {
			ob_start();
		?>
			<div class="wrap">
				<h1><?php echo get_admin_page_title(); ?></h1>
				<form method="post" action="options.php">
					<?php
						settings_fields( 'ucf_degree_search' );
						do_settings_sections( 'ucf_degree_search' );
						submit_button();
					?>
				</form>
			</div>
		<?php
			echo ob_get_clean();
		}
	}

	add_action( 'admin_init', array( 'UCF_Degree_Search_Config', 'settings_init' ) );
	add_action( 'admin_menu', array( 'UCF_Degree_Search_Config', 'add_options_page' ) );
}
?>