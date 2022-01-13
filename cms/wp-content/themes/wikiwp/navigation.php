<div class="navMenu">
    <input type="checkbox" id="checkMenuButton">
    <label for="checkMenuButton">
    <span>Menu</span>
    </label>

    <?php
            get_search_form();
    ?>

    <div class="primary-menu primary-menu-side">
        <div class="primary-menu-container">
          <input id="acd-check1" class="acd-check" type="checkbox">
          <label class="acd-label" for="acd-check1">Language</label>
          <div class="acd-content">
            <ul>
        <li><?php echo do_shortcode('[glt language="Japanese" label="日本語" text="yes"]'); ?></li>
        <li><?php echo do_shortcode('[glt language="English" label="English" text="yes"]'); ?></li>
        <li><?php echo do_shortcode('[glt language="Korean" label="한국어" text="yes"]'); ?></li>
        <li><?php echo do_shortcode('[glt language="Chinese (Simplified)" label="简体中文" text="yes"]'); ?></li>
        <li><?php echo do_shortcode('[glt language="Chinese (Traditional)" label="繁体中文" text="yes"]'); ?></li>
      </ul>

          </div>
            <nav class="nav-container">

<!--
<ul>
<?php
$main_menu = wp_get_nav_menu_items('メニュー', array());
$count = 0;
$submenu = false;

foreach($main_menu as $menu){
  if(!$menu->menu_item_parent){
    $parent_id = $menu->ID;
    echo '<li><a href="'.$menu->url.'">'.$menu->title.'</a>';
  }
  if($parent_id == $menu->menu_item_parent){
    if(!$submenu){
      $submenu = true;
      echo '<ul class="footer_lower-menu">';
    }
    echo '<li><a href="'.$menu->url.'">'.$menu->title.'</a></li>';
    if($main_menu[$count + 1]->menu_item_parent != $parent_id && $submenu){
      echo '</ul>';
      $submenu = false;
    }
  }
  if($main_menu[$count + 1]->menu_item_parent != $parent_id){
    echo '</li>';
    $submenu = false;
  }
  $count++;
}
?>
</ul>
-->


                <?php
                // Main menu with fallback
                wp_nav_menu(array(
                    'theme_location' => 'main-menu',
                    'items_wrap' => '<ul class="main-menu">%3$s</ul>',
                    'fallback_cb' => 'main_menu_fallback',
                ));
                // Main menu fallback
                function main_menu_fallback() {
                    echo '<ul class="default-nav">';
                    // show pages
                    wp_list_pages( $args = array(
                        'title_li'     => '<span class="menu-title">'. __('Pages', 'wikiwp') .'</span>'
                    ));
                    // show categories
                    wp_list_categories( $args = array(
                        'title_li'     => '<hr><span class="menu-title">'. __('Categories', 'wikiwp') .'</span>'
                    ));
                    echo '</ul>';
                }
                // Meta menu
                wp_nav_menu(array(
                    'theme_location' => 'meta-menu',
                    'items_wrap' => '<ul class="meta-menu">%3$s</ul>',
                    'fallback_cb' => '',
                ));
                ?>

            </nav>
            <?php
            // sidebar
            get_sidebar();
            ?>
        </div>
    </div>
</div>