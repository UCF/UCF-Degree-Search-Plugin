<?php
/*
Plugin Name: UCF Degree Search Plugin
Description: Provides a typeahead search interface for UCF Degrees
Version: 0.0.1
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

include_once 'admin/ucf-degree-search-config.php';

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
