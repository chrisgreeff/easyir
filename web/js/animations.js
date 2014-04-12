(function() {

    var TIME_CLICK = 1,
        TIME_HELP = 1,
        TIME_READING_HELP = 1,
        TIME_NEXT_SLIDE = 1,

        TIME_CLICK = 400,
        TIME_HELP = 800,
        TIME_READING_HELP = 3000,
        TIME_NEXT_SLIDE = 1700,

        ANI_OPEN_APP = 'easyir-ani-open-app',

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
        POINT_HIDDEN = 'easyir-walkthrough-point-hidden';

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

    var fredAniTemplate = '' +
        '<div class="easyir-ani easyir-ani-registration">' +
            '<div class="easyir-ani easyir-ani-menu-bar"></div>' +
            '<div class="easyir-ani-apply-button easyir-center">' +
                'Apply for an IRD Number' +
            '</div>' +
            '<span class="easyir-ani-registration-irdnumber">' +
                'IRD Number' +
            '</span>' +
            '<span class="easyir-ani-registration-password">' +
                'Password' +
            '</span>' +
        '</div>' +
        '<div class="easyir-ani-app easyir-ani-next">' +
            '<div class="easyir-ani-pre1"></div>' +
            '<div class="easyir-ani easyir-ani-progress-bar easyir-ani-progress-bar1">' +
                '<div class="easyir-ani-progress-bar-content">' +
                    'Before You Start' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani-options-table easyir-ani-options-bar easyir-ani-options-bar1">' +
                '<div class="easyir-ani-options-cell easyir-ani-options-yes easyir-ani-options-yes1">' +
                    'YES' +
                '</div>' +
                '<div class="easyir-ani-options-cell easyir-ani-options-no">' +
                    'NO' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-menu-bar-pre1"></div>' +
            '<div class="easyir-ani-pre2 easyir-ani-next"></div>' +
            '<div class="easyir-ani easyir-ani-progress-bar easyir-ani-progress-bar2 easyir-ani-next">' +
                '<div class="easyir-ani-progress-bar-content">' +
                    'Before You Start' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani-options-bar easyir-ani-options-bar2 easyir-ani-next">' +
                '<div class="easyir-ani-options-bar-half easyir-ani-options-bar-half1">' +
                    'Individual' +
                '</div>' +
                '<div class="easyir-ani-options-bar-half">' +
                    'Non-individual' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-menu-bar-pre2 easyir-ani-next"></div>' +
            '<div class="easyir-ani-pre3 easyir-ani-next"></div>' +
            '<div class="easyir-ani easyir-ani-progress-bar easyir-ani-progress-bar3 easyir-ani-next">' +
                '<div class="easyir-ani-progress-bar-content">' +
                    'Before You Start' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani-options-bar easyir-ani-options-bar3 easyir-ani-next">' +
                '<div class="easyir-ani-options-bar-half easyir-ani-options-bar-half2">' +
                    'Myself' +
                '</div>' +
                '<div class="easyir-ani-options-bar-half">' +
                    'For a child in my care who is under 16 years old' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-menu-bar-pre3 easyir-ani-next"></div>' +
            '<div class="easyir-ani-pre4 easyir-ani-next"></div>' +
            '<div class="easyir-ani-options-bar easyir-ani-options-bar4 easyir-ani-next">' +
                '<div class="easyir-ani-options-bar-full easyir-ani-options-bar-full1">' +
                    'IR595' +
                    '<img class="easyir-ani-options-bar-arrow" src="web/assets/images/generic-app/00-iphone5s/arrow.svg">' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-menu-bar-pre4 easyir-ani-next"></div>' +
            '<div class="easyir-ani-ir595-pre1 easyir-ani-next"></div>' +
            '<div class="easyir-ani easyir-ani-progress-bar easyir-ani-progress-bar4 easyir-ani-next">' +
                '<div class="easyir-ani-progress-bar-content">' +
                    'Document Checklist' +
                    '<div class="easyir-ani-progress-bar-content-percentage">1/2</div>' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-checkbox-bar easyir-ani-checkbox-bar1 easyir-ani-next">' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-left easyir-progress-checkbox1"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-right easyir-progress-checkbox2"></div>' +
            '</div>' +
            '<div class="easyir-ani-options-bar easyir-ani-options-bar5 easyir-ani-next">' +
                '<div class="easyir-ani-options-bar-quater">' +
                    '<div class="easyir-ani-options-bar-quater-checkbox"></div>' +
                    '<div class="easyir-ani-options-bar-quater-content easyir-ani-options-bar-quater-content-2">' +
                        'New Zealand birth certificate issued on or after 1st January 1998' +
                    '</div>' +
                '</div>' +
                '<div class="easyir-ani-options-bar-quater easyir-ani-options-bar-quater1">' +
                    '<div class="easyir-ani-options-bar-quater-checkbox"></div>' +
                    '<div class="easyir-ani-options-bar-quater-content easyir-ani-options-bar-quater-content-1">' +
                        'New Zealand Passport' +
                    '</div>' +
                '</div>' +
                '<div class="easyir-ani-options-bar-quater easyir-ani-options-bar-quater2">' +
                    '<div class="easyir-ani-options-bar-quater-checkbox"></div>' +
                    '<div class="easyir-ani-options-bar-quater-content easyir-ani-options-bar-quater-content-2">' +
                        'Overseas passport* (with New Zealand immigration visa/permit)' +
                    '</div>' +
                '</div>' +
                '<div class="easyir-ani-options-bar-quater">' +
                    '<div class="easyir-ani-options-bar-quater-checkbox"></div>' +
                    '<div class="easyir-ani-options-bar-quater-content easyir-ani-options-bar-quater-content-2">' +
                        'New Zealand emergency travel document' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-ir595-menu-bar-pre1 easyir-ani-next"></div>' +
            '<div class="easyir-ani-ir595-pre2 easyir-ani-next"></div>' +
            '<div class="easyir-ani easyir-ani-progress-bar easyir-ani-progress-bar5 easyir-ani-next">' +
                '<div class="easyir-ani-progress-bar-content">' +
                    'Document Checklist' +
                    '<div class="easyir-ani-progress-bar-content-percentage">2/2</div>' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-checkbox-bar easyir-ani-checkbox-bar2 easyir-ani-next">' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-left easyir-progress-checkbox3"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-right easyir-progress-checkbox4"></div>' +
            '</div>' +
            '<div class="easyir-ani-options-bar easyir-ani-options-bar6 easyir-ani-next">' +
                '<div class="easyir-ani-options-bar-quater easyir-ani-options-bar-quater3">' +
                    '<div class="easyir-ani-options-bar-quater-checkbox"></div>' +
                    '<div class="easyir-ani-options-bar-quater-content easyir-ani-options-bar-quater-content-1">' +
                        'New Zealand drivers license' +
                    '</div>' +
                '</div>' +
                '<div class="easyir-ani-options-bar-quater easyir-ani-options-bar-quater4">' +
                    '<div class="easyir-ani-options-bar-quater-checkbox"></div>' +
                    '<div class="easyir-ani-options-bar-quater-content easyir-ani-options-bar-quater-content-1">' +
                        'New Zealand 18+ card' +
                    '</div>' +
                '</div>' +
                '<div class="easyir-ani-options-bar-quater">' +
                    '<div class="easyir-ani-options-bar-quater-checkbox"></div>' +
                    '<div class="easyir-ani-options-bar-quater-content easyir-ani-options-bar-quater-content-2">' +
                        'New Zealand student photo identification card' +
                    '</div>' +
                '</div>' +
                '<div class="easyir-ani-options-bar-quater">' +
                    '<div class="easyir-ani-options-bar-quater-checkbox"></div>' +
                    '<div class="easyir-ani-options-bar-quater-content easyir-ani-options-bar-quater-content-2">' +
                        'A letter confirming registration as a student in New Zealand' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-ir595-menu-bar-pre2 easyir-ani-next"></div>' +
            '<div class="easyir-ani-ir595-pre3 easyir-ani-next"></div>' +
            '<div class="easyir-ani easyir-ani-progress-bar easyir-ani-progress-bar6 easyir-ani-next">' +
                '<div class="easyir-ani-progress-bar-content">' +
                    'Document Upload' +
                    '<div class="easyir-ani-progress-bar-content-percentage">2/2</div>' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-checkbox-bar easyir-ani-checkbox-bar3 easyir-ani-next">' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-left easyir-progress-checkbox-checked"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-right easyir-progress-checkbox-checked"></div>' +
            '</div>' +
            '<div class="easyir-ani-options-bar easyir-ani-options-bar7 easyir-ani-next">' +
                '<div class="easyir-ani-options-bar-half easyir-ani-options-bar-half3">' +
                    '<img class="easyir-ani-options-bar-half-image easyir-mts" src="web/assets/images/fred-app/09-IR595-pre-3/dropbox.png">' +
                '</div>' +
                '<div class="easyir-ani-options-bar-half">' +
                    '<img class="easyir-ani-options-bar-half-image easyir-mtm" src="web/assets/images/fred-app/09-IR595-pre-3/google-drive.png">' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-ir595-menu-bar-pre3 easyir-ani-next"></div>' +
            '<div class="easyir-ani-ir595-pre4 easyir-ani-next"></div>' +
            '<div class="easyir-ani easyir-ani-progress-bar easyir-ani-progress-bar7 easyir-ani-next">' +
                '<div class="easyir-ani-progress-bar-content">' +
                    'Document Upload' +
                    '<div class="easyir-ani-progress-bar-content-percentage">2/2</div>' +
                '</div>' +
            '</div>' +
            '<div class="easyir-ani-ir595-pre4-upload-button easyir-ani-ir595-pre4-upload-button1 easyir-ani-next"></div>' +
            '<div class="easyir-ani easyir-ani-ir595-menu-bar-pre4 easyir-ani-next"></div>' +
            'IR595 Pre 5 -->' +
            '<div class="easyir-ani-ir595-pre5 easyir-ani-next"></div>' +
            '<div class="easyir-ani easyir-ani-ir595-menu-bar-pre5 easyir-ani-next"></div>' +
        '</div>' +
        '<div class="easyir-ani easyir-ani-header"></div>' +
        '<div class="easyir-ani easyir-ani-open"></div>' +
        '<div class="easyir-ani-swipe-gesture"></div>';

    var fredStartTemplate = '' +
        '<div class="easyir-ani-app">' +
            '<div class="easyir-ani-ir595-pre5"></div>' +
            '<div class="easyir-ani easyir-ani-ir595-menu-bar-pre5"></div>' +
        '</div>' +
        '<div class="easyir-ani easyir-ani-header"></div>' +
        '<div class="easyir-ani-swipe-gesture"></div>';

    // OPEN APP
    var fred1 = function () {
        $('.easyir-ani-fred').html(fredAniTemplate);
        $('.easyir-btn-fred').addClass(ANI_START_BTN_FRED1);
        $('.easyir-btn-fred').addClass(BTN_DISABLED);
        $('.easyir-btn-fred .easyir-btn-arrow').removeClass(BOUNCY_ARROW);
        $('.easyir-walkthrough-fred1-point1').removeClass(POINT_HIDDEN);

        setTimeout(function() {
            $('.easyir-ani-open').addClass(ANI_OPEN_APP);

            fred2();
        }, TIME_NEXT_SLIDE);
    };

    // CLICK APPLY FOR IRD
    var fred2 = function () {
        setTimeout(function () {
            $('.easyir-ani-apply-button').addClass(ANI_CLICK_TEAL_BTN);

            fred3()
        }, TIME_NEXT_SLIDE);
    };

    // NEXT FRAME
    var fred3 = function () {
        setTimeout(function () {
            aniNextSlide([$('.easyir-ani-app')]);
            aniPrevSlide([$('.easyir-ani-registration')]);
            $('.easyir-walkthrough-fred1-point2').removeClass(POINT_HIDDEN);

            fred4();
        }, TIME_CLICK);
    };

    // SHOW HELP
    var fred4 = function () {
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
    var fred5 = function () {
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

    var fred11 = function () {
        $('.easyir-btn-fred').addClass(ANI_START_BTN_FRED3);
        $('.easyir-btn-fred').addClass(BTN_DISABLED);
        $('.easyir-btn-fred .easyir-btn-arrow').removeClass(BOUNCY_ARROW);
        $('.easyir-walkthrough-fred1-point1').addClass(POINT_HIDDEN);
        $('.easyir-walkthrough-fred1-point2').addClass(POINT_HIDDEN);
        $('.easyir-walkthrough-fred1-point3').addClass(POINT_HIDDEN);
        $('.easyir-ani-options-bar-full1').addClass(ANI_CLICK_GRAY_BTN);
        $('.easyir-walkthrough-fred2-point1').removeClass(POINT_HIDDEN);

        fred12();
    };

    var fred12 = function () {
        setTimeout(function () {
            aniPrevSlide([
                $('.easyir-ani-pre4'),
                $('.easyir-ani-options-bar4'),
                $('.easyir-ani-menu-bar-pre4')
            ]);

            aniNextSlide([
                $('.easyir-ani-ir595-pre1'),
                $('.easyir-ani-progress-bar4'),
                $('.easyir-ani-options-bar5'),
                $('.easyir-ani-ir595-menu-bar-pre1'),
                $('.easyir-ani-checkbox-bar1')
            ]);
            fred13();

        }, TIME_CLICK);
    };

    var fred13 = function () {
        setTimeout(function () {
            $('.easyir-ani-options-bar-quater1').addClass(ANI_CLICK_GRAY_BTN);
            $('.easyir-ani-options-bar-quater1').find('.easyir-ani-options-bar-quater-checkbox').addClass('easyir-ani-options-bar-quater-checkbox-checked');
            $('.easyir-progress-checkbox1').addClass('easyir-progress-checkbox-checked');

            fred14();
        }, TIME_NEXT_SLIDE);
    };

    var fred14 = function () {
        setTimeout(function () {
            $('.easyir-ani-options-bar-quater2').addClass(ANI_CLICK_GRAY_BTN);
            $('.easyir-ani-options-bar-quater2').find('.easyir-ani-options-bar-quater-checkbox').addClass('easyir-ani-options-bar-quater-checkbox-checked');
            $('.easyir-progress-checkbox2').addClass('easyir-progress-checkbox-checked');

            fred15();
        }, TIME_CLICK);
    };

    var fred15 = function () {
        setTimeout(function () {
            aniPrevSlide([
                $('.easyir-ani-ir595-pre1'),
                $('.easyir-ani-progress-bar4'),
                $('.easyir-ani-options-bar5'),
                $('.easyir-ani-ir595-menu-bar-pre1'),
                $('.easyir-ani-checkbox-bar1')
            ]);

            aniNextSlide([
                $('.easyir-ani-ir595-pre2'),
                $('.easyir-ani-progress-bar5'),
                $('.easyir-ani-options-bar6'),
                $('.easyir-ani-ir595-menu-bar-pre2'),
                $('.easyir-ani-checkbox-bar2')
            ]);
            fred16();

        }, TIME_CLICK);
    };

    var fred16 = function () {
        setTimeout(function () {
            $('.easyir-ani-options-bar-quater3').addClass(ANI_CLICK_GRAY_BTN);
            $('.easyir-ani-options-bar-quater3').find('.easyir-ani-options-bar-quater-checkbox').addClass('easyir-ani-options-bar-quater-checkbox-checked');
            $('.easyir-progress-checkbox3').addClass('easyir-progress-checkbox-checked');

            fred17();
        }, TIME_NEXT_SLIDE);
    };

    var fred17 = function () {
        setTimeout(function () {
            $('.easyir-ani-options-bar-quater4').addClass(ANI_CLICK_GRAY_BTN);
            $('.easyir-ani-options-bar-quater4').find('.easyir-ani-options-bar-quater-checkbox').addClass('easyir-ani-options-bar-quater-checkbox-checked');
            $('.easyir-progress-checkbox4').addClass('easyir-progress-checkbox-checked');

            fred18();
        }, TIME_CLICK);
    };

    var fred18 = function () {
        setTimeout(function () {
            aniPrevSlide([
                $('.easyir-ani-ir595-pre2'),
                $('.easyir-ani-progress-bar5'),
                $('.easyir-ani-options-bar6'),
                $('.easyir-ani-ir595-menu-bar-pre2'),
                $('.easyir-ani-checkbox-bar2')
            ]);

            aniNextSlide([
                $('.easyir-ani-ir595-pre3'),
                $('.easyir-ani-progress-bar6'),
                $('.easyir-ani-options-bar7'),
                $('.easyir-ani-ir595-menu-bar-pre3'),
                $('.easyir-ani-checkbox-bar3')
            ]);
            $('.easyir-walkthrough-fred2-point2').removeClass(POINT_HIDDEN);

            fred19();
        }, TIME_CLICK);
    };

    var fred19 = function () {
        setTimeout(function () {
            $('.easyir-ani-options-bar-half3').addClass(ANI_CLICK_GRAY_BTN);

            fred20();
        }, TIME_NEXT_SLIDE);
    };

    var fred20 = function () {
        setTimeout(function () {
            aniPrevSlide([
                $('.easyir-ani-ir595-pre3'),
                $('.easyir-ani-progress-bar6'),
                $('.easyir-ani-options-bar7'),
                $('.easyir-ani-ir595-menu-bar-pre3'),
                $('.easyir-ani-checkbox-bar3')
            ]);

            aniNextSlide([
                $('.easyir-ani-ir595-pre4'),
                $('.easyir-ani-progress-bar7'),
                $('.easyir-ani-ir595-menu-bar-pre4'),
                $('.easyir-ani-ir595-pre4-upload-button1')
            ]);

            fred21();
        }, TIME_CLICK);
    };

    var fred21 = function () {
        setTimeout(function () {
            aniPrevSlide([
                $('.easyir-ani-ir595-pre4'),
                $('.easyir-ani-progress-bar7'),
                $('.easyir-ani-ir595-menu-bar-pre4'),
                $('.easyir-ani-ir595-pre4-upload-button1')
            ]);

            aniNextSlide([
                $('.easyir-ani-ir595-pre5'),
                $('.easyir-ani-ir595-menu-bar-pre5')
            ]);

            $('.easyir-walkthrough-fred2-point3').removeClass(POINT_HIDDEN);
            fred22();
        }, TIME_NEXT_SLIDE);
    };

    var fred22 = function () {
        setTimeout(function () {
            $('.easyir-ani-fred').html(fredStartTemplate);
            $('.easyir-btn-fred').removeClass(BTN_DISABLED);
            $('.easyir-btn-fred').removeClass(ANI_START_BTN_FRED1);
            $('.easyir-btn-fred').removeClass(ANI_START_BTN_FRED2);
            $('.easyir-btn-fred').removeClass('part-2');
            $('.easyir-btn-fred').find('.easyir-btn-arrow').addClass(BOUNCY_ARROW);
            $('.easyir-btn-fred').find('.easyir-btn-text').html('Go Again!');

            $('.easyir-btn-start-fred-animation').off('click');
            $('.easyir-btn-start-fred-animation').on('click', fred1);
        }, TIME_NEXT_SLIDE);
    };

    $('.easyir-btn-start-fred-animation').on('click', fred1);

// ============================= Jane =============================
}());
