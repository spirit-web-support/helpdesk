<?php
// meta name='robots' content='max-image-preview:large' を非表示
remove_filter( 'wp_robots', 'wp_robots_max_image_preview_large' );

// meta name="generator" を非表示
remove_action('wp_head', 'wp_generator');

// EditURIを非表示
remove_action('wp_head', 'rsd_link');

// 短縮URLを非表示
remove_action('wp_head', 'wp_shortlink_wp_head');

// 絵文字用JS・CSSを非表示
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_styles', 'print_emoji_styles');

// RSS フィードリンクを非表示
function remove_all_rss_feed_links() {
    remove_action('wp_head', 'feed_links_extra', 3);
    remove_action('wp_head', 'feed_links', 2);
}
add_action('wp_head', 'remove_all_rss_feed_links', 1);

// REST APIを非表示
remove_action('wp_head','rest_output_link_wp_head');

// oEmbedを非表示
remove_action('wp_head','wp_oembed_add_discovery_links');

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

//CSS
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
remove_action( 'wp_enqueue_scripts', 'wp_common_block_scripts_and_styles' );

function theme_enqueue_styles() {
    wp_enqueue_style('style', get_stylesheet_directory_uri() . '/style.css');
    wp_enqueue_style('module', get_stylesheet_directory_uri() . '/css/module.css');
    wp_enqueue_style('print', get_stylesheet_directory_uri() . '/css/print.css');
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles', 11);

//js
function custom_print_scripts() {
	if (!is_admin()) {
		wp_enqueue_script('jquery-js', '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js' );
	}
}
add_action('wp_print_scripts', 'custom_print_scripts');

// simplebar
function enqueue_simplebar() {
	wp_enqueue_script( 'jquery-simplebar', 'https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js',[], '6.0.0', true);
	wp_enqueue_style( 'css-simplebar', 'https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.css' );
	}
add_action( 'wp_enqueue_scripts', 'enqueue_simplebar' );

function link_scripts() {
wp_enqueue_script( 'custom', get_stylesheet_directory_uri() . '/js/custom.js', '', '', true );
}
add_action('wp_enqueue_scripts', 'link_scripts' );

//FontAwesome
function enqueue_fontAwesome() {
	wp_enqueue_style( 'css-fontawesome', 'https://use.fontawesome.com/releases/v6.2.0/css/all.css' );
	}
add_action( 'wp_enqueue_scripts', 'enqueue_fontAwesome' );

//Favicon
function favicon(){
		echo 
		 '<!-- Favicon -->'."\n",
		 '<script src="https://j.wovn.io/1" data-wovnio="key=AMy2Dn" async></script>'."\n",
		 '<link rel="icon" href="/cms/wp-content/themes/twentytwentytwo-child/images/icon.svg" type="image/svg+xml">'."\n",
		 '<link rel="apple-touch-icon" href="/cms/wp-content/themes/twentytwentytwo-child/images/apple-touch-icon.png"><!-- 180×180 -->'."\n",
		 '<link rel="manifest" href="/cms/wp-content/themes/twentytwentytwo-child/images/manifest.webmanifest">'."\n";
}; 
add_action( 'wp_head', 'favicon',100);

//wovn
function wovn(){
		echo 
		 '<!-- wovn -->'."\n",
		 '<script src="https://j.wovn.io/1" data-wovnio="key=AMy2Dn" async></script>';
}; 
add_action( 'wp_head', 'wovn',100);

//Google Tag Manager
function gtag(){
		echo 
		 '<!-- Google Tag Manager -->'."\n",
		 '<script>'."\n",
		 '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});'."\n",
		 'var f=d.getElementsByTagName(s)[0],'."\n",
		 'j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;'."\n",
		 'j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);'."\n",
		 '})(window,document,"script","dataLayer","GTM-NQZ3QMM");'."\n",
		 '</script>'."\n",
		 '<!-- End Google Tag Manager -->'."\n";
}; 
add_action( 'wp_head', 'gtag',101);

function gtag_noscript(){
	    echo 
		 '<!-- Google Tag Manager (noscript) -->'."\n",
		 '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQZ3QMM" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>'."\n",
		 '<!-- End Google Tag Manager (noscript) -->'."\n";
}; 
add_action( 'wp_body_open', 'gtag_noscript');

//search.html

function search_result_title_shortcode() {
    if (is_search()) {
        global $wp_query;
        $total_results = $wp_query->found_posts;
        return '<h1 class="wp-block-query-title">「' . esc_html(get_search_query()) . '」の検索結果一覧 全' . $total_results . '件</h1>';
    }
}
add_shortcode('search_result_title', 'search_result_title_shortcode');

global $more;
$more = 1;

add_filter(
    'the_content',
    function ( string $content ) {
        if ( ! is_search() ) {
            return $content;
        }
        $count   = 100;
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

//検索結果の表示件数
function my_pre_get_posts( $query ) {
  if ( is_admin() || !$query->is_main_query() ) {
    return;
  }
  if ( $query->is_search() ) {
    $query->set( 'posts_per_page', 20 );
  }
}
add_action('pre_get_posts','my_pre_get_posts');

//Authorアーカイブページを404ページにリダイレクト
function author_custom_redirection() {
    global $wp_rewrite;
    $wp_rewrite->flush_rules();
    $wp_rewrite->author_base = '';
    $wp_rewrite->author_structure = '/';
    if (isset($_REQUEST['author']) && !empty($_REQUEST['author'])) {
        wp_redirect(home_url('/404.php'));
        exit;
    }
}
add_action('init', 'author_custom_redirection');

//REST APIの無効化
function deny_rest_api_except_permitted( $result, $wp_rest_server, $request ){
 
  //permit Jetpack
  $permitted_routes = [ 'Jetpack'];
 
  $route = $request->get_route();
 
  foreach ( $permitted_routes as $r ) {
    if ( strpos( $route, "/$r/" ) === 0 ) return $result;
  }
 
  //permit Gutenberg（ユーザーが投稿やページの編集が可能な場合）
  if ( current_user_can( 'edit_posts' ) || current_user_can( 'edit_pages' )) {
    return $result;
  }
 
  return new WP_Error( 'rest_disabled', __( 'The REST API on this site has been disabled.' ), array( 'status' => rest_authorization_required_code() ) );
}
add_filter( 'rest_pre_dispatch', 'deny_rest_api_except_permitted', 10, 3 );

//オートフォーマットの無効化
remove_filter('the_content', 'wpautop');

/* // ログイン画面へのURLを変更
define( 'LOGIN_CHANGE_PAGE', 'ryw3hdm.php' );
// オリジナルのログインURL以外は403エラー
if ( ! function_exists( 'login_change_init' ) ) {
    function wp_login_url_403_error() {
        if ( !defined( 'LOGIN_CHANGE' ) || sha1( 'en3ject' ) != LOGIN_CHANGE ) {
			status_header( 403 );
          exit;
        }
    }
}
add_action( 'login_init', 'wp_login_url_403_error' );
// ログイン済みか新規作成したログインURLの場合はwp-login.phpを置き換え
if ( ! function_exists( 'login_change_site_url' ) ) {
    function wp_login_change_site_url( $url, $path, $orig_scheme, $blog_id ) {
       // ログイン画面、ログイン画面を用いた処理の画面名をリプレイス
        if ( ( $path == 'wp-login.php' || preg_match( '/wp-login\.php\?action=\w+/', $path ) ) &&
            ( is_user_logged_in() || strpos( $_SERVER['REQUEST_URI'], LOGIN_CHANGE_PAGE ) !== false ) )
            $url = str_replace( 'wp-login.php', LOGIN_CHANGE_PAGE, $url );
        return $url;
    }
}
add_filter( 'site_url', 'wp_login_change_site_url', 10, 4 );

// ログアウト時のリダイレクト先の設定
if ( ! function_exists( 'login_change_wp_redirect' ) ) {
    function wp_logout_redirect_setting( $location, $status ) {
        if ( strpos( $_SERVER['REQUEST_URI'], LOGIN_CHANGE_PAGE ) !== false )
            $location = str_replace( 'wp-login.php', LOGIN_CHANGE_PAGE, $location );
        return $location;
    }
}
add_filter( 'wp_redirect', 'wp_logout_redirect_setting', 10, 2 ); */

//wp-sitemap.xml 投稿者アーカイブを無効化
add_filter('wp_sitemaps_add_provider', function ( $provider, $name ) {
    if ( 'users' === $name ) {
        return false;
    }
    return $provider;
},  10, 2);


add_filter(
    'wp_sitemaps_taxonomies',
    function( $taxonomies ) {
        // 「カテゴリー」を除外
        unset( $taxonomies['category'] );
        // 「タグ」を除外
        unset( $taxonomies['post_tag'] );
        // その他カスタムタクソノミー
        unset( $taxonomies['omf_folders'] );
        return $taxonomies;
    }
);

//コピーライト（footer）
function custom_copyright_shortcode() {
    return '<p>&copy; 2018 - ' . (int)date('Y') . ' 立教大学 Rikkyo University</p>';
}
add_shortcode('custom_copyright', 'custom_copyright_shortcode');

?>