<?php
//CSS
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
remove_action( 'wp_enqueue_scripts', 'wp_common_block_scripts_and_styles' );

function theme_enqueue_styles() {
    wp_enqueue_style('style', get_stylesheet_directory_uri() . '/style.css');
    wp_enqueue_style('module', get_stylesheet_directory_uri() . '/module.css');
    wp_enqueue_style('print', get_stylesheet_directory_uri() . '/print.css');
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles', 11);

//js
function custom_print_scripts() {
	if (!is_admin()) {
		wp_enqueue_script('jquery-js', '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js' );
	}
}

// simplebar
function enqueue_simplebar() {
	wp_enqueue_script( 'jquery-simplebar', 'https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js',[], '6.0.0', true);
	wp_enqueue_style( 'css-simplebar', 'https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.css' );
	}
add_action( 'wp_enqueue_scripts', 'enqueue_simplebar' );

add_action('wp_print_scripts', 'custom_print_scripts');
function link_scripts() {
wp_enqueue_script( 'custom', get_stylesheet_directory_uri() . '/js/custom.js', '', '', true );
}
add_action('wp_enqueue_scripts', 'link_scripts' );

//Favicon
function favicon(){
		echo 
		 '<!-- Favicon -->'."\n",
		 '<link rel="icon" href="/cms/wp-content/themes/wikiwp/images/favicon.ico"><!-- 32×32 -->'."\n",
		 '<link rel="icon" href="/cms/wp-content/themes/wikiwp/images/icon.svg" type="image/svg+xml">'."\n",
		 '<link rel="apple-touch-icon" href="/cms/wp-content/themes/wikiwp/images/apple-touch-icon.png"><!-- 180×180 -->'."\n",
		 '<link rel="manifest" href="/cms/wp-content/themes/wikiwp/images/manifest.webmanifest">'."\n";
}; 
add_action( 'wp_head', 'favicon',100);

//remove emoji
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' ); 

//タイトルタグ
add_theme_support('title-tag');
function my_title_separator($separator) {
  $separator = '|';
  return $separator;
}
add_filter('document_title_separator', 'my_title_separator');

function change_document_title( $title ){
  if( is_category() )
  {
    $title = 'カテゴリー「' .single_cat_title('',false) .'」のページ一覧 | ' . get_bloginfo( 'name' );
  }
  else if( is_tag() ) {
    $title = 'タグ「' .single_tag_title('',false) .'」のページ一覧 | ' . get_bloginfo( 'name' );
  }
  else if( is_search() ){
    $title = '「' .get_search_query() .'」の検索結果一覧 | ' . get_bloginfo( 'name' );
  }
  return $title;
}
add_filter( 'pre_get_document_title', 'change_document_title' );

//meta
add_post_type_support('page', 'excerpt');

function register_meta_description() {
    global $post;   
    if( is_home() || is_front_page() ) {
        echo '<meta name="description" content="' . get_bloginfo( 'description' ) . '">';
    }
    else if ( is_singular() ) {
        $post_description = strip_tags( $post->post_excerpt );
        $post_description = mb_substr( $post_description, 0, 120, 'utf-8' );
        if (!$post_description){
            echo '<meta name="description" content="「' . get_the_title() . '」に関するページです。">';
        }else{
            echo '<meta name="description" content="' . $post_description . '">';
        }
    }
    else if( is_category() ) {
        echo '<meta name="description" content="「' . single_cat_title('',false) . '」に関するページ一覧です。">';
    }
    else if( is_tag() ) {
        echo '<meta name="description" content="「' . single_tag_title('',false) . '」に関するページ一覧です。">';
    }
}

add_action( 'wp_head', 'register_meta_description',1 );


// search.php

global $more;
$more = 1;

add_filter(
    'the_title',
    function ( string $title ) {
        if ( ! is_search() ) {
            return $title;
        }
        $keys    = implode( '|', array_filter( explode( ' ', get_search_query() ) ) );
        $pattern = '/(' . $keys . ')/iu';
        return preg_replace( $pattern, '<mark class="search-highlight">\0</mark>', $title );
    }
);

add_filter(
    'the_content',
    function ( string $content ) {
        if ( ! is_search() ) {
            return $content;
        }
        $count   = 100; // 検索した単語の前後の100文字を表示させます.
        $content = wp_strip_all_tags( $content );
        $keys    = implode( '|', array_filter( explode( ' ', get_search_query() ) ) );
        $pattern = '/(' . $keys . ')/iu';
        preg_match( $pattern, $content, $matches, PREG_OFFSET_CAPTURE );

        if ( ! ( isset( $matches[0] ) && isset( $matches[0][1] ) ) ) {
            return $content;
        }

        $start = mb_strlen( substr( $content, 0, $matches[0][1] ), 'utf-8' );
        return preg_replace( $pattern, '<mark class="search-highlight">\0</mark>', mb_substr( $content, max( $start - $count, 0 ), $count * 2 ) );
    }
);

?>