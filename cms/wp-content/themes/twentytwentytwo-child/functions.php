<?php
//CSS
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
remove_action( 'wp_enqueue_scripts', 'wp_common_block_scripts_and_styles' );

function theme_enqueue_styles() {
    wp_enqueue_style('style', get_stylesheet_directory_uri() . '/style.css');
    wp_enqueue_style('module', get_stylesheet_directory_uri() . '/module.css');
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles', 11);

//js
function custom_print_scripts() {
	if (!is_admin()) {
		//デフォルトjquery削除
		wp_deregister_script('jquery');
		//GoogleCDNから読み込む
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

?>