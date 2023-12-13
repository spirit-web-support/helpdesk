jQuery(document).ready(function ($) {
    //グローバルメニュー
    (function () {
        'use strict';
        var lytNav = document.getElementById('lyt-nav');

        //PCメニュー
        if (lytNav) {
            var subMenuTitle = document.querySelectorAll('input[id^="sub-menu"]');
            subMenuTitle.forEach((element) => {
                element.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') {
                        event.target.checked = !event.target.checked;
                    }
                })
            })
        } 

        //SPハンバーガーメニュー
        var btnNav = document.getElementById('btn-nav');
        var body = document.getElementsByTagName('body');

        if (btnNav) {
            function bodyfixed() {
                body[0].classList.toggle('fixed');
            }

            btnNav.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    btnNav.checked = !btnNav.checked;
                    bodyfixed();
                }
            });

            btnNav.addEventListener('change', function () {
                bodyfixed();
            }, false);

            window.addEventListener('resize', function () {
                btnNav.checked = false;
                body[0].classList.remove('fixed');
            }, false);
        }

        //SPメニュー追随
        $(function () {
            if (lytNav) {
                var windowWidth = window.innerWidth;
                if (windowWidth <= 990) {
                    'load scroll'.split(' ').forEach((eventName) => {
                        window.addEventListener(eventName, () => {
                            if ($(this).scrollTop() > 200 && lytNav.classList.contains('fixed') == false) {
                                lytNav.classList.add('fixed');
                                lytNav.animate({ top: ['-100px', '0'], }, 600);
                            }
                            else if ($(this).scrollTop() < 199 && lytNav.classList.contains('fixed') == true) {
                                lytNav.classList.remove('fixed');
                            }
                        });
                    })
                }
            }
        });
    }());

    //Page Top
    (function () {
        $("#page-top").hide();
        $("#page-top a").removeAttr('href');
        $(window).on('load scroll', function () {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            var footHeight = $("footer").innerHeight();
            var TopBtnHeight = $("#page-top").innerHeight();
            var windowWidth = window.innerWidth;
            if (windowWidth <= 990) {
                NavHeight = $("#lyt-nav.fixed").innerHeight();
                if (scrollHeight - scrollPosition - NavHeight - TopBtnHeight <= footHeight) {
                    $("#page-top").fadeIn(600);
                    $("#page-top").css({ position: "absolute", bottom: footHeight });
                } else if ($(this).scrollTop() > 100) {
                    $("#page-top").fadeIn(600);
                    $("#page-top").css({ position: "fixed", bottom: "0" });
                } else if ($(this).scrollTop() < 99) {
                    $("#page-top").fadeOut(600);
                }
            } else {
                if (scrollHeight - scrollPosition - TopBtnHeight <= footHeight) {
                    $("#page-top").fadeIn(600);
                    $("#page-top").css({ position: "absolute", bottom: footHeight });
                } else if ($(this).scrollTop() > 100) {
                    $("#page-top").fadeIn(600);
                    $("#page-top").css({ position: "fixed", bottom: "0" });
                } else if ($(this).scrollTop() < 99) {
                    $("#page-top").fadeOut(600);
                }
            }
        });
        $("#page-top a").click(function () {
            $('body, html').animate({ scrollTop: 0 }, 500);
            return false;
        });
        $("#page-top a").on('keydown', function (event) {
            if (event.key === "Enter") {
                $('body, html').animate({ scrollTop: 0 }, 500);
                return false;
            }
        });
    }());

    //ページ内リンクのスクロール調整
    $(window).on('load', function () {
        var url = $(location).attr('href');
        if (url.indexOf("#") != -1) {
            var anchor = url.split("#");
            var target = $('#' + anchor[anchor.length - 1]);
            if (target.length) {
                var position = Math.floor(target.offset().top) - 60;
                $("html, body").scrollTop(position);
            }
        }
    });
    $('a[href^="#"]:not(.btn-tab):not(#page-top a)').click(function () {
        var href = $(this).attr("href");
        var target = $(href);
        if (target.length) {
            var position = target.offset().top - 60;
            $('body,html').stop().animate({ scrollTop: position }, 500);
        }
        return false;
    });

    //アコーディオンモジュール
    if ($(".acd-01 .acd-panel .acd-panel-heading").length) {
        $(".acd-01 .acd-panel").addClass("is-closed").attr({ "aria-expanded": "false", "aria-hidden": "true" });
        $(".acd-01 .acd-panel .acd-panel-heading").attr({ "role": "button", "tabindex": "0"});

        (function () {
            var all = $('.acd-01 .acd-panel');
            var i = 0;
            var max = all.length;

            for (i; i < max; i++) {
                var headingHeight = ($(all[i])).find('.acd-panel-heading').outerHeight(true);
                ($(all[i])).height(headingHeight);
            };
        }());

        $(".acd-01 .acd-panel .acd-panel-heading").on("click", function () {
            var tgl = $(this).parents(".acd-panel");
 
            if (tgl.hasClass("is-open") || tgl.hasClass("is-opened")) {
                tgl.removeClass("is-open").removeClass("is-opened");
                tgl.addClass("is-close").attr({ "aria-expanded": "false", "aria-hidden": "true" });
                headingHeight = tgl.find('.acd-panel-heading').outerHeight(true);
                tgl.height(headingHeight);
            } else {
                tgl.removeClass("is-close").removeClass("is-closed");
                tgl.addClass("is-open").attr({ "aria-expanded": "true", "aria-hidden": "false" });
                headingHeight = tgl.find('.acd-panel-heading').outerHeight(true);
                contentHeight = tgl.find('.acd-panel-content').outerHeight(true);
                tgl.height(headingHeight + contentHeight + "px");
            }
            return false;
        });

        $(".acd-01 .acd-panel .acd-panel-heading").on('keydown', function (event) {
            if (event.key === "Enter") {
                var tgl = $(this).parents(".acd-panel");

                if (tgl.hasClass("is-open") || tgl.hasClass("is-opened")) {
                    tgl.removeClass("is-open").removeClass("is-opened");
                    tgl.addClass("is-close").attr({ "aria-expanded": "false", "aria-hidden": "true" });
                    headingHeight = tgl.find('.acd-panel-heading').outerHeight(true);
                    tgl.height(headingHeight);
                } else {
                    tgl.removeClass("is-close").removeClass("is-closed");
                    tgl.addClass("is-open").attr({ "aria-expanded": "true", "aria-hidden": "false" });
                    headingHeight = tgl.find('.acd-panel-heading').outerHeight(true);
                    contentHeight = tgl.find('.acd-panel-content').outerHeight(true);
                    tgl.height(headingHeight + contentHeight + "px");
                }
                return false;
            }
        });

        $(function () {
            var urlHash = location.hash;

            if (urlHash) {
                var titleHash = $(".acd-panel").find(urlHash);
                var contentHash = $(".acd-panel-content").find(urlHash);

                if (titleHash.hasClass("acd-panel-heading")) {
                    var tgl = $(titleHash).parents(".acd-panel");
                    tgl.removeClass("is-close").removeClass("is-closed");
                    tgl.addClass("is-opened").attr({ "aria-expanded": "true", "aria-hidden": "false" });
                    headingHeight = tgl.find('.acd-panel-heading').outerHeight(true);
                    contentHeight = tgl.find('.acd-panel-content').outerHeight(true);
                    tgl.height(headingHeight + contentHeight + "px");
                }
                if (contentHash.length) {
                    var tgl = $(contentHash).parents(".acd-panel");
                    tgl.removeClass("is-close").removeClass("is-closed");
                    tgl.addClass("is-opened").attr({ "aria-expanded": "true", "aria-hidden": "false" });
                    headingHeight = tgl.find('.acd-panel-heading').outerHeight(true);
                    contentHeight = tgl.find('.acd-panel-content').outerHeight(true);
                    tgl.height(headingHeight + contentHeight + "px");
                }
            }
        });
        $('a[href^="#"]:not(.btn-tab):not(#page-top a)').click(function () {
            var href = $(this).attr("href");
            if (href) {
                var titleHash = $(".acd-panel").find(href);
                var contentHash = $(".acd-panel-content").find(href);

                if (titleHash.hasClass("acd-panel-heading")) {
                    var tgl = $(titleHash).parents(".acd-panel");
                    tgl.removeClass("is-close").removeClass("is-closed");
                    tgl.addClass("is-open").attr({ "aria-expanded": "true", "aria-hidden": "false" });
                    headingHeight = tgl.find('.acd-panel-heading').outerHeight(true);
                    contentHeight = tgl.find('.acd-panel-content').outerHeight(true);
                    tgl.height(headingHeight + contentHeight + "px");
                }
                if (contentHash.length) {
                    var tgl = $(contentHash).parents(".acd-panel");
                    tgl.removeClass("is-close").removeClass("is-closed");
                    tgl.addClass("is-open").attr({ "aria-expanded": "true", "aria-hidden": "false" });
                    headingHeight = tgl.find('.acd-panel-heading').outerHeight(true);
                    contentHeight = tgl.find('.acd-panel-content').outerHeight(true);
                    tgl.height(headingHeight + contentHeight + "px");
                }
            }
            return false;
        });
        if ($(".acd-01 .btn-acd").length) {
            $(".acd-01 .btn-acd button").on("click", function () {
                if ($(this).hasClass("btn-open")) {
                    $(this).removeClass("btn-open");
                    $(this).addClass("btn-close");
                    $(this).html("すべての項目を閉じる")
                    var acd = $(this).parents(".acd-01");
                    var tgl = acd.find(".acd-panel");
                    tgl.removeClass("is-close").removeClass("is-closed");
                    tgl.addClass("is-open").attr({ "aria-expanded": "true", "aria-hidden": "false" });

                    (function () {
                        var all = tgl;
                        var i = 0;
                        var max = all.length;

                        for (i; i < max; i++) {
                            var headingHeight = ($(all[i])).find('.acd-panel-heading').outerHeight(true);
                            var contentHeight = ($(all[i])).find('.acd-panel-content').outerHeight(true);
                            ($(all[i])).height(headingHeight + contentHeight + "px");
                        };
                    }());
                } else {
                    $(this).removeClass("btn-close");
                    $(this).addClass("btn-open");
                    $(this).html("すべての項目を開く")
                    var acd = $(this).parents(".acd-01");
                    var tgl = acd.find(".acd-panel");
                    tgl.removeClass("is-open").removeClass("is-opened");
                    tgl.addClass("is-close").attr({ "aria-expanded": "false", "aria-hidden": "true" });

                    (function () {
                        var all = tgl;
                        var i = 0;
                        var max = all.length;

                        for (i; i < max; i++) {
                            var headingHeight = ($(all[i])).find('.acd-panel-heading').outerHeight(true);
                            ($(all[i])).height(headingHeight);
                        };
                    }());
                }
                return false;
            });
        }
    }
});