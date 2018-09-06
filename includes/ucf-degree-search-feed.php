<?php
/**
 * Provides feed utilities for retrieving remote degrees
 */
if ( ! class_exists( 'UCF_Degree_Search_Feed' ) ) {
    class UCF_Degree_Search_Feed {
        /**
         * Returns a list of degrees from an external endpoint
         *
         * @since 0.7.0
         * @param array $args The argument array
         * @param string $search_url The API endpoint's url
         * @return array The list of degrees
         */
        public static function get_degrees( $args, $search_url=null ) {
            if ( ! $search_url ) {
                $search_url = UCF_Degree_Search_Config::get_option_or_default( 'angular_api' ) . '/degrees/';
            }

            // Process params, build full url and get transient name
            $sort_by = isset( $args['sort_by'] ) ? $args['sort_by'] : null;
            $params = self::process_arguments( $args );
            $request_url = $search_url . '?' . $params;
            // If the sort_by param is set, add it to the transient name for hashing
            $transient_base_name = isset( $sort_by ) ? $request_url . $sort_by : $request_url;
            $transient_name = self::get_transient_name( $transient_base_name );
            $expiration = 3 * HOUR_IN_SECONDS;

            $degrees = get_transient( $transient_name );

            if ( ! $degrees ) {
                $request_args = array(
                    'timeout' => 5
                );

                $response = wp_remote_get( $request_url, $request_args );

                if ( is_array( $response ) ) {
                    $degrees = json_decode( wp_remote_retrieve_body( $response ) );
                }
                else {
                    $degrees = false;
                }

                if ( has_filter( "ucf_degree_external_list_sort_{$sort_by}" ) ) {
                    $degrees = apply_filters( "ucf_degree_external_list_sort_{$sort_by}", $degrees, $layout, $args );
                }

                // Store new transient data
                set_transient( $transient_name, $degrees, $expiration );
            }

            return $degrees;
        }

        /**
         * Processes the raw argument array and
         * returns a parameters string
         *
         * @since 0.7.0
         * @param array $args The argument array
         * @return string The parameter string
         */
        public static function process_arguments( $args ) {
            $params = array(
                'limit' => $args['limit']
            );

            if ( isset( $args['program_types'] ) ) {
                $params['program_types'] = $args['program_types'];
            }

            if ( isset( $args['colleges'] ) ) {
                $params['colleges'] = $args['colleges'];
            }

            if ( isset( $args['s'] ) ) {
                $params['s'] = $args['s'];
            }

            return http_build_query( $params );
        }

        /**
         * Return an md5 hash of the full feed url.
         *
         * @since 0.7.0
         * @param string $full_url The full url of the feed, including parameters
         * @return string The md5 hash of the full url.
         */
        private static function get_transient_name( $full_url ) {
            return md5( $full_url );
        }
    }
}