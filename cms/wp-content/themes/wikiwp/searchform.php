<?php
	echo '<form role="search" method="get" class="search-form" action="'.home_url( '/' ).'" autocomplete="off">',
		 '<label>',

		 '<input type="search" class="search-field" value="'.get_search_query().'" name="s" id="s" title="'.__( 'Search', 'wikiwp' ).'" />',
		 '<input type="submit" class="search-submit" value="" />',
		 '</label>',
		 '</form>';