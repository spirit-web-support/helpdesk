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

    //メニュー追随
    $(function() {
        var headNav = $(".navMenu");
        var headNavHeight = $(".navMenu").innerHeight();
        var windowWidth = window.innerWidth;
        if(windowWidth <= 990){
            $(window).on('load scroll', function () {
                if($(this).scrollTop() > 200 && headNav.hasClass('fixed') == false) {
                    headNav.addClass('fixed');
                    headNav.css({"top": '-100px'});
                    headNav.animate({"top": 0},600);
                    $(".pageContainer").css({"margin-top": headNavHeight});
                }
                else if($(this).scrollTop() < 199 && headNav.hasClass('fixed') == true){
                    headNav.removeClass('fixed');
                    $(".pageContainer").css({"margin-top": "0"});
                }
            });
        }
    });

    //メニュー開閉
    $(function(){
        $("#checkMenuButton").on("click", function (evt) {
            chk_status = $("#checkLangButton").prop("checked");
            if(chk_status){
                $("#checkLangButton").prop("checked", false);
            }
        });
        $("#checkLangButton").on("click", function (evt) {
            chk_status = $("#checkMenuButton").prop("checked");
            if(chk_status){
                $("#checkMenuButton").prop("checked", false);
            }
        });
    });

    //Page Top追随
    $(function() {
        $("#page-top").hide();
        $("#page-top a").removeAttr('href');
        $(window).on('load scroll', function () {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            var footHeight = $("footer.footerMain").innerHeight();
            var TopBtnHeight = $("#page-top").innerHeight();
            var windowWidth = window.innerWidth;
            if(windowWidth <= 990){
                NavHeight = $(".navMenu.fixed").innerHeight();
                if (scrollHeight - scrollPosition  - NavHeight  - TopBtnHeight <= footHeight) {
                    $("#page-top").fadeIn(600);
                    $("#page-top").css({ position: "absolute", bottom: footHeight});
                } else if($(this).scrollTop() > 100){
                    $("#page-top").fadeIn(600);
                    $("#page-top").css({ position: "fixed", bottom: "0" });
                } else if($(this).scrollTop() < 99 ){
                    $("#page-top").fadeOut(600);
                }
            }else{
                if (scrollHeight - scrollPosition - TopBtnHeight <= footHeight) {
                    $("#page-top").fadeIn(600);
                    $("#page-top").css({ position: "absolute", bottom: footHeight});
                } else if($(this).scrollTop() > 100){
                    $("#page-top").fadeIn(600);
                    $("#page-top").css({ position: "fixed", bottom: "0" });
                } else if($(this).scrollTop() < 99 ){
                    $("#page-top").fadeOut(600);
                }
            }
        });
        $("#page-top a").click(function () {
            $('body, html').animate({ scrollTop: 0 }, 500);
            return false;
        });
        $("#page-top a").on('keydown', function(event){
            if (event.key === "Enter"){
                $('body, html').animate({ scrollTop: 0 }, 500);
                return false;
            }
        });
    });

    //アコーディオンモジュール
    if ($(".acd-01 .acd-panel .acd-panel-heading").length) {
        $(".acd-01 .acd-panel").addClass("is-close").attr({"aria-expanded": "false","aria-hidden": "true"});
        $(".acd-01 .acd-panel .acd-panel-heading").attr({"role": "button","tabindex": "0"});

        $(".acd-01 .acd-panel .acd-panel-heading").on("click", function () {
            var tgl = $(this).parents(".acd-panel");
            if (tgl.hasClass("is-open")) {
                tgl.removeClass("is-open");
                tgl.addClass("is-close").attr({"aria-expanded": "false","aria-hidden": "true"});
            } else {
                tgl.removeClass("is-close");
                tgl.addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
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
            }
            return false;
            }
        });

        $(function(){
            var urlHash = location.hash;

            if(urlHash){
                var titleHash = $(".acd-panel").find(urlHash);
                var contentHash = $(".acd-panel-content").find(urlHash);

                if(titleHash.hasClass("acd-panel-heading")){
                    $(titleHash).parents(".acd-panel").removeClass("is-close").addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
                }
                if(contentHash.length){
                    $(contentHash).parents(".acd-panel").removeClass("is-close").addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
                }
            }
        });
        $('a[href^="#"]:not(.btn-tab):not(#page-top a)').click(function() {
            var href = $(this).attr("href");
            if(href){
                var titleHash = $(".acd-panel").find(href);
                var contentHash = $(".acd-panel-content").find(href);

                if(titleHash.hasClass("acd-panel-heading")){
                    $(titleHash).parents(".acd-panel").removeClass("is-close").addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
                    var pos = Math.floor($(titleHash).parents(".acd-panel").offset().top) - 100;
                    $("html, body").animate({scrollTop:pos}, 600);
                }
                if(contentHash.length){
                    $(contentHash).parents(".acd-panel").removeClass("is-close").addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
                    var pos = Math.floor($(contentHash).offset().top) - 100;
                    $("html, body").animate({scrollTop:pos}, 600);
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
                    tgl.removeClass("is-close");
                    tgl.addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
                }else{
                    $(this).removeClass("btn-close");
                    $(this).addClass("btn-open");
                    $(this).html("すべての項目を開く")
                    var acd = $(this).parents(".acd-01");
                    var tgl = acd.find(".acd-panel");
                    tgl.removeClass("is-open");
                    tgl.addClass("is-close").attr({"aria-expanded": "false","aria-hidden": "true"});
                }
                return false;
            });
        }       
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
    $('a[href^="#"]:not(.btn-tab):not(#page-top a)').click(function() {
        var href= $(this).attr("href");
        var target = $(href);
        if(target.length){
            var position = target.offset().top - 60;
            $('body,html').stop().animate({scrollTop:position}, 500);  
        } 
        return false;
    });

    //タブモジュール
    if ($(".entryContent .tab-content").length) {
        $(".tab-content .tab-menu").css('display','flex');
        $(".tab-content .tab-menu li .btn-tab.default").addClass("active").attr({"role": "tab","aria-expanded": "true","aria-selected": "true","tabindex": 0});
        $(".tab-content .tab-menu li .btn-tab:not(.default)").addClass("inactive").attr({"role": "tab","aria-expanded": "false","aria-selected": "false","tabindex": -1})
        
        $(".tab-content .tab-panel.default").addClass("active").attr({"role": "tabpanel","aria-hidden": "false"})
        $(".tab-content .tab-panel:not(.default)").addClass("inactive").attr({"role": "tabpanel","aria-hidden": "true"});

        var tabPanelAll = $(".tab-content .tab-panel");
        var max = tabPanelAll.length;
        var i = 0;
        for(i;i < max;i++){
            var panelId = tabPanelAll[i].getAttribute('id');
            var tabId = panelId.replace( "panel", "tab" );
            tabPanelAll[i].setAttribute("aria-labelledby",tabId);
        };

        $(".tab-content .tab-menu li .btn-tab[href^='#']").on("click", function () {
                var tabContent = $(this).parents(".tab-content");
                tabContent.find('.btn-tab').removeClass("active").addClass("inactive").attr({"aria-expanded": "false","aria-selected": "false","tabindex": -1});
                $(this).addClass("active").attr({"aria-expanded": "true","aria-selected": "true","tabindex": 0});
                tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
                tabContent.find('.tab-panel').attr({"aria-hidden": "true"});
                val = $(this).attr("href");
                var target = $(val == "#" || val == "" ? 'html' : val);
                target.removeClass("inactive").addClass("active");
                target.attr({"aria-hidden": "false"});
            return false;
        });

        $(".tab-content .tab-menu li .btn-tab").on('keydown', function(event){
            if (event.key === "Enter"){
                var href = $(this).attr("href");

                if(href.startsWith('#')){
                    var tabContent = $(this).parents(".tab-content");
                    tabContent.find('.btn-tab').removeClass("active").addClass("inactive").attr({"aria-expanded": "false","aria-selected": "false","tabindex": -1});
                    $(this).addClass("active").attr({"aria-expanded": "true","aria-selected": "true","tabindex": 0});
                    
                    tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
                    tabContent.find('.tab-panel').attr({"aria-hidden": "true"});
                    val = $(this).attr("href");
                    var target = $(val == "#" || val == "" ? 'html' : val);
                    target.removeClass("inactive").addClass("active");
                    target.attr({"aria-hidden": "false"});
                }else{
                    var target = $(this).attr("target");
                    if(target == "_blank"){
                        window.open(href);
                    }else{
                        location.href = href;
                    }
                }
            return false;
            } else if(event.keyCode === 39) { 
                var tabContent = $(this).parents(".tab-content");
                var All = tabContent.find('.btn-tab');
                var index = All.index(this);
                var nextTab = All[index + 1];

                if(index == All.length - 1){
                }else{
                    nextTab.focus();
                }
                return false;
            } else if(event.keyCode === 37) { 
                var tabContent = $(this).parents(".tab-content");
                var All = tabContent.find('.btn-tab');
                var index = All.index(this);
                var prevTab = All[index - 1];

                if(index == 0){
                }else{
                    prevTab.focus();
                }
                return false;
            }
        });

        $(function(){
            var urlHash = location.hash;
            if(urlHash){
                var titleHash = $(".tab-menu").find(urlHash);
                var contentHash = $(".tab-panel").find(urlHash);

                if(titleHash){
                    var menu = $(titleHash).parents(".tab-menu");
                    var menuList = menu.children("li");
                    menuList.find('.btn-tab').removeClass("active").addClass("inactive").attr({"aria-expanded": "false","aria-selected": "false","tabindex": -1});
                    $(titleHash).removeClass("inactive").addClass("active").attr({"aria-expanded": "true","aria-selected": "true","tabindex": 0});

                    var tabContent = $(titleHash).parents(".tab-content");
                    tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
                    tabContent.find('.tab-panel').attr({"aria-hidden": "true"});
                    val = $(this).attr("href");
                    var target = $(val == "#" || val == "" ? 'html' : val);
                    target.removeClass("inactive").addClass("active");
                    target.attr({"aria-hidden": "false"});
                }

                if(contentHash){
                    var tabContent = $(contentHash).parents(".tab-content");
                    tabContent.find('.btn-tab').removeClass("active").addClass("inactive").attr({"aria-expanded": "false","aria-selected": "false","tabindex": -1});

                    tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
                    tabContent.find('.tab-panel').attr({"aria-hidden": "true"});
                    $(contentHash).parents(".tab-panel").removeClass("inactive").addClass("active");
                    $(contentHash).parents(".tab-panel").attr({"aria-hidden": "false"});

                    var all = tabContent.find('.btn-tab');
                    var max = all.length;
                    var i = 0;
                    for(i;i < max;i++){
                        var target = all[i].getAttribute('href');
                        var hrefId = $(contentHash).parents(".tab-panel").attr('id');
                        var href = "#" + hrefId;
                        if(target === href){
                            all[i].classList.add("active");
                            all[i].setAttribute("aria-expanded","false");
                            all[i].setAttribute("aria-selected", "false");
                            all[i].setAttribute("tabindex", -1);
                        }else{
                            all[i].classList.remove("active");
                            all[i].classList.add("inactive");
                            all[i].setAttribute("aria-expanded","true");
                            all[i].setAttribute("aria-selected", "true");
                            all[i].setAttribute("tabindex", 0);
                        }
                    };

                }
            }
        });

        $('a[href^="#"]:not(.btn-tab):not(#page-top a)').on("click", function () {
            var hrefHash = $(this).attr("href");

            if(hrefHash){
                var titleHash = $(".tab-menu").find(hrefHash);
                var contentHash = $(".tab-panel").find(hrefHash);

                if(titleHash){
                    var menu = $(titleHash).parents(".tab-menu");
                    var menuList = menu.children("li");
                    menuList.find('.btn-tab').removeClass("active").addClass("inactive").attr({"aria-expanded": "false","aria-selected": "false","tabindex": -1});
                    $(titleHash).removeClass("inactive").addClass("active").attr({"aria-expanded": "true","aria-selected": "true","tabindex": 0});

                    var tabContent = $(titleHash).parents(".tab-content");
                    tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
                    tabContent.find('.tab-panel').attr({"aria-hidden": "true"});

                    val = $(titleHash).attr("href");
                    var target = $(val == "#" || val == "" ? 'html' : val);
                    target.removeClass("inactive").addClass("active");
                    target.attr({"aria-hidden": "false"});
                }

                if(contentHash){
                    var tabContent = $(contentHash).parents(".tab-content");
                    tabContent.find('.btn-tab').removeClass("active").addClass("inactive").attr({"aria-expanded": "false","aria-selected": "false","tabindex": -1});

                    tabContent.find('.tab-panel').removeClass("active").addClass("inactive");
                    tabContent.find('.tab-panel').attr({"aria-hidden": "true"});
                    $(contentHash).parents(".tab-panel").removeClass("inactive").addClass("active");
                    $(contentHash).parents(".tab-panel").attr({"aria-hidden": "false"});

                    var all = tabContent.find('.btn-tab');
                    var max =all.length;
                    var i = 0;
                    for(i;i < max;i++){
                        var target = all[i].getAttribute('href');
                        var hrefId = $(contentHash).parents(".tab-panel").attr('id');
                        var href = "#" + hrefId;
                        if(target === href){
                            all[i].classList.add("active");
                            all[i].setAttribute("aria-expanded","false");
                            all[i].setAttribute("aria-selected", "false");
                            all[i].setAttribute("tabindex", -1);
                        }else{
                            all[i].classList.remove("active");
                            all[i].classList.add("inactive");
                            all[i].setAttribute("aria-expanded","true");
                            all[i].setAttribute("aria-selected", "true");
                            all[i].setAttribute("tabindex", 0);
                        }
                    };
                }
            }
            var target = $(hrefHash);
            var position = target.offset().top - 60;
            $('body,html').stop().animate({scrollTop:position}, 500);   
            return false;
        });
    }

    (function(){
        if ($(".entryContent .widget_media_image").length) {
            var modalScrollPosition = 0;
            var Container = $(".pageContainer");
            var all = $(".entryContent .widget_media_image a");
            var max = all.length;
            var i = 0;
            var text = "";
            for(i ;i < max; i++){
                text += all[i].innerHTML;
            };

            Container.append('<div class="modal-container"><div class="modal-body"><button class="modal-close" tabindex="0"><i class="fas fa-times-circle"></i><span class="sr-only">閉じるボタン</span></button><div class="modal-content">' + text +'</div><button class="modal-move prev" tabindex="0"><span class="sr-only">前へ</span></button><button class="modal-move next" tabindex="0"><span class="sr-only">次へ</span></button></div></div>');

            var focusItem = "";

            $(".entryContent .widget_media_image a").on("click", function () {
                modalScrollPosition = $(window).scrollTop();
                focusItem = $(':focus');
                $('.modal-container').addClass("cover");
                var index = $('.entryContent .widget_media_image a').index(this);
                var modalImg = $(".modal-container img");
                modalImg.eq([index]).addClass("active");
                $('html').addClass('fixed').css({'top': - modalScrollPosition});
                if ($('.modal-content .image:first-child').hasClass('active')) {
                    $('.modal-move.prev').hide();
                    $('.modal-move.next').show();
                }else if ($('.modal-content .image:last-child').hasClass('active')) {
                    $('.modal-move.prev').show();
                    $('.modal-move.next').hide();
                }

                setTimeout(function(){
                    var element = $('.modal-close');
                    element.focus();
                },100);
                return false;
            });

            $(".entryContent .widget_media_image a").on('keydown', function(event){
                if (event.key === "Enter"){
                    modalScrollPosition = $(window).scrollTop();
                    focusItem = $(':focus');
                    $('.modal-container').addClass("cover");
                    var index = $('.entryContent .widget_media_image a').index(this);
                    var modalImg = $(".modal-container img");
                    modalImg.eq([index]).addClass("active");
                    $('html').addClass('fixed').css({'top': - modalScrollPosition});
                    if ($('.modal-content .image:first-child').hasClass('active')) {
                        $('.modal-move.prev').hide();
                        $('.modal-move.next').show();
                    }else if ($('.modal-content .image:last-child').hasClass('active')) {
                        $('.modal-move.prev').show();
                        $('.modal-move.next').hide();
                    }
                    setTimeout(function(){
                        var element = $('.modal-close');
                        element.focus();
                    },100);
                    return false;
                }
            });
            $('.modal-close').on("click", function () {
                $('.modal-container').removeClass("cover");
                $('.modal-container img').removeClass("active");
                $('html').removeClass('fixed').css({'top': 0});
                $('.modal-move.prev').show();
                $('.modal-move.next').show();
                window.scrollTo(0 , modalScrollPosition);

                setTimeout(function(){
                    focusItem.focus();
                },100);
            });

            $('.modal-content').on("click", function () {
                return false;
            });

            $('.modal-container').on("click", function () {
                $('.modal-container').removeClass("cover");
                $('.modal-container img').removeClass("active");
                $('html').removeClass('fixed').css({'top': 0});
                $('.modal-move.prev').show();
                $('.modal-move.next').show();
                window.scrollTo(0 , modalScrollPosition);

                setTimeout(function(){
                    focusItem.focus();
                },100);
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
            $(window).on('keydown', function(event){
                var modalMenu = $('.modal-container');
                var modalMenuElements = modalMenu.find( '.modal-close, .modal-move' );
                if ($('.modal-container').hasClass("cover")) {
                    var activeEl = document.activeElement;
                    var firstEl = modalMenuElements[0];
                    var lastEl = modalMenuElements[ modalMenuElements.length - 1 ];
                    var tabKey = ( 9 === event.keyCode );
                    var shiftKey = event.shiftKey;

                    if ( ! shiftKey && tabKey && lastEl === activeEl ) {
                        event.preventDefault();
                        firstEl.focus();
                    }

                    if ( shiftKey && tabKey && firstEl === activeEl ) {
                        event.preventDefault();
                        lastEl.focus();
                    }

                    var rightKey = ( 39 === event.keyCode );
                    var leftKey = ( 37 === event.keyCode );

                    if ( leftKey ) {
                        if($('.modal-move.prev').css('display') == 'block'){
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
                    if ( rightKey ) {
                        if($('.modal-move.next').css('display') == 'block'){
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