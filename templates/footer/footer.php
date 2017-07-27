<?php
/**
 * Footer Template
 *
 * This file contains the markup for the footer template.
 *
 * @since 2.0
 * @package Prime
 */

// Get the theme configs.
global $boldgrid_theme_framework;
$configs = $boldgrid_theme_framework->get_configs();
?>

<footer id="colophon" role="contentinfo" <?php BoldGrid_Framework_Schema::footer( true ); ?>>
	<?php do_action( 'boldgrid_footer_top' ); ?>
	<center>
	1<div class""><?php do_action( 'boldgrid-theme-location', 'footer', '1' ); ?></div>
2	<div class""><?php do_action( 'boldgrid-theme-location', 'footer', '5' ); ?></div>

	</center>
	<?php do_action( 'boldgrid_footer_bottom' ); ?>
</footer><!-- #colophon -->
