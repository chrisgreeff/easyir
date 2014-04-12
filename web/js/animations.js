(function() {
    var ANI_OPEN_APP = 'easyir-ani-open-app',

        ANI_CLICK_TEAL_BTN = 'easyir-ani-click-teal-button',
        ANI_CLICK_GRAY_BTN = 'easyir-ani-click-gray-button',

        ANI_SLIDE_NEXT_FRAME = 'easyir-ani-slide-next-frame',
        ANI_SLIDE_PREV_FRAME = 'easyir-ani-slide-prev-frame',

        ANI_SHOW_HELP = 'easyir-ani-show-help',

        ANI_GESTURE_SHOW_HELP = 'easyir-ani-gesture-show-help',

        ANI_START_BTN_FRED1 = 'easyir-ani-start-fred1',
        ANI_START_BTN_FRED2 = 'easyir-ani-start-fred2',
        ANI_START_BTN_FRED3 = 'easyir-ani-start-fred3',

        BTN_DISABLED = 'easyir-btn-disabled',
        BOUNCY_ARROW = 'easyir-ani-bounce-arrow',
        POINT_HIDDEN = 'easyir-walkthrough-point-hidden',

        // TIME_CLICK = 400,
        // TIME_HELP = 800,
        // TIME_READING_HELP = 3000,
        // TIME_NEXT_SLIDE = 2000;

        TIME_CLICK = 1,
        TIME_HELP = 1,
        TIME_READING_HELP = 1,
        TIME_NEXT_SLIDE = 1;

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
        $('.easyir-btn-fred').addClass(ANI_START_BTN_FRED1);
        $('.easyir-btn-fred').addClass(BTN_DISABLED);
        $('.easyir-btn-fred .easyir-btn-arrow').removeClass(BOUNCY_ARROW);
        $('.easyir-walkthrough-fred1-point1').removeClass(POINT_HIDDEN);

        setTimeout(function() {
            $('.easyir-ani-open').addClass(ANI_OPEN_APP);

            fred2();
        }, TIME_CLICK);
    };

    // CLICK APPLY FOR IRD
    fred2 = function () {
        setTimeout(function () {
            $('.easyir-ani-apply-button').addClass(ANI_CLICK_TEAL_BTN);

            fred3()
        }, TIME_NEXT_SLIDE);
    };

    // NEXT FRAME
    fred3 = function () {
        setTimeout(function () {
            aniNextSlide([$('.easyir-ani-app')]);
            aniPrevSlide([$('.easyir-ani-registration')]);
            $('.easyir-walkthrough-fred1-point2').removeClass(POINT_HIDDEN);

            fred4();
        }, TIME_CLICK);
    };

    // SHOW HELP
    fred4 = function () {
        setTimeout(function () {
            $('.easyir-ani-swipe-gesture').addClass(ANI_GESTURE_SHOW_HELP);

            setTimeout(function () {
                $('.easyir-ani-pre1').addClass(ANI_SHOW_HELP);
                $('.easyir-ani-progress-bar1').addClass(ANI_SHOW_HELP);

                fred5();
            }, TIME_HELP);
        }, TIME_NEXT_SLIDE);
    };

    // CLICK YES
    fred5 = function () {
        setTimeout(function () {
            $('.easyir-ani-options-yes1').addClass(ANI_CLICK_GRAY_BTN);

            fred6();
        }, TIME_READING_HELP);
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
        }, TIME_CLICK);
    };

    var fred7 = function () {
        setTimeout(function () {
            $('.easyir-ani-options-bar-half1').addClass(ANI_CLICK_GRAY_BTN);
            fred8();
        }, TIME_NEXT_SLIDE);
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
        }, TIME_CLICK);
    };

    var fred9 = function () {
        setTimeout(function () {
            $('.easyir-ani-options-bar-half2').addClass(ANI_CLICK_GRAY_BTN);
            fred10();
        }, TIME_NEXT_SLIDE);
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

            $('.easyir-walkthrough-fred1-point3').removeClass(POINT_HIDDEN);

            $('.easyir-btn-fred').removeClass(BTN_DISABLED);
            $('.easyir-btn-fred').addClass(ANI_START_BTN_FRED2);
            $('.easyir-btn-fred').addClass('part-2');
            $('.easyir-btn-fred').find('.easyir-btn-arrow').addClass(BOUNCY_ARROW);
            $('.easyir-btn-fred').find('.easyir-btn-text').html('Lets Continue!');

            $('.easyir-btn-start-fred-animation').off('click');
            $('.easyir-btn-start-fred-animation').on('click', fred11);
        }, TIME_CLICK);
    };

    fred11 = function () {
        console.log('sup');
        $('.easyir-btn-fred').addClass(ANI_START_BTN_FRED3);
        $('.easyir-btn-fred').addClass(BTN_DISABLED);
        $('.easyir-btn-fred .easyir-btn-arrow').removeClass(BOUNCY_ARROW);
        $('.easyir-walkthrough-fred1-point1').addClass(POINT_HIDDEN);
        $('.easyir-walkthrough-fred1-point2').addClass(POINT_HIDDEN);
        $('.easyir-walkthrough-fred1-point3').addClass(POINT_HIDDEN);

        setTimeout(function() {
            
        }, TIME_CLICK);
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
