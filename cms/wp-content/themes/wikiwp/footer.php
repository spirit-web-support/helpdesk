<?php
	echo '</div>', // end of .container
    // FOOTER
         '<footer>';
    /*     '<div class="content clearfix">';
    // dynamic sidebar
    if ( is_active_sidebar( 'footer-left' ) ) :
        echo '<div class="col-md-4 dynamic-sidebar-footer-left">';
        dynamic_sidebar( 'footer-left' );
        echo '</div>';
    endif;

    if ( is_active_sidebar( 'footer-mid' ) ) :
        echo '<div class="col-md-4 dynamic-sidebar-footer-middle">';
        dynamic_sidebar( 'footer-mid' );
        echo '</div>';
    endif;

    if ( is_active_sidebar( 'footer-right' ) ) :
        echo '<div class="col-md-4 dynamic-sidebar-footer-right">';
        dynamic_sidebar( 'footer-right' );
        echo '</div>';
    endif;
    */


    // COPYRIGHT

    echo '<div class="col-md-12 copyright">',

         '<p>',
		 '&copy;&nbsp;';
	echo //'&nbsp;<a href="'.esc_url( home_url() ).'">'.get_bloginfo('name').'</a></strong>',
         '2018-',
         (int)date('Y'),
         '&nbsp;立教大学メディアセンター',
         '</p>',
         '</div>',  
		 '</footer>';
 	wp_footer();
	echo '</body></html>';