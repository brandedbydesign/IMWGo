<?php
/**
 * Include the BoldGrid Theme Framework
 *
 * @package Prime
 */

locate_template( '/inc/boldgrid-theme-framework-config/config.php', true, true );
require_once get_template_directory() . '/inc/boldgrid-theme-framework/boldgrid-theme-framework.php';

//wp_enqueue_style( 'landing-page', get_stylesheet_directory_uri() . '/css/landing-page.css',false,'1.0','all');

//wp_enqueue_script( 'landing-page', get_stylesheet_directory_uri() . '/js/bootstrap.min.js',false,'1.0','all');

add_action( 'after_setup_theme', 'woocommerce_support' );
function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}
