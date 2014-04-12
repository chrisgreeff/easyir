(function() {
    var ANI_OPEN_APP = 'easyir-ani-open-app',

        ANI_CLICK_TEAL_BTN = 'easyir-ani-click-teal-button',
        ANI_CLICK_GRAY_BTN = 'easyir-ani-click-gray-button',

        ANI_SLIDE_NEXT_FRAME = 'easyir-ani-slide-next-frame',
        ANI_SLIDE_PREV_FRAME = 'easyir-ani-slide-prev-frame',

        ANI_SHOW_HELP = 'easyir-ani-show-help',

        ANI_GESTURE_SHOW_HELP = 'easyir-ani-gesture-show-help';


    var aniNextSlide = function (nodes) {
        nodes.forEach(function (node) {
            node.addClass(ANI_SLIDE_NEXT_FRAME);
        });
    };

    var aniPrevSlide = function (nodes) {
        nodes.forEach(function (node) {
            node.addClass(ANI_SLIDE_PREV_FRAME);
        });
    };

    // ============================= Fred =============================

    var fred1,
        fred2,
        fred3,
        fred4,
        fred5;

    // OPEN APP
    fred1 = function () {
        $('.easyir-ani-open').addClass(ANI_OPEN_APP);

        fred2();
    };

    // CLICK APPLY FOR IRD
    fred2 = function () {
        setTimeout(function () {
            $('.easyir-ani-apply-button').addClass(ANI_CLICK_TEAL_BTN);

            fred3()
        }, 400);
    };

    // NEXT FRAME
    fred3 = function () {
        setTimeout(function () {
            aniNextSlide([$('.easyir-ani-app')]);
            aniPrevSlide([$('.easyir-ani-registration')]);

            fred4();
        }, 400);
    };

    // SHOW HELP
    fred4 = function () {
        setTimeout(function () {
            $('.easyir-ani-pre1').addClass(ANI_SHOW_HELP);
            $('.easyir-ani-progress-bar1').addClass(ANI_SHOW_HELP);
            $('.easyir-ani-swipe-gesture').addClass(ANI_GESTURE_SHOW_HELP);

            fred5();
        }, 400);
    };

    // CLICK YES
    fred5 = function () {
        setTimeout(function () {
            $('.easyir-ani-options-yes1').addClass(ANI_CLICK_GRAY_BTN);

            fred6();
        }, 400);
    };

    var fred6 = function () {
        setTimeout(function () {
            aniPrevSlide([
                $('.easyir-ani-pre1'),
                $('.easyir-ani-progress-bar1'),
                $('.easyir-ani-options-bar1'),
                $('.easyir-ani-menu-bar-pre1')
            ]);

            aniNextSlide([
                $('.easyir-ani-pre2'),
                $('.easyir-ani-progress-bar2'),
                $('.easyir-ani-options-bar2'),
                $('.easyir-ani-menu-bar-pre2')
            ]);

            fred7();
        }, 400);
    };

    var fred7 = function () {
        setTimeout(function () {
            $('.easyir-ani-options-bar-half1').addClass(ANI_CLICK_GRAY_BTN);
            fred8();
        }, 400);
    };

    var fred8 = function () {
        setTimeout(function () {
            aniPrevSlide([
                $('.easyir-ani-pre2'),
                $('.easyir-ani-progress-bar2'),
                $('.easyir-ani-options-bar2'),
                $('.easyir-ani-menu-bar-pre2')
            ]);

            aniNextSlide([
                $('.easyir-ani-pre3'),
                $('.easyir-ani-progress-bar3'),
                $('.easyir-ani-options-bar3'),
                $('.easyir-ani-menu-bar-pre3')
            ]);

            fred9();
        }, 400);
    };

    var fred9 = function () {
        setTimeout(function () {
            $('.easyir-ani-options-bar-half2').addClass(ANI_CLICK_GRAY_BTN);
            fred10();
        }, 400);
    };

    var fred10 = function () {
        setTimeout(function () {
            aniPrevSlide([
                $('.easyir-ani-pre3'),
                $('.easyir-ani-progress-bar3'),
                $('.easyir-ani-options-bar3'),
                $('.easyir-ani-menu-bar-pre3')
            ]);

            aniNextSlide([
                $('.easyir-ani-pre4'),
                $('.easyir-ani-options-bar4'),
                $('.easyir-ani-menu-bar-pre4')
            ]);
        }, 400);
    };

    resetFredAnimation = function () {
        $('.easyir-ani-open').removeClass(ANI_OPEN_APP);
        $('.easyir-ani-apply-button').removeClass(ANI_CLICK_TEAL_BTN);
        $('.easyir-ani-app').removeClass(ANI_SLIDE_NEXT_FRAME);
        $('.easyir-ani-registration').removeClass(ANI_SLIDE_PREV_FRAME);
        $('.easyir-ani-pre1').removeClass(ANI_SHOW_HELP);
        $('.easyir-ani-swipe-gesture').removeClass(ANI_GESTURE_SHOW_HELP);
        $('.easyir-ani-options-yes1').removeClass(ANI_CLICK_GRAY_BTN);
    };

    $('.easyir-btn-start-fred-animation').on('click', fred1);
    $('.easyir-btn-reset-animation').on('click', resetFredAnimation);
}());