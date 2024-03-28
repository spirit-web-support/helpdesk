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
	if(is_search() || is_404() || is_category()){
		//
	} else {
		echo '<meta name="description" content="';
		if(is_front_page()){
			bloginfo('name'); echo " | "; 
			bloginfo('description'); 
		} else if ( is_page() || is_single() ){
			bloginfo('name');
			echo "「";
			single_post_title('', true);
			echo "」のページです。";
		} else { 
			bloginfo('name'); echo " | "; 
			bloginfo('description'); 
		} 
		echo '" />';
	}

	echo '<link rel="pingback" href="'.get_bloginfo('pingback_url').'">';

	wp_head();

	echo '<!-- wovn -->'."\n",
		 '<script src="https://j.wovn.io/1" data-wovnio="key=AMy2Dn" async></script>'."\n",
		 '<!-- Favicon -->'."\n",
		 '<link rel="icon" href="/cms/wp-content/themes/wikiwp/images/favicon.ico"><!-- 32×32 -->'."\n",
		 '<link rel="icon" href="/cms/wp-content/themes/wikiwp/images/icon.svg" type="image/svg+xml">'."\n",
		 '<link rel="apple-touch-icon" href="/cms/wp-content/themes/wikiwp/images/apple-touch-icon.png"><!-- 180×180 -->'."\n",
		 '<link rel="manifest" href="/cms/wp-content/themes/wikiwp/images/manifest.webmanifest">'."\n",
		 '</head>';

	// HEADER
	echo '<body ';
	body_class('body');
	echo '>'."\n",

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