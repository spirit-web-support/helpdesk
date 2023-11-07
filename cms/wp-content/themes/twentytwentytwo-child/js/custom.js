jQuery(document).ready(function ($) {
    //ハンバーガーメニュー
    var btnNav = document.getElementById('btn-nav');
    if (btnNav) {
        btnNav.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                btnNav.checked = !btnNav.checked;
                var body = document.getElementsByTagName('body');
                body[0].classList.toggle('fixed');
            }
        });
        btnNav.addEventListener('change', function () {
            var body = document.getElementsByTagName('body');
            body[0].classList.toggle('fixed');
        }, false);
    } 

    //フッター日付
    document.getElementById("current-year").innerText = new Date().getFullYear();
    //Page Top
    $(function() {
        $("#page-top").hide();
        $("#page-top a").removeAttr('href');
        $(window).on('load scroll', function () {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            var footHeight = $("footer").innerHeight();
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
});