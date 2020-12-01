<?php
	// HEAD
	echo '<!DOCTYPE html>',
		 '<html ';
	language_attributes();
	echo '>',
		 '<head>',
		 '<meta charset="'.get_bloginfo('charset').'">',
		 '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=10.0, user-scalable=yes"/>';
?>

<?php
    // Blog description
	echo '<meta name="description" content="';
	if ( is_single() ) { 
		bloginfo('name'); echo "|"; 
		single_post_title('', true); 
	} else { 
		bloginfo('name'); echo "|"; 
		bloginfo('description'); 
	} 
	echo '" />',

	 	 '<title>';
		wp_title( '|', true, 'right' );
	echo '</title>';

		 '<link rel="pingback" href="'.get_bloginfo('pingback_url').'">';
	wp_head();

	echo '<!-- Google Tag Manager -->'."\n",
		 '<script>'."\n",
		 '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});'."\n",
		 'var f=d.getElementsByTagName(s)[0],'."\n",
		 'j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;'."\n",
		 'j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);'."\n",
		 '})(window,document,"script","dataLayer","GTM-NQZ3QMM");'."\n",
		 '</script>'."\n",
		 '<!-- End Google Tag Manager -->'."\n",
		 '</head>';

	// HEADER
	echo '<body ';
	body_class('body');
	echo '>'."\n",
		 '<!-- Google Tag Manager (noscript) -->'."\n",
		 '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQZ3QMM" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>'."\n",
		 '<!-- End Google Tag Manager (noscript) -->'."\n",
    

    // Header
		 '<header class="headerMain">',

         '<div class="header-content">',
	// Custom logo
		 '<div id="logo">';
		if ( is_home() || is_front_page() ){
			echo '<h1 class="blog-name"><a href="'.esc_url(home_url('/')).'" id="site-logo" title="'.esc_attr(get_bloginfo('name', 'display')).'" rel="home">',
			  '<img class="logo-img" src="/cms/wp-content/themes/wikiwp/images/logo.svg" alt="'.esc_attr(get_bloginfo('name', 'display')).'"></a></h1>';
		}else{
			echo '<h2 class="blog-name"><a href="'.esc_url(home_url('/')).'" id="site-logo" title="'.esc_attr(get_bloginfo('name', 'display')).'" rel="home">',
	 		 '<img class="logo-img" src="/cms/wp-content/themes/wikiwp/images/logo.svg" alt="'.esc_attr(get_bloginfo('name', 'display')).'"></a></h2>';
		}

        echo '</div>', // end of .logo

			 '</div>'; // end of .header-content
		
        echo '</header>',
             
    // Container
         '<div class="container-fluid">';

// WordPress core custom header image
    $header_image = get_header_image();
		if ( empty( $header_image ) ) {
			// If no header image is set
            // Search form
            echo '<div class="meta clearfix">';
        } else {
            echo '<div class="header-image-container">',
                 '<img src="'.esc_url( $header_image ).'" class="header-image" width="'.get_custom_header()->width.'" height="'.get_custom_header()->height.'" alt="" />',
                 '</div>',
            // Search form
                 '<div class="meta meta-header-image clearfix">';
        } // End of custom header