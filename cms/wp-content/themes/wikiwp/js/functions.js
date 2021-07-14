jQuery(document).ready(function ($) {
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

    //アコーディオンモジュール
    if ($(".acd-01 .acd-panel .acd-panel-heading").length) {
        $(".acd-01 .acd-panel").addClass("is-close").attr({"aria-expanded": "false","aria-hidden": "true","role":"button"});
        $(".acd-01 .acd-panel .acd-panel-heading").attr({ "tabindex": "0" });

        $(".acd-01 .acd-panel .acd-panel-heading").on("click", function () {
            var tgl = $(this).parents(".acd-panel");
            if (tgl.hasClass("is-open")) {
                tgl.removeClass("is-open");
                tgl.addClass("is-close").attr({"aria-expanded": "false","aria-hidden": "true"});
            } else {
                tgl.removeClass("is-close");
                tgl.addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
                $(".acd-01 .acd-panel").not(tgl).addClass("is-close").removeClass("is-open").attr({"aria-expanded": "false","aria-hidden": "true"});
                var pos = Math.floor(tgl.offset().top) - 100;
                $("html, body").animate({scrollTop:pos}, 600);
            }
            return false;
        });

        $(".acd-01 .acd-panel .acd-panel-heading").on('keydown', function(event){
            if (event.key === "Enter"){
            var tgl = $(this).parents(".acd-panel");
            $(".acd-01 .acd-panel").not(tgl).addClass("is-close").removeClass("is-open").attr({"aria-expanded": "false","aria-hidden": "true"});

            if (tgl.hasClass("is-open")) {
                tgl.removeClass("is-open");
                tgl.addClass("is-close").attr({"aria-expanded": "false","aria-hidden": "true"});;
            } else {
                tgl.removeClass("is-close");
                tgl.addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
                $(".acd-01 .acd-panel").not(tgl).addClass("is-close").removeClass("is-open").attr({"aria-expanded": "false","aria-hidden": "true"});
                var pos = Math.floor(tgl.offset().top) - 100;
                $("html, body").animate({scrollTop:pos}, 600);                
            }
            return false;
            }
        });

        $(function(){
            var urlHash = location.hash;
            if(urlHash){
                var titleHash = $(".acd-panel").find(urlHash);
                var contentHash = $(".acd-panel-content").find(urlHash);

                if(contentHash){
                    $(contentHash).parents(".acd-panel").removeClass("is-close").addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
                }
                var titleHash = $(".acd-panel").find(urlHash);
                if(titleHash){
                    $(titleHash).parents(".acd-panel").removeClass("is-close").addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
                }
            }
        });
    }
    //ページ内リンクのスクロール調整
    $(window).on('load', function() {
        var url = $(location).attr('href');
        if(url.indexOf("#") != -1){
        var anchor = url.split("#");
        var target = $('#' + anchor[anchor.length - 1]);
        if(target.length){
        var pos = Math.floor(target.offset().top) - 60;
        $("html, body").animate({scrollTop:pos}, 500);
        }
        }
    });
    $('a[href^="#"]').click(function() {
        var href= $(this).attr("href");
        var target = $(href);
        var position = target.offset().top - 60;
        $('body,html').stop().animate({scrollTop:position}, 500);   
        return false;
    });

    //タブモジュール
    if ($(".entryContent .tab-content").length) {
        $(".tab-content .tab-menu .btn-tab.default a").addClass("active");
        $(".tab-content .tab-panel:not(.default)").addClass("inactive");

        $(".tab-content .tab-menu .btn-tab a").on("click", function () {
                $(".tab-content .tab-menu .btn-tab a").removeClass("active");
                $(this).addClass("active");
            return false;
        });

        $(".tab-content .tab-menu .btn-tab a").on('keydown', function(event){
            if (event.key === "Enter"){
                $(".tab-content .tab-menu .btn-tab a").removeClass("active");
                $(this).addClass("active");
                return false;
            }
        });
    }
});