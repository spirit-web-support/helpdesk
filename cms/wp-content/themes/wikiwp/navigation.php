<div class="navMenu">
    <input type="checkbox" id="checkMenuButton" tabindex="0">
    <label for="checkMenuButton" class="label-menu">
    <span>Menu</span>
    </label>

    <?php
            get_search_form();
    ?>

    <div class="primary-menu primary-menu-side">
        <div class="primary-menu-container">
          <nav class="nav-container">
    <div class="wovn-languages" data-ready="key=AMy2Dn&ready=true" data-theme="build-in">
      <ul class="wovn-lang-list">
        <li class="wovn-switch selected" data-value="ja" tabindex="0">日本語</li>
        <li class="wovn-switch" data-value="en" tabindex="0">English</li>
      </ul>
    </div>
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