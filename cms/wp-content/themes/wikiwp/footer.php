<?php
	echo '</div></div>', // end of .container
    // FOOTER
         '<footer>';

    // COPYRIGHT

    echo '<div class="col-md-12 copyright">',

         '<p>',
		 '&copy;&nbsp;';
	echo //'&nbsp;<a href="'.esc_url( home_url() ).'">'.get_bloginfo('name').'</a></strong>',
         '2018-',
         (int)date('Y'),
         '&nbsp;立教大学&nbsp;Rikkyo University',
         '</p>',
         '</div>',  
		 '</footer>';
 	wp_footer();
	echo '</body></html>';