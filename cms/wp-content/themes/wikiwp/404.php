<?php
get_header();
get_template_part('navigation');
?>

<div class="pageContainer">
	<?php
	breadcrumb();
	?>
	<div class="pageInner">
		<div class="entry entryTypePost">
			<div class="entryHeader">
				<h1 class="entryTitle">Page Not Found</h1>
				<div class="entryContent">
					<p>お探しのページは存在しません。<br>
					URLの入力ミスがないかを確認するか、トップページへ移動してください。</p>
					<p class="txt-link"><a href="/">トップページへ戻る</a></p>
				</div>
			</div>
		</div>
	</div>
</div>

<?php
// sidebar
get_sidebar();

// footer
get_footer();