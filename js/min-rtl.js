$(function () {
    "use strict";

    // Set Hieght For Header
    $(".header").css("height", $(window).innerHeight());
    // Remove Padding Left To Menu Btn In Nav List & Set Padiing Left 30 PX

    // Start Function Fixed Mune ==============================
    $(window).scroll(function () {
        // Set Var
        const scroll = $(this).scrollTop();

        // Check Scroll Window
        if (scroll > $(this).innerHeight()) {
            // Set Navlist Top Page & Set Background To nav
            $(".nav-bar").addClass("fixed-nav");
            $(".header .nav-bar .list-nav").css("background", "transparent");

            // Show Btn Top Page
            $(".fa-angle-up").fadeIn();

            // Check Widow Width & Set Background To Full Screen
            if ($(window).innerWidth() > 992) {
                $(".header .nav-bar .list-nav").css("background", "#f7600e");
                // Check Show Navlist & Set Padding In Menu Nav
                if ($(".header .list-nav").hasClass("show")) {
                    $(".nav-bar").css("paddingLeft", widthNavList);
                }
            } else {
                // Navlist Up
                $(".header .list-nav").slideUp();
            }
        } else {
            // Remove Fixed Top Navlist
            $(".nav-bar").removeClass("fixed-nav");
            // Scroll > window Hieght Remove Padding In Menu Nav
            $(".nav-bar").css("paddingLeft", 0);
            // Show Btn Top Page
            $(".fa-angle-up").fadeOut();

            // Check Window Width & Set Background To Navlist
            if ($(window).innerWidth() > 992) {
                $(".header .nav-bar .list-nav").css("background", "#f7600e");
            } else {
                $(".header .nav-bar .list-nav").css("background", "#000");
                // Navlist Up
                $(".header .list-nav").slideUp();
            }
        }
    });
    // End Function Fixed Mune ============================

    // Start Function CLick Link Navlist And Goto Section
    $(".link-list").click(function (e) {
        e.preventDefault();
        // Add Class Active In Link Clicked & Remove Class Active For All Links
        $(this).parent().siblings().children().removeClass("active");
        $(this).addClass("active");

        //Goto Section
        $("html, body").animate(
            {
                scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
            },
            1000
        );
    });
    // End Function CLick Link Navlist And Goto Section

    // Start Toggele Navlist Function ==============================
    // Create Var
    const widthNavList = $(".header .list-nav").innerWidth();

    // Hide Listnav In Full Screen
    if ($(window).innerWidth() > 992) {
        $(".header .list-nav").css("marginLeft", -widthNavList);
    } else {
        // Show Navlist In Mobail Screen
        $(".header .list-nav").css("marginLeft", 0);
    }

    // Click To bars
    $(".menu").click(function () {
        $(".header .list-nav").toggleClass("show");
        // Check Window Width
        if ($(window).innerWidth() > 992) {
            // Navlist Show Left For Animate
            if ($(".header .list-nav").hasClass("show")) {
                // Set Margin To Body
                $("body").animate(
                    {
                        marginLeft: widthNavList - 10,
                    },
                    500
                );
                // Show Listnav
                $(".header .list-nav").animate(
                    {
                        marginLeft: 0,
                        opacity: 1,
                    },
                    500
                );

                // Set Value Left IN Btn Goto Top Pdge
                $(".fa-angle-up").css("left", widthNavList + 20);

                // Set Padding Left To Menu Btn In Nav List
                $(".fixed-nav").css("paddingLeft", widthNavList);
            } else {
                // Reomve Margin To Body
                $("body").animate(
                    {
                        marginLeft: 0,
                    },
                    500
                );
                // Hide Listnav
                $(".header .list-nav").animate(
                    {
                        marginLeft: -widthNavList,
                        opacity: 0,
                    },
                    500
                );

                // Remove Value Left IN Btn Goto Top Pdge & Set Left 20 PX
                $(".fa-angle-up").css("left", 20);

                // Remove Padding Left To Menu Btn In Nav List & Set Padiing Left 30 PX
                $(".fixed-nav").css("paddingLeft", 30);
            }
        } else {
            // Show & Hide Navlist To Mobail Screen
            $(".header .list-nav").slideToggle();
        }
    });
    // End Toggele Navlist Function =====================================

    // Start Function Goto Section Features Shtmose ==============================
    $(".header .fa-angle-down").click(function () {
        $("html, body").animate(
            {
                scrollTop: $(".features").offset().top + 1,
            },
            1000 // Timeing Function
        );
    });
    // End Toggele Function Goto Section Features Shtmose ============================

    // Start Function Testmonial ==============================

    // Set Vars Arrow Click
    const rightArrwo = $(".testmonial .right");
    const leftArrwo = $(".testmonial .left");

    // Function Check Arrow Show
    function user() {
        $(".usesr:first").hasClass("uesr-show")
            ? leftArrwo.hide()
            : leftArrwo.fadeIn();
        $(".usesr:last").hasClass("uesr-show")
            ? rightArrwo.hide()
            : rightArrwo.fadeIn();
    }

    user(); // Run Function

    // Click To Arrow RIght & Left
    $(".testmonial i").click(function () {
        // Click Arrow Right
        $(this).hasClass("right")
            ? // Hide The User And Show Next User
              $(".usesr.uesr-show").fadeOut(300, function () {
                  $(this)
                      .removeClass("uesr-show")
                      .next(".usesr")
                      .addClass("uesr-show")
                      .fadeIn(1000);
                  user();
              })
            : // Click Arrow Left
              // Hide The User And Show Next User
              $(".testmonial .uesr-show").fadeOut(300, function () {
                  $(this)
                      .removeClass("uesr-show")
                      .prev(".usesr")
                      .addClass("uesr-show")
                      .fadeIn(1000);
                  user();
              });
    });
    // End Function Testmonial  ============================

    // Start Function Btn Go To Top Page
    $(".fa-angle-up").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            2000
        );
    });
    // End Function Btn Go To Top Page
});
