<?php
/**
 * Provides hooks for modifying the degree search angular shortcode
 **/
if ( ! class_exists( 'UCF_Degree_Search_Angular_Common' ) ) {
    class UCF_Degree_Search_Angular_Common {
        public static function localize_script() {
            $localize_settings = array(
				'remote_path'             => UCF_Degree_Search_Config::get_option_or_default( 'rest_api_path' ),
				'search_form_template'    => self::search_form_template(),
				'search_results_template' => self::search_results_template(),
				'program_types_template'  => self::program_types_template(),
				'pagination_template'     => self::pagination_template(),
				'result_count_template'   => self::result_count_template()
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
				<div class="degree-search-results-container" ng-repeat="type in mainCtl.results.types">
					<h2 class="degree-search-group-title">{{ type.alias }}</h2>
					<div class="search-result" ng-repeat="result in type.degrees">
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
			</div>
		<?php
			return ob_get_clean();
		}

		public static function program_types_template() {
			ob_start();
		?>
			<div class="degree-search-types">
				<h2 class="h4 heading-underline">Program Types</h2>
				<div class="degree-search-type-container" ng-repeat="(key, type) in mainCtl.scope.programTypes">
					<label class="form-check-label">
						<input class="form-check-input" type="radio" name="program_type[]" value="{{ type.slug }}" ng-checked="mainCtl.programTypes.indexOf(type.slug) > -1" ng-click="mainCtl.UpdateFilters(type.slug)">
						{{ type.alias }} {{ type.count }}
					</label>
				</div>
			</div>
		<?php
			return ob_get_clean();
		}

		public static function pagination_template() {
			ob_start();
		?>
			<nav aria-label="Degree Results Pagnination" ng-if="mainCtl.totalPages > 1">
				<ul class="pagination pagination-lg justify-content-center">
					<li class="page-item" ng-if="mainCtl.currentPage > 1">
						<a href="#" ng-click="mainCtl.PreviousPage()" class="page-link" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
        					<span class="sr-only">Previous</span>
						</a>
					</li>
					<li class="page-item" ng-class="{ 'active': mainCtl.currentPage === n + 1 }" ng-repeat="n in []|range:mainCtl.totalPages">
						<a href="#" ng-click="mainCtl.GoToPage( n + 1 );" class="page-link">
							{{ n + 1}}
						</a>
					</li>
					<li class="page-item" ng-if="mainCtl.currentPage < mainCtl.totalPages">
						<a href="#" ng-click="mainCtl.NextPage()" class="page-link" aria-label="Previous">
							<span aria-hidden="true">&raquo;</span>
        					<span class="sr-only">Next</span>
						</a>
					</li>
				</ul>
			</nav>
		<?php
			return ob_get_clean();
		}

		public static function result_count_template() {
			ob_start();
		?>
			<p class="text-muted" ng-if="mainCtl.totalResults > 0">Showing {{ mainCtl.startIndex }} &mdash; {{ mainCtl.endIndex }} of {{ mainCtl.totalResults }} results.</p>
		<?php
			return ob_get_clean();
		}
	}

    add_action( 'wp_enqueue_scripts', array( 'UCF_Degree_Search_Angular_Common', 'enqueue_scripts' ) );
}
