jQuery(document).ready(function ($) {
    //グローバルメニュー
    (function () {
        'use strict';

        var all = document.querySelectorAll('ul.sub-menu');
        var i = 0;
        var max = all.length;

        for (i; i < max; i++) {
            all[i].classList.add('default');
            var subMenuHeight = all[i].clientHeight;
            all[i].style.height = subMenuHeight + 'px';
            all[i].classList.add('close');
        };

        var lytNav = document.getElementById('lyt-nav');
        

        //PCメニュー
        if (lytNav) {
            var subMenuTitle = document.querySelectorAll('input[id^="sub-menu"]');
            subMenuTitle.forEach((element) => {
                element.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') {
                        event.target.checked = !event.target.checked;
                        var subMenu = element.nextElementSibling.nextElementSibling;
                        if (element.checked) {
                            subMenu.classList.remove('close');
                            subMenu.classList.add('open');
                        } else {
                            subMenu.classList.remove('open');
                            subMenu.classList.add('close');
                        }
                    }
                })
            })

            subMenuTitle.forEach(function (element) {
                element.addEventListener('change', function () {
                    var subMenu = element.nextElementSibling.nextElementSibling;
                    if (element.checked){
                        subMenu.classList.remove('close');
                        subMenu.classList.add('open');
                    }else{
                        subMenu.classList.remove('open');
                        subMenu.classList.add('close');
                    }
                });
            });
        } 

        //SPハンバーガーメニュー
        var btnNav = document.getElementById('btn-nav');

        if (btnNav) {
            window.onpageshow = function () {
                btnNav.checked = false;
            };

            btnNav.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    btnNav.checked = !btnNav.checked;
                }
            });

            window.addEventListener('resize', function () {
                btnNav.checked = false;
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
            var topBtnHeight = $("#page-top").innerHeight();
            var windowWidth = window.innerWidth;
            if (windowWidth <= 990) {
                NavHeight = $("#lyt-nav.fixed").innerHeight();
                if (scrollHeight - scrollPosition - NavHeight - topBtnHeight <= footHeight) {
                    $("#page-top").fadeIn(600);
                    $("#page-top").css({ position: "absolute", bottom: footHeight });
                } else if ($(this).scrollTop() > 100) {
                    $("#page-top").fadeIn(600);
                    $("#page-top").css({ position: "fixed", bottom: "0" });
                } else if ($(this).scrollTop() < 99) {
                    $("#page-top").fadeOut(600);
                }
            } else {
                if (scrollHeight - scrollPosition - topBtnHeight <= footHeight) {
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

    //タブモジュール
    if ($(".entry-content .tab-content").length) {
        $(".tab-content .tab-menu").css('display', 'flex');
        $(".tab-content .tab-menu li .btn-tab.default").addClass("active").attr({ "role": "tab", "aria-expanded": "true", "aria-selected": "true", "tabindex": 0 });
        $(".tab-content .tab-menu li .btn-tab:not(.default)").addClass("inactive").attr({ "role": "tab", "aria-expanded": "false", "aria-selected": "false", "tabindex": -1 })

        $(".tab-content .tab-panel.default").addClass("active").attr({ "role": "tabpanel", "aria-hidden": "false" })
        $(".tab-content .tab-panel:not(.default)").addClass("inactive").attr({ "role": "tabpanel", "aria-hidden": "true" });

        var tabPanelAll = $(".tab-content .tab-panel");
        var max = tabPanelAll.length;
        var i = 0;
        for (i; i < max; i++) {
            var panelId = tabPanelAll[i].getAttribute('id');
            var tabId = panelId.replace("panel", "tab");
            tabPanelAll[i].setAttribute("aria-labelledby", tabId);
        };

        $(".tab-content .tab-menu li .btn-tab[href^='#']").on("click", function () {
            var tabContent = $(this).parents(".tab-content");
            tabContent.find('.btn-tab').removeClass("active").addClass("inactive").attr({ "aria-expanded": "false", "aria-selected": "false", "tabindex": -1 });
            $(this).addClass("active").attr({ "aria-expanded": "true", "aria-selected": "true", "tabindex": 0 });
            tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
            tabContent.find('.tab-panel').attr({ "aria-hidden": "true" });
            val = $(this).attr("href");
            var target = $(val == "#" || val == "" ? 'html' : val);
            target.removeClass("inactive").addClass("active");
            target.attr({ "aria-hidden": "false" });
            return false;
        });

        $(".tab-content .tab-menu li .btn-tab").on('keydown', function (event) {
            if (event.key === "Enter") {
                var href = $(this).attr("href");

                if (href.startsWith('#')) {
                    var tabContent = $(this).parents(".tab-content");
                    tabContent.find('.btn-tab').removeClass("active").addClass("inactive").attr({ "aria-expanded": "false", "aria-selected": "false", "tabindex": -1 });
                    $(this).addClass("active").attr({ "aria-expanded": "true", "aria-selected": "true", "tabindex": 0 });

                    tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
                    tabContent.find('.tab-panel').attr({ "aria-hidden": "true" });
                    val = $(this).attr("href");
                    var target = $(val == "#" || val == "" ? 'html' : val);
                    target.removeClass("inactive").addClass("active");
                    target.attr({ "aria-hidden": "false" });
                } else {
                    var target = $(this).attr("target");
                    if (target == "_blank") {
                        window.open(href);
                    } else {
                        location.href = href;
                    }
                }
                return false;
            } else if (event.keyCode === 39) {
                var tabContent = $(this).parents(".tab-content");
                var all = tabContent.find('.btn-tab');
                var index = all.index(this);
                var nextTab = all[index + 1];

                if (index == all.length - 1) {
                } else {
                    nextTab.focus();
                }
                return false;
            } else if (event.keyCode === 37) {
                var tabContent = $(this).parents(".tab-content");
                var all = tabContent.find('.btn-tab');
                var index = all.index(this);
                var prevTab = all[index - 1];

                if (index == 0) {
                } else {
                    prevTab.focus();
                }
                return false;
            }
        });

        $(function () {
            var urlHash = location.hash;
            if (urlHash) {
                var titleHash = $(".tab-menu").find(urlHash);
                var contentHash = $(".tab-panel").find(urlHash);

                if (titleHash) {
                    var menu = $(titleHash).parents(".tab-menu");
                    var menuList = menu.children("li");
                    menuList.find('.btn-tab').removeClass("active").addClass("inactive").attr({ "aria-expanded": "false", "aria-selected": "false", "tabindex": -1 });
                    $(titleHash).removeClass("inactive").addClass("active").attr({ "aria-expanded": "true", "aria-selected": "true", "tabindex": 0 });

                    var tabContent = $(titleHash).parents(".tab-content");
                    tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
                    tabContent.find('.tab-panel').attr({ "aria-hidden": "true" });
                    val = $(this).attr("href");
                    var target = $(val == "#" || val == "" ? 'html' : val);
                    target.removeClass("inactive").addClass("active");
                    target.attr({ "aria-hidden": "false" });
                }

                if (contentHash) {
                    var tabContent = $(contentHash).parents(".tab-content");
                    tabContent.find('.btn-tab').removeClass("active").addClass("inactive").attr({ "aria-expanded": "false", "aria-selected": "false", "tabindex": -1 });

                    tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
                    tabContent.find('.tab-panel').attr({ "aria-hidden": "true" });
                    $(contentHash).parents(".tab-panel").removeClass("inactive").addClass("active");
                    $(contentHash).parents(".tab-panel").attr({ "aria-hidden": "false" });

                    var all = tabContent.find('.btn-tab');
                    var max = all.length;
                    var i = 0;
                    for (i; i < max; i++) {
                        var target = all[i].getAttribute('href');
                        var hrefId = $(contentHash).parents(".tab-panel").attr('id');
                        var href = "#" + hrefId;
                        if (target === href) {
                            all[i].classList.add("active");
                            all[i].setAttribute("aria-expanded", "false");
                            all[i].setAttribute("aria-selected", "false");
                            all[i].setAttribute("tabindex", -1);
                        } else {
                            all[i].classList.remove("active");
                            all[i].classList.add("inactive");
                            all[i].setAttribute("aria-expanded", "true");
                            all[i].setAttribute("aria-selected", "true");
                            all[i].setAttribute("tabindex", 0);
                        }
                    };

                }
            }
        });

        $('a[href^="#"]:not(.btn-tab):not(#page-top a)').on("click", function () {
            var hrefHash = $(this).attr("href");

            if (hrefHash) {
                var titleHash = $(".tab-menu").find(hrefHash);
                var contentHash = $(".tab-panel").find(hrefHash);

                if (titleHash) {
                    var menu = $(titleHash).parents(".tab-menu");
                    var menuList = menu.children("li");
                    menuList.find('.btn-tab').removeClass("active").addClass("inactive").attr({ "aria-expanded": "false", "aria-selected": "false", "tabindex": -1 });
                    $(titleHash).removeClass("inactive").addClass("active").attr({ "aria-expanded": "true", "aria-selected": "true", "tabindex": 0 });

                    var tabContent = $(titleHash).parents(".tab-content");
                    tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
                    tabContent.find('.tab-panel').attr({ "aria-hidden": "true" });

                    val = $(titleHash).attr("href");
                    var target = $(val == "#" || val == "" ? 'html' : val);
                    target.removeClass("inactive").addClass("active");
                    target.attr({ "aria-hidden": "false" });
                }

                if (contentHash) {
                    var tabContent = $(contentHash).parents(".tab-content");
                    tabContent.find('.btn-tab').removeClass("active").addClass("inactive").attr({ "aria-expanded": "false", "aria-selected": "false", "tabindex": -1 });

                    tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
                    tabContent.find('.tab-panel').attr({ "aria-hidden": "true" });
                    $(contentHash).parents(".tab-panel").removeClass("inactive").addClass("active");
                    $(contentHash).parents(".tab-panel").attr({ "aria-hidden": "false" });

                    var all = tabContent.find('.btn-tab');
                    var max = all.length;
                    var i = 0;
                    for (i; i < max; i++) {
                        var target = all[i].getAttribute('href');
                        var hrefId = $(contentHash).parents(".tab-panel").attr('id');
                        var href = "#" + hrefId;
                        if (target === href) {
                            all[i].classList.add("active");
                            all[i].setAttribute("aria-expanded", "false");
                            all[i].setAttribute("aria-selected", "false");
                            all[i].setAttribute("tabindex", -1);
                        } else {
                            all[i].classList.remove("active");
                            all[i].classList.add("inactive");
                            all[i].setAttribute("aria-expanded", "true");
                            all[i].setAttribute("aria-selected", "true");
                            all[i].setAttribute("tabindex", 0);
                        }
                    };
                }
            }
            var target = $(hrefHash);
            var position = target.offset().top - 60;
            $('body,html').stop().animate({ scrollTop: position }, 500);
            return false;
        });
    }

    //モーダル
    (function () {
        if ($(".entry-content .widget_media_image").length) {
            var modalScrollPosition = 0;
            var Container = $("#lyt-main");
            var all = $(".entry-content .widget_media_image a");
            var max = all.length;
            var i = 0;
            var text = "";
            for (i; i < max; i++) {
                text += all[i].innerHTML;
            };

            Container.append('<div class="modal-container"><div class="modal-body"><button class="modal-close" tabindex="0"><i class="fas fa-times-circle"></i><span class="sr-only">閉じるボタン</span></button><div class="modal-content">' + text + '</div><button class="modal-move prev" tabindex="0"><span class="sr-only">前へ</span></button><button class="modal-move next" tabindex="0"><span class="sr-only">次へ</span></button></div></div>');

            var focusItem = "";

            $(".entry-content .widget_media_image a").on("click", function () {
                modalScrollPosition = $(window).scrollTop();
                focusItem = $(':focus');
                $('.modal-container').addClass("cover");
                var index = $('.entry-content .widget_media_image a').index(this);
                var modalImg = $(".modal-container img");
                modalImg.eq([index]).addClass("active");
                $('html').addClass('fixed').css({ 'top': - modalScrollPosition });
                if ($('.modal-content .image:first-child').hasClass('active')) {
                    $('.modal-move.prev').hide();
                    $('.modal-move.next').show();
                } else if ($('.modal-content .image:last-child').hasClass('active')) {
                    $('.modal-move.prev').show();
                    $('.modal-move.next').hide();
                }

                setTimeout(function () {
                    var element = $('.modal-close');
                    element.focus();
                }, 100);
                return false;
            });

            $(".entry-content .widget_media_image a").on('keydown', function (event) {
                if (event.key === "Enter") {
                    modalScrollPosition = $(window).scrollTop();
                    focusItem = $(':focus');
                    $('.modal-container').addClass("cover");
                    var index = $('.entry-content .widget_media_image a').index(this);
                    var modalImg = $(".modal-container img");
                    modalImg.eq([index]).addClass("active");
                    $('html').addClass('fixed').css({ 'top': - modalScrollPosition });
                    if ($('.modal-content .image:first-child').hasClass('active')) {
                        $('.modal-move.prev').hide();
                        $('.modal-move.next').show();
                    } else if ($('.modal-content .image:last-child').hasClass('active')) {
                        $('.modal-move.prev').show();
                        $('.modal-move.next').hide();
                    }
                    setTimeout(function () {
                        var element = $('.modal-close');
                        element.focus();
                    }, 100);
                    return false;
                }
            });
            $('.modal-close').on("click", function () {
                $('.modal-container').removeClass("cover");
                $('.modal-container img').removeClass("active");
                $('html').removeClass('fixed').css({ 'top': 0 });
                $('.modal-move.prev').show();
                $('.modal-move.next').show();
                window.scrollTo(0, modalScrollPosition);

                setTimeout(function () {
                    focusItem.focus();
                }, 100);
            });

            $('.modal-content').on("click", function () {
                return false;
            });

            $('.modal-container').on("click", function () {
                $('.modal-container').removeClass("cover");
                $('.modal-container img').removeClass("active");
                $('html').removeClass('fixed').css({ 'top': 0 });
                $('.modal-move.prev').show();
                $('.modal-move.next').show();
                window.scrollTo(0, modalScrollPosition);

                setTimeout(function () {
                    focusItem.focus();
                }, 100);
            });

            $('.modal-move.prev').on("click", function () {
                var activeModal = $('.modal-content .image.active');
                activeModal.removeClass("active");
                activeModal.prev().addClass("active");
                $('.modal-move.next').show();
                $('.modal-move.prev').show();
                if ($('.modal-content .image:first-child').hasClass('active')) {
                    $('.modal-move.prev').hide();
                } else if ($('.modal-content .image:last-child').hasClass('active')) {
                    $('.modal-move.next').hide();
                }
                return false;
            });
            $('.modal-move.next').on("click", function () {
                var activeModal = $('.modal-content .image.active');
                activeModal.removeClass("active");
                activeModal.next().addClass("active");
                $('.modal-move.next').show();
                $('.modal-move.prev').show();
                if ($('.modal-content .image:first-child').hasClass('active')) {
                    $('.modal-move.prev').hide();
                } else if ($('.modal-content .image:last-child').hasClass('active')) {
                    $('.modal-move.next').hide();
                }
                return false;
            });
            $(window).on('keydown', function (event) {
                var modalMenu = $('.modal-container');
                var modalMenuElements = modalMenu.find('.modal-close, .modal-move');
                if ($('.modal-container').hasClass("cover")) {
                    var activeEl = document.activeElement;
                    var firstEl = modalMenuElements[0];
                    var lastEl = modalMenuElements[modalMenuElements.length - 1];
                    var tabKey = (9 === event.keyCode);
                    var shiftKey = event.shiftKey;

                    if (!shiftKey && tabKey && lastEl === activeEl) {
                        event.preventDefault();
                        firstEl.focus();
                    }

                    if (shiftKey && tabKey && firstEl === activeEl) {
                        event.preventDefault();
                        lastEl.focus();
                    }

                    var rightKey = (39 === event.keyCode);
                    var leftKey = (37 === event.keyCode);

                    if (leftKey) {
                        if ($('.modal-move.prev').css('display') == 'block') {
                            var activeModal = $('.modal-content .image.active');
                            activeModal.removeClass("active");
                            activeModal.prev().addClass("active");
                            $('.modal-move.next').show();
                            $('.modal-move.prev').show();
                            if ($('.modal-content .image:first-child').hasClass('active')) {
                                $('.modal-move.prev').hide();
                            } else if ($('.modal-content .image:last-child').hasClass('active')) {
                                $('.modal-move.next').hide();
                            }
                            return false;
                        }
                    }
                    if (rightKey) {
                        if ($('.modal-move.next').css('display') == 'block') {
                            var activeModal = $('.modal-content .image.active');
                            activeModal.removeClass("active");
                            activeModal.next().addClass("active");
                            $('.modal-move.next').show();
                            $('.modal-move.prev').show();
                            if ($('.modal-content .image:first-child').hasClass('active')) {
                                $('.modal-move.prev').hide();
                            } else if ($('.modal-content .image:last-child').hasClass('active')) {
                                $('.modal-move.next').hide();
                            }
                            return false;
                        }
                    }
                }
            });
        }
    }());
});