jQuery(document).ready(function ($) {
    var $window = $(window),
        // header
        header = $(".header-content"),
        // menu
        menu = $(".primary-menu"),
        menu_side = $(".primary-menu-side"),
        menu_side_link = $(".primary-menu-side ul li a[href]");

    /*
    // Navigation
    $(menu_side_button).addClass('navMenuButtonClose');
    menu.addClass('primary-menu-side-close');
	$(menu_side_button).on('click', function () {
        if ($(menu_side_button).hasClass('navMenuButtonOpen' )){
            $(menu_side_button).removeClass('navMenuButtonOpen');
            $(menu_side_button).addClass('navMenuButtonClose');
            menu.removeClass('primary-menu-side-open');
            menu.addClass('primary-menu-side-close');
        }else if($(menu_side_button).hasClass('navMenuButtonClose' )){
            $(menu_side_button).removeClass('navMenuButtonClose');
            $(menu_side_button).addClass('navMenuButtonOpen');
            menu.removeClass('primary-menu-side-close');
            menu.addClass('primary-menu-side-open');
        }
    });


	$(menu_side_link).on('click', function () {
        // menu
        menu.toggleClass('primary-menu-side-open');
        menu_side.toggleClass('main-menu-active');
        menu_side_button.toggleClass('navMenuButtonActive');
        //content
        container.toggleClass('container-menu-side-open');
    });

    
    // WNavigation window size
    if ($window.width() < 1200) {
        // menu
        $(menu).addClass('mobile-menu');
    } else {
        // header
        header.removeClass('primary-menu-side-open');
        // menu
        menu.removeClass('mobile-menu');
        menu.removeClass('main-menu-active');
        menu.removeClass('primary-menu-side-open');
        menu_side.removeAttr('style');
    }

    // Navigation window rezise
    $(window).on('resize', function () {
        if ($window.width() < 1200) {
            // menu
            $(menu).addClass('mobile-menu');
            menu_side.removeAttr('style');
        } else {
            // header
            header.removeClass('primary-menu-side-open');
            header.removeClass('container-menu-side-open');
            // menu
            menu.removeClass('mobile-menu');
            menu.removeClass('main-menu-active');
            menu.removeClass('primary-menu-side-open');
        }
    });
    
    $(window).resize(function () {
		var w = $(window).width();
		if (w > 320 && menu.is(':hidden')) {
			// menu
            menu_side.removeAttr('style');
		}
    });
    */

    $(".sub-menu").addClass("inactive");
    $(".primary-menu.primary-menu-side .current-menu-item").parents(".sub-menu").addClass("active").removeClass("inactive");
    $(".primary-menu.primary-menu-side .current-menu-item").parents(".menu-item").addClass("is-close");
    var menuNest = $(".primary-menu.primary-menu-side .menu-item");
    menuNest.not(".is-close").has(".sub-menu").addClass("is-open");

    $(".primary-menu.primary-menu-side .is-open > a").on("click", function () {
        var tgl = $(this).parent();
        if (tgl.hasClass("is-open")) {
            var target = tgl.children(".sub-menu");
            tgl.removeClass("is-open");
            tgl.addClass("is-close");
            target.addClass("active");
            target.removeClass("inactive");
        } else {
            var target = tgl.children(".sub-menu");
            tgl.removeClass("is-close");
            tgl.addClass("is-open");
            target.addClass("inactive");
            target.removeClass("active");
        }
        return false;
    });

    $(".primary-menu.primary-menu-side .is-close > a").on("click", function () {
        var tgl = $(this).parent();
        if (tgl.hasClass("is-open")) {
            var target = tgl.children(".sub-menu");
            tgl.removeClass("is-open");
            tgl.addClass("is-close");
            target.addClass("active");
            target.removeClass("inactive");
        } else {
            var target = tgl.children(".sub-menu");
            tgl.removeClass("is-close");
            tgl.addClass("is-open");
            target.addClass("inactive");
            target.removeClass("active");
        }
        return false;
    });
});