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
            }
            setTimeout(function(){
                var pos = Math.floor(tgl.offset().top) - 100;
                $("html, body").animate({scrollTop:pos}, 600);
            },300);
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
            }
            setTimeout(function(){
                var pos = Math.floor(tgl.offset().top) - 100;
                $("html, body").animate({scrollTop:pos}, 600);
            },300);
            return false;
            }
        });

        $(function(){
            var urlHash = location.hash;
            if(urlHash){
                var titleHash = $(".acd-panel").find(urlHash);
                var contentHash = $(".acd-panel-content").find(urlHash);

                if(titleHash){
                    $(titleHash).parents(".acd-panel").removeClass("is-close").addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
                    setTimeout(function(){
                    var pos = Math.floor($(titleHash).parents(".acd-panel").offset().top) - 100;
                    $("html, body").animate({scrollTop:pos}, 600);
                    },300);
                }
                if(contentHash){
                    $(contentHash).parents(".acd-panel").removeClass("is-close").addClass("is-open").attr({"aria-expanded": "true","aria-hidden": "false"});
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
    $('a[href^="#"]:not(.btn-tab)').click(function() {
        var href= $(this).attr("href");
        var target = $(href);
        var position = target.offset().top - 60;
        $('body,html').stop().animate({scrollTop:position}, 500);   
        return false;
    });

    //タブモジュール

    if ($(".entryContent .tab-content").length) {
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

        $('a[href^="#"]:not(.btn-tab)').on("click", function () {
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
});