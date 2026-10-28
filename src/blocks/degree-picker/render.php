<?php
/**
 * Front-end markup for the Degree Picker block.
 *
 * Outputs a container that carries the block's settings. view.tsx
 * starts the React component inside it. The link inside is what
 * visitors see without JavaScript, and React replaces it on load.
 *
 * @var array $attributes Block attributes.
 */

$settings = ucf_degree_picker_block_settings();

if ( ! empty( $attributes['programType'] ) ) {
	$settings['programType'] = $attributes['programType'];
}

$wrapper_attributes = get_block_wrapper_attributes( array(
	'data-ucf-degree-picker' => wp_json_encode( $settings ),
) );
?>
<div <?php echo $wrapper_attributes; ?>>
	<p>
		<a href="<?php echo esc_url( $settings['searchUrl'] ); ?>">Explore our Programs</a>
	</p>
</div>
