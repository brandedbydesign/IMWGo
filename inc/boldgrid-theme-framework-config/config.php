<?php
/**
 * Prime Configuration File.
 *
 * This file contains the configuration options used in the Prime theme.
 *
 * @package Prime
 */
if ( ! function_exists( 'boldgrid_prime_framework_config' ) ) {
	/**
	 * Boldgrid Theme Framework Configs
	 *
	 * Filters the theme framework configurations.
	 *
	 * @since 1.0.0
	 */
	function boldgrid_prime_framework_config( $boldgrid_framework_configs ) {
		// Waiting for all themes to opt in before removing switch.
		// Enable typography controls in the customizer.
		$boldgrid_framework_configs['customizer-options']['typography']['enabled'] = true;
		// Enable Sticky Footer.
		$boldgrid_framework_configs['scripts']['boldgrid-sticky-footer'] = true;
		// Waiting for all themes to opt in before removing switch.
		// Remove the wrong attribution links from the footer.
		$boldgrid_framework_configs['temp']['attribution_links'] = true;
		// Waiting for all themes to opt in before removing switch.
		// Enable the color palettes in the customizer.
		$boldgrid_framework_configs['customizer-options']['colors']['enabled'] = true;
		// Waiting for all themes to opt in before removing switch.
		// Enable Bootstrap SCSS Compiling.
		$boldgrid_framework_configs['bootstrap-compile'] = true;
		// Waiting for all themes to opt in before removing switch.
		// Turn on the parent theme template engine.
		$boldgrid_framework_configs['boldgrid-parent-theme'] = true;
		// Set Theme Name.
		$boldgrid_framework_configs['theme_name'] = 'prime';
		// This theme doesn't support a background image.
		$boldgrid_framework_configs['customizer-options']['background']['defaults']['background_image'] = false;
		// Display Call To Action Widget on all pages.
		$boldgrid_framework_configs['template']['call-to-action'] = 'all-pages';
		// Assign menus, widgets, and actions to locations in generic header template.
		$boldgrid_framework_configs['template']['locations']['header'] = array(
			'1' => array( '[menu]secondary' ),
			'6' => array( '[action]boldgrid_site_identity', '[menu]social' ),
			'8' => array( '[widget]boldgrid-widget-2' ),
			'11' => array( '[action]boldgrid_primary_navigation' ),
			'13' => array( '[menu]tertiary' ),
		);
		$boldgrid_framework_configs['template']['navbar-search-form'] = true;
		// Assign Locations for Generic Footer.
		$boldgrid_framework_configs['template']['locations']['footer'] = array(
			'1' => array( '[menu]footer_center' ),
			'5' => array( '[widget]boldgrid-widget-3' ),
			'8' => array( '[action]boldgrid_display_attribution_links' ),
		);
		// Remove Container ID that is targetted by navbar-toggle.
		$boldgrid_framework_configs['menu']['prototype']['primary']['container_id'] = 'primary-menu';
		// Remove the container classes that are targetted with navbar-collapse.
		$boldgrid_framework_configs['menu']['prototype']['primary']['container_class'] = 'primary-menu';
		// Default Colors.
		$boldgrid_framework_configs['customizer-options']['colors']['defaults'] = array(
			array(
				'default' => true,
				'format' => 'palette-primary',
				'neutral-color' => '#86b8b1',
				'colors' => array( '#000000', '#dd3333', '#333333' ),
			),
		);
		// CTA Widget Markup.
		$widget_markup['call-to-action'] = '
			<div class="jumbotron">
				<div class="container">
					<h1>Welcome to BoldGrid!</h1>
					<p>This is a parent theme for the BoldGrid Theme Framework.  Unfortunately this theme is not intended to be used as a standalone theme, and a child theme should be used instead.</p>
					<p><a class="button-primary btn-lg" href="#" role="button">Learn more »</a></p>
				</div>
			</div>';

		// Assign Widget 1 the Call to Action.
		$boldgrid_framework_configs['widget']['widget_instances']['boldgrid-widget-1'][] = array(
			'title' => 'Call To Action',
			'text' => $widget_markup['call-to-action'],
			'type' => 'visual',
			'filter' => 1,
			'label' => 'black-studio-tinymce',
		);
		// Name Widget Area.
		$boldgrid_framework_configs['widget']['sidebars']['boldgrid-widget-1']['name'] = 'Call To Action';
		// Configs above will override framework defaults.
		return $boldgrid_framework_configs;
	}
}
add_filter( 'boldgrid_theme_framework_config', 'boldgrid_prime_framework_config' );
// Site Title & Logo Controls.
if ( ! function_exists( 'boldgrid_prime_filter_logo_controls' ) ) {
	/**
	 * Logo Filter Configs
	 *
	 * This filters the kirki controls for the logo defaults.
	 *
	 * @since 1.0.0
	 */
	function boldgrid_prime_filter_logo_controls( $controls ) {
		// Reset Site Title Margin.
		$controls['logo_margin_top']['default'] = '0';
		$controls['logo_margin_bottom']['default'] = '0';
		// Controls above will override framework defaults.
		return $controls;
	}
}
add_filter( 'kirki/fields', 'boldgrid_prime_filter_logo_controls' );
