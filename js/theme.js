/* ========================================================================
 * DOM-based Routing
 * Based on http://www.paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
 * by Paul Irish.
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * The Namespace should be set to match the name of your theme.  In our case
 * "Starter", so you can do a find and replace in here to replace it with your
 * own theme's name.
 * ======================================================================== */
( function( $ ) {

	'use strict';

	// Use this variable to set up the common and DOM based specific functionality.
	var Starter = {
		// Scripts to fire on all pages.
		'common' : {
			// JavaScript to be fired on all pages.
			init : function() {},
			// JavaScript to be fired on all pages, after page specific JS is fired.
			finalize : function() {},
		},
		// Script to fire on our custom starter theme's home page template.
		'starter_home' : {
			init : function() {
				// We will set the scroll position to the top when the user loads
				// the page.
				window.onbeforeunload = function () {
					window.scrollTo(0, 0);
				};
				// Setup our branding for initial page load.
				this.branding();
				// Build out our nav.
				this.nav();
				// Trigger our background sizing.
				this.themeBackground();
				// Add our continue buttons.
				this.continueButton();
				// Setup our social media icon menu.
				this.social();
				// Setup our theme sections.
				this.themeSections();
			},

			/**
			 * These are methods ran at the end process.  This is a useful
			 * place to stick things like window resize actions when you
			 * need to recalculate things.
			 */
			'finalize' : function() {
				var prevPos = 0;
				$( window ).on( 'resize', function() {
					Starter.starter_home.themeBackground();
					Starter.starter_home.themeSections();
					Starter.starter_home.title();
					Starter.starter_home.tagline();
				});

				$( window ).on( 'scroll', function() {
					if ( $( window ).scrollTop() === 0  ) {
						$( '.nav.navbar-nav > .menu-item.current-menu-item' )
							.removeClass( 'current-menu-item active' );
						$( 'a[href="#boldgrid-sticky-wrap"]').parent().addClass( 'current-menu-item active' );
					}
					if ( ! $( '.navbar.clone' ).length ) {
						$( '.navbar.navbar-default' ).clone( true, true ).addClass( 'navbar-scrolled clone' ).appendTo( 'body' );
					}
					if ( $( '.site-content' ).offset().top - 79 > $( this ).scrollTop() && $( '.navbar.clone' ).is( ':visible' ) ) {
						$( '.navbar.clone' ).fadeOut();
					} else if ( $( '.site-content' ).offset().top - 80 < $( this ).scrollTop() && ! $( '.navbar.clone' ).is( ':visible' ) ) {
						$( '.navbar.clone').fadeIn();
					}
				});
			},

			/**
			 * This is where we create our nav based on the sections a user
			 * has created.
			 */
			'nav' : function() {
				/**
				 * Link to self hash if user adds menu with homepage.
				 */
				if ( $( '[href="' + window.location.href + '"], [href="' + window.location.href.slice(0, -1) + '"]' ).length ) {
					$( 'a[href="' + window.location.href + '"], [href="' + window.location.href.slice(0, -1) + '"]' ).attr( 'href', '#boldgrid-sticky-wrap' ).attr( 'title', 'Home' );
				}
				var sections = $( '.site-content' ).find( '.bgtfw > .boldgrid-section' ).not(':first-child');
				$.each( sections, function( index ) {
					var linkTitle, link;
					linkTitle = $( this ).find( ':header' ).first().text();
					link = Starter.starter_home.createItem( linkTitle, index );
					$( '#menu-primary' ).append( link );
					$( this ).attr( 'data-starter-section', index );
					index++;
				});

				/**
				 * Scroll to built menu items or anchor hashes.
				 */
				$( '[data-starter-nav-item]' ).each( function() {
					$( this ).on( 'click', function( e ) {
						e.preventDefault();
						$( '.nav.navbar-nav > .menu-item.current-menu-item' )
							.removeClass( 'current-menu-item active' );
						var menuItem = $( this ).data( 'starter-nav-item' );
						$( '[data-starter-nav-item="' + menuItem + '"]' ).parent().addClass( 'current-menu-item active' );
						// Make it looks somewhat pretty and add some smooth scrolling.
						$( 'html, body' ).animate({
							scrollTop: $( '[data-starter-section="' + menuItem + '"]' ).offset().top - Starter.starter_home.adminBar()
						}, 1000 );
					});
				});

				// On click of home links.
				$( 'a[href^=#]' ).not( '[data-starter-nav-item], .carousel-control' ).each( function() {
					$( this ).on( 'click', function( e ) {
						$( '.nav.navbar-nav > .menu-item.current-menu-item' )
							.removeClass( 'current-menu-item active' );
						var link = $( this ).attr( 'title' );
						$( 'a[href="' + link + '"]' ).parent().addClass( 'current-menu-item active' );
						// Make it looks somewhat pretty and add some smooth scrolling.
						$('html, body').animate({scrollTop:0}, 1000 );
						e.preventDefault();
						return false;
					});
				});

				return;
			},

			/**
			 * Helper method to create new menu items from sections.
			 * @return New primary nav menu link.
			 */
			'createItem' : function( linkTitle, index ) {
				return $( '<li class="menu-item menu-item-object-onepager"><a title="' +
					linkTitle + '" href="#" data-starter-nav-item="' + index + '">' +
					linkTitle + '</a></li>' );
			},

			/**
			 *  Social Media script setup will go in here.
			 */
			'social' : function() {
				// Let's fade in the header to give the page load some
				// additional depth.
				$( '#menu-social' )
					// add the classes to trigger wow.js and animate.css animation
					.addClass( 'wow slideInLeft' )
					// Here we add the data attribute to give a little bit of delay
					// before animating.
					.attr( 'data-wow-delay', '3s' );
			},

			/**
			 * Site branding - ie title and tagline functionality.
			 */
			'branding' : function() {
				this.title();
				this.tagline();
				// Let's fade in the header to give the page load some
				// additional depth.
				$( '.site-header' )
					// add the classes to trigger wow.js and animate.css animation
					.addClass( 'wow fadeInDown' )
					// Here we add the data attribute to give a little bit of delay
					// before animating.
					.attr( 'data-wow-delay', '1s' );
				// Here we will add and effect to the tagline to zoomIn as the
				// slide occurs. We give it a slight offset to make the zoom
				// more dramatic as the position changes during the header slide.
				$( '.site-tagline' )
					.addClass( 'wow zoomIn' )
					.attr( 'data-wow-delay', '1.1s' );
			},

			/**
			 * This is a shim for the letter spacing throwing off the
			 * center position of the site title.  This will probably
			 * be fixed in the framework at some point.
			 */
			'title' : function() {
				var letterSpacing, siteTitle = $( '.site-title' );
				letterSpacing = siteTitle.css( 'letter-spacing' );
				siteTitle.css( 'margin-left', letterSpacing );
			},

			/**
			 * This is the tagline functionality, basically just centering it
			 * to be in place of the middle.  We get the window innerHeight
			 * property and divide it in half and account for the adminBar
			 * being place on the site to obtain the position.
			 */
			'tagline' : function() {
				$( '.site-tagline' ).css( 'margin-top', window.innerHeight / 2 - Starter.starter_home.adminBar() + 'px' );
			},

			/**
			 * Here we are making a simple helper method to check the adminbar's
			 * height, so we can offset things if they are logged in with the
			 * admin bar displayed.
			 *
			 * Calling this return the height of the adminbar. You should always
			 * document your return statements so code is easily understood:
			 *
			 * @returns {Int} Height of the admin bar.
			 */
			'adminBar' : function() {
				var adminBar = $( '#wpadminbar' );
				return window.innerWidth > 600 ? adminBar.height() : 0;
			},

			/**
			 * This is where we are going to create the full screen background
			 * effect.
			 */
			'themeBackground' : function() {
				var windowHeight, header;
				windowHeight = window.innerHeight;
				header = $( '#boldgrid-sticky-wrap' ).offset().top;
				$( '.site-content' ).css( 'margin-top', windowHeight + header - Starter.starter_home.adminBar() + 'px' );
			},
			/**
			 * This is where we setup our theme sections and appearences.
			 */
			'themeSections': function() {
				var sections = $( '.site-content' ).find( '.bgtfw > .boldgrid-section' );
				$.each( sections, function() {
					// Reset our display and height for elements on resize.
					$( this ).css({
						'display' : 'block',
						'height' : ''
					});
					// Check if the height of the section is taller than the viewport.
					if ( $( this ).height() < window.innerHeight ) {
						// If it is we will set the height to center the content.
						$( this ).css( 'height', window.innerHeight );
						// Align our section content veritcally.
						$( this ).css({
							'display' : 'flex',
							'align-items' : 'center',
						});
					}
				});
			},

			/**
			 * This is the method that will create the little arrow button displayed
			 * when you load the page.  This is used to scroll the user to the
			 * start of the content.
			 */
			'continueButton' : function() {
				// This is the button we are going to add, it's just a fontawesome icon.
				var button = $( '<div class="continue-reading wow fadeIn" data-wow-delay="1s"><i class="fa fa-3x fa-arrow-circle-down"></i></div>');

				// Add our "continue" button to scroll to the next page.
				$( 'body' ).prepend( button );

				// We can't rely on users correctly inputting anchors, so we rely
				// on the structure of the content when they use the editor plugin.
				$( button ).on( 'click', function() {

					// Make it looks somewhat pretty and add some smooth scrolling.
					$( 'html, body' ).animate({
						scrollTop: $( '.site-content' )
							.offset().top - Starter.starter_home.adminBar()
					}, 1000, function() {
						// If we haven't made a clone yet, we will create it now.
						// The scroll spy should've taken care of this by now though.
						if ( ! $( '.navbar.clone' ).length ) {
							$( '.navbar.navbar-default' ).clone( true, true ).addClass( 'navbar-scrolled clone' ).appendTo( 'body' );
						}
					});
				});
			},
		}
	};

	/*
	 * The routing fires all common scripts, followed by the DOM specific
	 * scripts.  Additional events can be added for more control over timing.
	 */
	var UTIL = {
		fire: function( func, funcname, args ) {
			var fire, namespace = Starter;
			funcname = ( undefined === funcname ) ? 'init' : funcname;
			fire = '' !== func;
			fire = fire && namespace[func];
			fire = fire && 'function' === typeof namespace[func][funcname];

			if ( fire ) {
				namespace[func][funcname]( args );
			}
		},
		loadEvents: function() {

			// Fire common init JS.
			UTIL.fire( 'common' );

			// Fire page-specific init JS, and then finalize JS.
			$.each( document.body.className.replace( /-/g, '_' ).split( /\s+/ ), function( i, classnm ) {
				UTIL.fire( classnm );
				UTIL.fire( classnm, 'finalize' );
			});

			// Fire common finalize JS.
			UTIL.fire( 'common', 'finalize' );
		}
	};

	// Load Events.
	$( document ).ready( UTIL.loadEvents );
})( jQuery );
