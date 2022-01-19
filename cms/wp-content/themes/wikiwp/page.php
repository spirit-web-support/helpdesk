<?php
get_header();
get_template_part('navigation');

// post
?>

<div class="pageContainer">
	<?php
	breadcrumb();
	?>
	<div class="pageInner">
		<?php
		// get content format
		get_template_part( 'content', get_post_format() );

		// comments
		comments_template();
		?>
	</div>
</div>

<?php
// sidebar
get_sidebar();

// footer
get_footer();