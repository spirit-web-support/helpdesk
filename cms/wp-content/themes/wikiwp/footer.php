<?php
	echo '</div></div>', // end of .container
    // FOOTER
         '<footer class="footerMain">',
         '<div id="page-top"><a href="#" tabindex="0">TOP</a></div>';
    // COPYRIGHT

    echo '<div class="copyright">',

         '<p>',
		 '&copy;&nbsp;';
	echo 
         '2018-',
         (int)date('Y'),
         '&nbsp;立教大学&nbsp;Rikkyo University',
         '</p>',
         '</div>',  
		 '</footer>';
 	wp_footer();
	echo '</body></html>';