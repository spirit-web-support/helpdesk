<?php if(is_front_page()) : ?>
<div class="entry entryTypePost">
    <div class="entryContent">
        <?php
        // get the content
        while ( have_posts() ) : the_post();
        the_content();
        endwhile;
        ?>
    </div>
        <?php
        if (is_user_logged_in()) {
            echo '<div class="postinfo-edit">
                    <div class="edit">';
            edit_post_link(__('edit', 'wikiwp'));
            echo '</div>
                    </div>';
        }
        ?>
</div>
<?php else: ?>
<div class="entry entryTypePost">
    <div class="entryHeader">
        <h1 class="entryTitle">
            <?php
            while ( have_posts() ) : the_post();
            the_title();
            ?>
        </h1>
            <?php $value = get_post_meta($post->ID, 'linkUrl', true);?>
            <?php if(!empty($value)):?>
                <div class="btn-external">
                    <?php
                        $page_id = get_the_ID(); //ページのIDを取得
                        echo '<a href="';
                        echo esc_url(get_post_meta($page_id, 'linkUrl', true));
                        echo '" target="_blank">';
                        echo esc_html(get_post_meta($page_id, 'linkText', true));
                        echo '</a>';
                    ?>
                </div>
            <?php endif;?>
    </div>

    <div class="entryContent">
        <?php
        // get the content
        the_content();
        endwhile;
        ?>
    </div>
    <?php
        if (is_user_logged_in()) {
            echo '<div class="postinfo-edit">
                    <div class="edit">';
            edit_post_link(__('edit', 'wikiwp'));
            echo '</div>
                    </div>';
        }
    ?>
</div>
<?php endif; ?>