<?php
/**
 * Provides hooks for modifying the degree search angular shortcode
 **/
if ( ! class_exists( 'UCF_Degree_Search_Angular_Common' ) ) {
    class UCF_Degree_Search_Angular_Common {
        public static function display_degree_search( $args ) {
            self::localize_script();

            ob_start();

            $output = self::display();

            echo apply_filters( 'ucf_degree_search_angular_display', $output );

            return ob_get_clean();
        }

        public static function display() {
            ob_start();
        ?>
            <div ng-app="DegreeSearchApp">
                <div ng-controller="MainController as mainCtl">
                    <search-form></search-form>
					<search-results></search-results>
                </div>
            </div>
        <?php
            return ob_get_clean();
        }

        public static function localize_script() {
            $localize_settings = array(
				'remote_path'             => UCF_Degree_Search_Config::get_option_or_default( 'rest_api_path' ),
				'search_form_template'    => self::search_form_template(),
				'search_results_template' => self::search_results_template()
            );

            wp_localize_script( 'ucf-degree-search-angular-js', 'UCF_DEGREE_SEARCH_ANGULAR', $localize_settings );

            wp_dequeue_script( 'ucf-degree-search-angular-js' );

            wp_enqueue_script( 'ucf-degree-search-angular-js' );
        }

        public static function enqueue_scripts() {
            $include_js = UCF_Degree_Search_Config::get_option_or_default( 'include_typeahead' );

            $script_deps = array();

            if ( $include_js ) {
                $script_deps = array( 'ucf-degree-angular-js', 'ucf-degree-angular-route-js' );
                wp_enqueue_script( 'ucf-degree-angular-js', UCF_DEGREE_SEARCH__ANGULAR, null, null, true );
                wp_enqueue_script( 'ucf-degree-angular-route-js', UCF_DEGREE_SEARCH__ANGULAR_ROUTE, array( 'ucf-degree-angular-js' ), null, true );
            }

            wp_register_script(
                'ucf-degree-search-angular-js',
                UCF_DEGREE_SEARCH__STATIC_URL . '/js/ucf-degree-search-angular.min.js',
                $script_deps,
                null,
                true
            );
        }

        public static function search_form_template() {
            ob_start();
        ?>
            <div id="degree-search-form">
                <fieldset class="degree-search-form" role="search">
                    <legend class="sr-only">Search Degrees</legend>
                    <div class="search-form-inner">
                        <label for="degree-search-query" class="sr-only">Search Degrees</label>
                        <input id="degree-search-query" type="text" autocomplete="off" name="degree-search-query" class="form-control" ng-model-options="{ debounce: 300 }" ng-model="mainCtl.searchQuery">
                    </div>
                </fieldset>
            </div>
        <?php
            $output = ob_get_clean();
            return apply_filters( 'udsa_search_form_template', $output );
        }

		public static function search_results_template() {
		ob_start();
		?>
			<div class="degree-search-results">
				<div class="search-result" ng-repeat="result in mainCtl.results">
					<a href="{{ result.url }}" class="degree-title-wrap">
						<span class="degree-title">{{ result.title }}</span>
						<span class="degree-details">
							<span class="degree-credits-count">
								<span class="number">{{ result.hours }}</span> credit hours
							</span>
						</span>
					</a>
				</div>
			</div>
		<?php
			return ob_get_clean();
		}
    }

    add_action( 'wp_enqueue_scripts', array( 'UCF_Degree_Search_Angular_Common', 'enqueue_scripts' ) );
}
