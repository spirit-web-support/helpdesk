jQuery(document).ready(function ($) {
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
});