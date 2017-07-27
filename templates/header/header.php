<?php
/**
 * Header Template
 *
 * This file contains the markup for the header template.
 *
 * @package Prime
 */

// Get the theme configs.
global $boldgrid_theme_framework;
$configs = $boldgrid_theme_framework->get_configs();
?>
<div class='boldgrid-section'>
            <div class="bgtfw <?php echo $configs['template']['pages']['global']['header']; ?>">

<header id="masthead" class="site-header" role="banner">
    <div class="hidden-sm hidden-xs col-md-6">
			<div class="site-branding">
						<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
			</div><!-- .site-branding -->
	</div>
	<div class="hidden-sm hidden-xs col-md-6">
	<?php do_action( 'boldgrid-theme-location', 'header', '11' ); ?>
	</div>
		</header>
<!-- #masthead -->
</div>
</div>
