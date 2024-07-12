<?php
/*
Plugin Name: UCF Degree Search Plugin
Description: Provides utilities for listing and searching against UCF Degrees.
Github Plugin URI: UCF/UCF-Degree-Search-Plugin
Version: 0.9.0
Author: UCF Web Communications
License: GPL3
*/

if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'UCF_DEGREE_SEARCH__PLUGIN_URL', plugins_url( basename( dirname( __FILE__ ) ) ) );
define( 'UCF_DEGREE_SEARCH__PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'UCF_DEGREE_SEARCH__STATIC_URL', UCF_DEGREE_SEARCH__PLUGIN_URL . '/static' );
define( 'UCF_DEGREE_SEARCH__PLUGIN_FILE', __FILE__ );

define( 'UCF_DEGREE_SEARCH__TYPEAHEAD', 'https://cdnjs.cloudflare.com/ajax/libs/corejs-typeahead/1.0.1/typeahead.bundle.min.js' );
define( 'UCF_DEGREE_SEARCH__HANDLEBARS', 'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.min.js' );
define( 'UCF_DEGREE_SEARCH__ANGULAR', 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular.min.js' );
define( 'UCF_DEGREE_SEARCH__ANGULAR_ROUTE', 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-route.min.js' );

include_once UCF_DEGREE_SEARCH__PLUGIN_DIR . 'includes/ucf-degree-search-common.php';
include_once UCF_DEGREE_SEARCH__PLUGIN_DIR . 'includes/ucf-degree-search-angular-common.php';
include_once UCF_DEGREE_SEARCH__PLUGIN_DIR . 'includes/ucf-degree-search-feed.php';
include_once UCF_DEGREE_SEARCH__PLUGIN_DIR . 'includes/ucf-degree-external-list-common.php';
include_once UCF_DEGREE_SEARCH__PLUGIN_DIR . 'includes/ucf-degree-picker-common.php';
include_once UCF_DEGREE_SEARCH__PLUGIN_DIR . 'shortcodes/ucf-degree-search-angular-shortcodes.php';
include_once UCF_DEGREE_SEARCH__PLUGIN_DIR . 'shortcodes/ucf-degree-search-shortcode.php';
include_once UCF_DEGREE_SEARCH__PLUGIN_DIR . 'shortcodes/ucf-degree-external-list-shortcode.php';
include_once UCF_DEGREE_SEARCH__PLUGIN_DIR . 'shortcodes/ucf-degree-picker-shortcode.php';
include_once UCF_DEGREE_SEARCH__PLUGIN_DIR . 'admin/ucf-degree-search-config.php';

if ( ! function_exists( 'ucf_degree_search_plugin_activation' ) ) {
	function ucf_degree_search_plugin_activation() {
		UCF_Degree_Search_Config::add_options();
		flush_rewrite_rules();
	}
}

if ( ! function_exists( 'ucf_degree_search_plugin_deactivation' ) ) {
	function ucf_degree_search_plugin_deactivation() {
		UCF_Degree_Search_Config::delete_options();
	}
}

register_activation_hook( UCF_DEGREE_SEARCH__PLUGIN_FILE, 'ucf_degree_search_plugin_activation' );
register_deactivation_hook( UCF_DEGREE_SEARCH__PLUGIN_FILE, 'ucf_degree_search_plugin_deactivation' );

?>
