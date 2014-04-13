(function() {

    var TIME_CLICK = 1,
        TIME_HELP = 1,
        TIME_READING_HELP = 1,
        TIME_NEXT_SLIDE = 1,
        TIME_TYPING = 1,

        TIME_CLICK = 400,
        TIME_HELP = 800,
        TIME_READING_HELP = 3000,
        TIME_NEXT_SLIDE = 1700,
        TIME_TYPING = 1000,

        ANI_OPEN_APP = 'easyir-ani-open-app',

        ANI_CLICK_TEAL_BTN = 'easyir-ani-click-teal-button',
        ANI_CLICK_GRAY_BTN = 'easyir-ani-click-gray-button',

        ANI_SLIDE_NEXT_FRAME = 'easyir-ani-slide-next-frame',
        ANI_SLIDE_PREV_FRAME = 'easyir-ani-slide-prev-frame',

        ANI_SHOW_HELP = 'easyir-ani-show-help',
        ANI_GESTURE_SHOW_HELP = 'easyir-ani-gesture-show-help',

        ANI_START_BTN_FRED1 = 'easyir-ani-start-fred1',
        ANI_START_BTN_JANE1 = 'easyir-ani-start-jane1',
        ANI_START_BTN_MIKE1 = 'easyir-ani-start-mike1',

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
    var fredNode = $('.easyir-ani-fred');
    var fredBtn = $('.easyir-btn-fred');

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
        '<div class="easyir-ani easyir-ani-header"></div>';

    // OPEN APP
    var fred1 = function () {
        $('.easyir-walkthrough-fred2-point1').addClass(POINT_HIDDEN);
        $('.easyir-walkthrough-fred2-point2').addClass(POINT_HIDDEN);
        $('.easyir-walkthrough-fred2-point3').addClass(POINT_HIDDEN);
        fredNode.html(fredAniTemplate);
        fredNode = $('.easyir-ani-fred');
        fredBtn.addClass(ANI_START_BTN_FRED1);
        fredBtn.addClass(BTN_DISABLED);
        fredBtn.find('.easyir-btn-arrow').removeClass(BOUNCY_ARROW);
        $('.easyir-walkthrough-fred1-point1').removeClass(POINT_HIDDEN);

        setTimeout(function() {
            fredNode.find('.easyir-ani-open').addClass(ANI_OPEN_APP);

            fred2();
        }, TIME_NEXT_SLIDE);
    };

    // CLICK APPLY FOR IRD
    var fred2 = function () {
        setTimeout(function () {
            fredNode.find('.easyir-ani-apply-button').addClass(ANI_CLICK_TEAL_BTN);

            fred3()
        }, TIME_NEXT_SLIDE);
    };

    // NEXT FRAME
    var fred3 = function () {
        setTimeout(function () {
            aniNextSlide([fredNode.find('.easyir-ani-app')]);
            aniPrevSlide([fredNode.find('.easyir-ani-registration')]);
            $('.easyir-walkthrough-fred1-point2').removeClass(POINT_HIDDEN);

            fred4();
        }, TIME_CLICK);
    };

    // SHOW HELP
    var fred4 = function () {
        setTimeout(function () {
            fredNode.find('.easyir-ani-swipe-gesture').addClass(ANI_GESTURE_SHOW_HELP);

            setTimeout(function () {
                fredNode.find('.easyir-ani-pre1').addClass(ANI_SHOW_HELP);
                fredNode.find('.easyir-ani-progress-bar1').addClass(ANI_SHOW_HELP);

                fred5();
            }, TIME_HELP);
        }, TIME_NEXT_SLIDE);
    };

    // CLICK YES
    var fred5 = function () {
        setTimeout(function () {
            fredNode.find('.easyir-ani-options-yes1').addClass(ANI_CLICK_GRAY_BTN);

            fred6();
        }, TIME_READING_HELP);
    };


    var fred6 = function () {
        setTimeout(function () {
            aniPrevSlide([
                fredNode.find('.easyir-ani-pre1'),
                fredNode.find('.easyir-ani-progress-bar1'),
                fredNode.find('.easyir-ani-options-bar1'),
                fredNode.find('.easyir-ani-menu-bar-pre1')
            ]);

            aniNextSlide([
                fredNode.find('.easyir-ani-pre2'),
                fredNode.find('.easyir-ani-progress-bar2'),
                fredNode.find('.easyir-ani-options-bar2'),
                fredNode.find('.easyir-ani-menu-bar-pre2')
            ]);

            fred7();
        }, TIME_CLICK);
    };

    var fred7 = function () {
        setTimeout(function () {
            fredNode.find('.easyir-ani-options-bar-half1').addClass(ANI_CLICK_GRAY_BTN);
            fred8();
        }, TIME_NEXT_SLIDE);
    };

    var fred8 = function () {
        setTimeout(function () {
            aniPrevSlide([
                fredNode.find('.easyir-ani-pre2'),
                fredNode.find('.easyir-ani-progress-bar2'),
                fredNode.find('.easyir-ani-options-bar2'),
                fredNode.find('.easyir-ani-menu-bar-pre2')
            ]);

            aniNextSlide([
                fredNode.find('.easyir-ani-pre3'),
                fredNode.find('.easyir-ani-progress-bar3'),
                fredNode.find('.easyir-ani-options-bar3'),
                fredNode.find('.easyir-ani-menu-bar-pre3')
            ]);

            fred9();
        }, TIME_CLICK);
    };

    var fred9 = function () {
        setTimeout(function () {
            fredNode.find('.easyir-ani-options-bar-half2').addClass(ANI_CLICK_GRAY_BTN);
            fred10();
        }, TIME_NEXT_SLIDE);
    };

    var fred10 = function () {
        setTimeout(function () {
            aniPrevSlide([
                fredNode.find('.easyir-ani-pre3'),
                fredNode.find('.easyir-ani-progress-bar3'),
                fredNode.find('.easyir-ani-options-bar3'),
                fredNode.find('.easyir-ani-menu-bar-pre3')
            ]);

            aniNextSlide([
                fredNode.find('.easyir-ani-pre4'),
                fredNode.find('.easyir-ani-options-bar4'),
                fredNode.find('.easyir-ani-menu-bar-pre4')
            ]);

            $('.easyir-walkthrough-fred1-point3').removeClass(POINT_HIDDEN);

            fred11();
        }, TIME_CLICK);
    };

    var fred11 = function () {
        setTimeout(function () {
            $('.easyir-walkthrough-fred1-point1').addClass(POINT_HIDDEN);
            $('.easyir-walkthrough-fred1-point2').addClass(POINT_HIDDEN);
            $('.easyir-walkthrough-fred1-point3').addClass(POINT_HIDDEN);
            fredNode.find('.easyir-ani-options-bar-full1').addClass(ANI_CLICK_GRAY_BTN);
            $('.easyir-walkthrough-fred2-point1').removeClass(POINT_HIDDEN);

            fred12();
        }, TIME_READING_HELP);
    };

    var fred12 = function () {
        setTimeout(function () {
            aniPrevSlide([
                fredNode.find('.easyir-ani-pre4'),
                fredNode.find('.easyir-ani-options-bar4'),
                fredNode.find('.easyir-ani-menu-bar-pre4')
            ]);

            aniNextSlide([
                fredNode.find('.easyir-ani-ir595-pre1'),
                fredNode.find('.easyir-ani-progress-bar4'),
                fredNode.find('.easyir-ani-options-bar5'),
                fredNode.find('.easyir-ani-ir595-menu-bar-pre1'),
                fredNode.find('.easyir-ani-checkbox-bar1')
            ]);
            fred13();

        }, TIME_CLICK);
    };

    var fred13 = function () {
        setTimeout(function () {
            fredNode.find('.easyir-ani-options-bar-quater1').addClass(ANI_CLICK_GRAY_BTN);
            fredNode.find('.easyir-ani-options-bar-quater1').find('.easyir-ani-options-bar-quater-checkbox').addClass('easyir-ani-options-bar-quater-checkbox-checked');
            fredNode.find('.easyir-progress-checkbox1').addClass('easyir-progress-checkbox-checked');

            fred14();
        }, TIME_NEXT_SLIDE);
    };

    var fred14 = function () {
        setTimeout(function () {
            fredNode.find('.easyir-ani-options-bar-quater2').addClass(ANI_CLICK_GRAY_BTN);
            fredNode.find('.easyir-ani-options-bar-quater2').find('.easyir-ani-options-bar-quater-checkbox').addClass('easyir-ani-options-bar-quater-checkbox-checked');
            fredNode.find('.easyir-progress-checkbox2').addClass('easyir-progress-checkbox-checked');

            fred15();
        }, TIME_CLICK);
    };

    var fred15 = function () {
        setTimeout(function () {
            aniPrevSlide([
                fredNode.find('.easyir-ani-ir595-pre1'),
                fredNode.find('.easyir-ani-progress-bar4'),
                fredNode.find('.easyir-ani-options-bar5'),
                fredNode.find('.easyir-ani-ir595-menu-bar-pre1'),
                fredNode.find('.easyir-ani-checkbox-bar1')
            ]);

            aniNextSlide([
                fredNode.find('.easyir-ani-ir595-pre2'),
                fredNode.find('.easyir-ani-progress-bar5'),
                fredNode.find('.easyir-ani-options-bar6'),
                fredNode.find('.easyir-ani-ir595-menu-bar-pre2'),
                fredNode.find('.easyir-ani-checkbox-bar2')
            ]);
            fred16();

        }, TIME_CLICK);
    };

    var fred16 = function () {
        setTimeout(function () {
            fredNode.find('.easyir-ani-options-bar-quater3').addClass(ANI_CLICK_GRAY_BTN);
            fredNode.find('.easyir-ani-options-bar-quater3').find('.easyir-ani-options-bar-quater-checkbox').addClass('easyir-ani-options-bar-quater-checkbox-checked');
            fredNode.find('.easyir-progress-checkbox3').addClass('easyir-progress-checkbox-checked');

            fred17();
        }, TIME_NEXT_SLIDE);
    };

    var fred17 = function () {
        setTimeout(function () {
            fredNode.find('.easyir-ani-options-bar-quater4').addClass(ANI_CLICK_GRAY_BTN);
            fredNode.find('.easyir-ani-options-bar-quater4').find('.easyir-ani-options-bar-quater-checkbox').addClass('easyir-ani-options-bar-quater-checkbox-checked');
            fredNode.find('.easyir-progress-checkbox4').addClass('easyir-progress-checkbox-checked');

            fred18();
        }, TIME_CLICK);
    };

    var fred18 = function () {
        setTimeout(function () {
            aniPrevSlide([
                fredNode.find('.easyir-ani-ir595-pre2'),
                fredNode.find('.easyir-ani-progress-bar5'),
                fredNode.find('.easyir-ani-options-bar6'),
                fredNode.find('.easyir-ani-ir595-menu-bar-pre2'),
                fredNode.find('.easyir-ani-checkbox-bar2')
            ]);

            aniNextSlide([
                fredNode.find('.easyir-ani-ir595-pre3'),
                fredNode.find('.easyir-ani-progress-bar6'),
                fredNode.find('.easyir-ani-options-bar7'),
                fredNode.find('.easyir-ani-ir595-menu-bar-pre3'),
                fredNode.find('.easyir-ani-checkbox-bar3')
            ]);
            $('.easyir-walkthrough-fred2-point2').removeClass(POINT_HIDDEN);

            fred19();
        }, TIME_CLICK);
    };

    var fred19 = function () {
        setTimeout(function () {
            fredNode.find('.easyir-ani-options-bar-half3').addClass(ANI_CLICK_GRAY_BTN);

            fred20();
        }, TIME_NEXT_SLIDE);
    };

    var fred20 = function () {
        setTimeout(function () {
            aniPrevSlide([
                fredNode.find('.easyir-ani-ir595-pre3'),
                fredNode.find('.easyir-ani-progress-bar6'),
                fredNode.find('.easyir-ani-options-bar7'),
                fredNode.find('.easyir-ani-ir595-menu-bar-pre3'),
                fredNode.find('.easyir-ani-checkbox-bar3')
            ]);

            aniNextSlide([
                fredNode.find('.easyir-ani-ir595-pre4'),
                fredNode.find('.easyir-ani-progress-bar7'),
                fredNode.find('.easyir-ani-ir595-menu-bar-pre4'),
                fredNode.find('.easyir-ani-ir595-pre4-upload-button1')
            ]);

            fred21();
        }, TIME_CLICK);
    };

    var fred21 = function () {
        setTimeout(function () {
            aniPrevSlide([
                fredNode.find('.easyir-ani-ir595-pre4'),
                fredNode.find('.easyir-ani-progress-bar7'),
                fredNode.find('.easyir-ani-ir595-menu-bar-pre4'),
                fredNode.find('.easyir-ani-ir595-pre4-upload-button1')
            ]);

            aniNextSlide([
                fredNode.find('.easyir-ani-ir595-pre5'),
                fredNode.find('.easyir-ani-ir595-menu-bar-pre5')
            ]);

            $('.easyir-walkthrough-fred2-point3').removeClass(POINT_HIDDEN);
            fred22();
        }, TIME_NEXT_SLIDE);
    };

    var fred22 = function () {
        setTimeout(function () {
            fredNode.html(fredStartTemplate);
            fredBtn.removeClass(BTN_DISABLED);
            fredBtn.find('.easyir-btn-arrow').addClass(BOUNCY_ARROW);
            fredBtn.find('.easyir-btn-text').html('Go Again!');
        }, TIME_HELP);
    };

    fredBtn.on('click', fred1);

    // ============================= Jane =============================
    var janeNode = $('.easyir-ani-jane');
    var janeBtn = $('.easyir-btn-jane');

    var janeAniTemplate = '' +
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
            '<div class="easyir-ani-registration-btn">' +
                'Register' +
            '</div>' +
        '</div>' +
        '<div class="easyir-ani-app easyir-ani-next">' +
            '<div class="easyir-ani-verification1"></div>' +
            '<div class="easyir-ani-send-verification-btn">' +
                'Send Verification Code' +
            '</div>' +
            '<span class="easyir-ani-verification-mobile">' +
                'Mobile Number' +
            '</span>' +
            '<div class="easyir-ani easyir-ani-menu-bar-verification1 easyir-ani-next"></div>' +
            '<div class="easyir-ani-verification2 easyir-ani-next"></div>' +
            '<div class="easyir-ani-default-btn easyir-ani-send-verification-submit easyir-ani-next">' +
                'Submit' +
            '</div>' +
            '<div class="easyir-ani-default-btn easyir-ani-send-verification-resend easyir-ani-next">' +
                'Resend Verification Code' +
            '</div>' +
            '<div class="easyir-ani-verification-code-container easyir-ani-next">' +
                '<span class="easyir-ani-verification-code">' +
                    'Verification Code' +
                '</span>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-menu-bar-verification2 easyir-ani-next"></div>' +
            '<div class="easyir-ani-verification3 easyir-ani-next"></div>' +
            '<div class="easyir-ani easyir-ani-checkbox-bar easyir-ani-checkbox-bar1 easyir-ani-next">' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-1 easyir-progress-checkbox-quater-first"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-2 easyir-progress-checkbox-quater-second"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-3 easyir-progress-checkbox-quater-third"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-4 easyir-progress-checkbox-quater-fourth"></div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-menu-bar-verification3 easyir-ani-next"></div>' +
            '<div class="easyir-ani-verification4 easyir-ani-next"></div>' +
            '<div class="easyir-ani-verification-getstarted easyir-ani-next">' +
                'Get Started' +
                '<img class="easyir-ani-verification-getstarted-arrow" src="web/assets/images/generic-app/00-iphone5s/arrow.svg">' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-checkbox-bar easyir-ani-checkbox-bar2 easyir-ani-next">' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-first"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-second"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-third"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-fourth"></div>' +
            '</div>' +
            '<div class="easyir-ani easyir-ani-menu-bar-verification4 easyir-ani-next"></div>' +
            '<div class="easyir-ani-verification5 easyir-ani-next"></div>' +
            '<div class="easyir-ani easyir-ani-menu-bar-verification5 easyir-ani-next"></div>' +
        '</div>' +
        '<div class="easyir-ani easyir-ani-header"></div>' +
        '<div class="easyir-ani easyir-ani-open"></div>' +
        '<div class="easyir-ani-swipe-gesture"></div>' +
        '<div class="easyir-ani-txt easyir-ani-next">' +
            '<img class="easyir-ani-txt-icon" src="web/assets/images/jane-app/02-mobile-verification/icn-imessage.png">' +
            '<div class="easyir-ani-txt-heading">' +
                'Inland Revenue' +
            '</div>' +
            '<div class="easyir-ani-txt-message">' +
                'EasyIR Verification Code: <strong>C68HAS</strong>' +
            '</div>' +
            '<div class="easyir-ani-txt-thumbnail"></div>' +
        '</div>';

    var janeStartTemplate = '' +
        '<div class="easyir-ani-app">' +
            '<div class="easyir-ani-verification5"></div>' +
            '<div class="easyir-ani easyir-ani-menu-bar-verification5"></div>' +
        '</div>' +
        '<div class="easyir-ani easyir-ani-header"></div>';

    var jane1 = function () {
        $('.easyir-walkthrough-jane-point1').addClass(POINT_HIDDEN);
        $('.easyir-walkthrough-jane-point2').addClass(POINT_HIDDEN);
        $('.easyir-walkthrough-jane-point3').addClass(POINT_HIDDEN);
        janeNode.html(janeAniTemplate);
        janeNode = $('.easyir-ani-jane');
        janeBtn.addClass(ANI_START_BTN_JANE1);
        janeBtn.addClass(BTN_DISABLED);
        janeBtn.find('.easyir-btn-arrow').removeClass(BOUNCY_ARROW);

        setTimeout(function() {
            janeNode.find('.easyir-ani-open').addClass(ANI_OPEN_APP);

            jane2();
        }, TIME_NEXT_SLIDE);
    };

    var jane2 = function () {
        setTimeout(function () {
            janeNode.find('.easyir-ani-registration-irdnumber').html('<span class="easyir-typing">12345678<span class="easyir-ani-typing">&nbsp;</span></span>');

            jane3();
        }, TIME_NEXT_SLIDE);
    };

    var jane3 = function () {
        setTimeout(function () {
            janeNode.find('.easyir-ani-registration-password').html('<span class="easyir-typing">••••••••<span class="easyir-ani-typing">&nbsp;</span></span>');

            jane4();
        }, TIME_TYPING);
    };

    var jane4 = function () {
        setTimeout(function () {
            janeNode.find('.easyir-ani-registration-btn').addClass(ANI_CLICK_GRAY_BTN);

            jane5();
        }, TIME_TYPING);
    };

    var jane5 = function () {
        setTimeout(function () {
            aniPrevSlide([janeNode.find('.easyir-ani-registration')]);
            aniNextSlide([janeNode.find('.easyir-ani-app')]);

            jane6();
        }, TIME_CLICK);
    };

    var jane6 = function () {
        setTimeout(function () {
            janeNode.find('.easyir-ani-verification-mobile').html('<span class="easyir-typing">+6421543678<span class="easyir-ani-typing">&nbsp;</span></span>');

            jane7();
        }, TIME_NEXT_SLIDE);
    };

    var jane7 = function () {
        setTimeout(function () {
            janeNode.find('.easyir-ani-send-verification-btn').addClass(ANI_CLICK_GRAY_BTN);
            $('.easyir-walkthrough-jane-point2').removeClass(POINT_HIDDEN);

            jane8();
        }, TIME_TYPING);
    };

    var jane8 = function () {
        setTimeout(function () {
            aniPrevSlide([
                janeNode.find('.easyir-ani-verification1'),
                fredNode.find('.easyir-ani-menu-bar-verification1'),
                janeNode.find('.easyir-ani-send-verification-btn'),
                janeNode.find('.easyir-ani-verification-mobile')
            ]);

            aniNextSlide([
                janeNode.find('.easyir-ani-verification2'),
                fredNode.find('.easyir-ani-menu-bar-verification2'),
                janeNode.find('.easyir-ani-txt'),
                janeNode.find('.easyir-ani-send-verification-submit'),
                janeNode.find('.easyir-ani-send-verification-resend'),
                janeNode.find('.easyir-ani-verification-code-container')
            ]);
            janeNode.find('.easyir-ani-txt').addClass('easyir-ani-show-txt');

            jane9();
        }, TIME_CLICK);
    };

    var jane9 = function () {

        setTimeout(function () {
            janeNode.find('.easyir-ani-verification-code').html('<span class="easyir-typing">C68HAS<span class="easyir-ani-typing">&nbsp;</span></span>');

            jane10();
        }, TIME_NEXT_SLIDE);
    };

    var jane10 = function () {
        setTimeout(function () {
            janeNode.find('.easyir-ani-send-verification-submit').addClass(ANI_CLICK_GRAY_BTN);
            janeNode.find('.easyir-ani-txt').addClass('easyir-ani-hide-txt');

            jane11();
        }, TIME_TYPING);
    };

    var jane11 = function () {
        setTimeout(function () {
            aniPrevSlide([
                janeNode.find('.easyir-ani-verification2'),
                fredNode.find('.easyir-ani-menu-bar-verification2'),
                janeNode.find('.easyir-ani-txt'),
                janeNode.find('.easyir-ani-send-verification-submit'),
                janeNode.find('.easyir-ani-send-verification-resend'),
                janeNode.find('.easyir-ani-verification-code-container')
            ]);

            aniNextSlide([
                janeNode.find('.easyir-ani-verification3'),
                fredNode.find('.easyir-ani-menu-bar-verification3'),
                janeNode.find('.easyir-ani-verification-menubar1'),
                janeNode.find('.easyir-ani-checkbox-bar1')
            ]);
            $('.easyir-walkthrough-jane-point3').removeClass(POINT_HIDDEN);

            jane12();
        }, TIME_CLICK)
    };

    var jane12 = function () {
        setTimeout(function () {
            janeNode.find('.easyir-progress-checkbox-quater-1').addClass('easyir-progress-checkbox-checked');
            janeNode.find('.easyir-ani-swipe-gesture').addClass('easyir-ani-gesture-press-zero');

            setTimeout(function () {
                janeNode.find('.easyir-progress-checkbox-quater-2').addClass('easyir-progress-checkbox-checked');

                setTimeout(function () {
                    janeNode.find('.easyir-progress-checkbox-quater-3').addClass('easyir-progress-checkbox-checked');

                    setTimeout(function () {
                        janeNode.find('.easyir-progress-checkbox-quater-4').addClass('easyir-progress-checkbox-checked');

                        jane13();
                    }, TIME_CLICK);

                }, TIME_CLICK);

            }, TIME_CLICK);

        }, TIME_NEXT_SLIDE);
    };

    var jane13 = function () {
        setTimeout(function () {
            aniPrevSlide([
                janeNode.find('.easyir-ani-verification3'),
                fredNode.find('.easyir-ani-menu-bar-verification3'),
                janeNode.find('.easyir-ani-verification-menubar1'),
                janeNode.find('.easyir-ani-checkbox-bar1')
            ]);

            aniNextSlide([
                janeNode.find('.easyir-ani-verification4'),
                janeNode.find('.easyir-ani-verification-getstarted'),
                janeNode.find('.easyir-ani-menu-bar-verification4')
            ]);

            jane14();
        }, TIME_CLICK)
    };

    var jane14 = function () {
        setTimeout(function () {
            janeNode.find('.easyir-ani-verification-getstarted').addClass(ANI_CLICK_TEAL_BTN);
            jane15();
        }, TIME_CLICK);
    };

    var jane15 = function () {
        setTimeout(function () {
            aniPrevSlide([
                janeNode.find('.easyir-ani-verification4'),
                janeNode.find('.easyir-ani-verification-getstarted'),
                janeNode.find('.easyir-ani-menu-bar-verification4')
            ]);

            aniNextSlide([
                janeNode.find('.easyir-ani-verification5'),
                janeNode.find('.easyir-ani-menu-bar-verification5'),
                janeNode.find('.easyir-ani-checkbox-bar2')

            ]);

            jane16();
        }, TIME_NEXT_SLIDE)
    };

    var jane16 = function () {
        setTimeout(function () {
            janeNode.html(janeStartTemplate);
            janeBtn.removeClass(BTN_DISABLED);
            janeBtn.find('.easyir-btn-arrow').addClass(BOUNCY_ARROW);
            janeBtn.find('.easyir-btn-text').html('Go Again!');
        }, TIME_HELP);
    };

    janeBtn.on('click', jane1);

    // ============================= Mike =============================

    var mikeNode = $('.easyir-ani-mike');
    var mikeBtn = $('.easyir-btn-mike');

    var mikeAniTemplate = '' +
        '<div class="easyir-ani-app">' +
            '<div class="easyir-ani-dashboard1"></div>' +
            '<div class="easyir-ani easyir-ani-menu-bar-dashboard1"></div>' +
            '<div class="easyir-ani easyir-ani-checkbox-bar easyir-ani-checkbox-bar1">' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-1 easyir-progress-checkbox-quater-first"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-2 easyir-progress-checkbox-quater-second"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-3 easyir-progress-checkbox-quater-third"></div>' +
                '<div class="easyir-progress-checkbox easyir-progress-checkbox-quater-4 easyir-progress-checkbox-quater-fourth"></div>' +
            '</div>' +
            '<div class="easyir-ani-dashboard-profile easyir-ani-next"></div>' +
            '<div class="easyir-ani-dashboard2 easyir-ani-next"></div>' +
            '<div class="easyir-ani-dashboard-bottom easyir-ani-next"></div>' +
            '<div class="easyir-ani-menu-bar-dashboard2 easyir-ani-next"></div>' +
            '<div class="easyir-ani-press-dashboard"></div>' +
        '</div>' +
        '<div class="easyir-ani easyir-ani-header"></div>' +
        '<div class="easyir-ani easyir-ani-open"></div>' +
        '<div class="easyir-ani-swipe-gesture"></div>';

    var mike1 = function () {
        $('.easyir-walkthrough-mike-point1').addClass(POINT_HIDDEN);
        $('.easyir-walkthrough-mike-point2').addClass(POINT_HIDDEN);
        $('.easyir-walkthrough-mike-point3').addClass(POINT_HIDDEN);
        mikeNode.html(mikeAniTemplate);
        mikeNode = $('.easyir-ani-mike');
        mikeBtn.addClass(ANI_START_BTN_MIKE1);
        mikeBtn.addClass(BTN_DISABLED);
        mikeBtn.find('.easyir-btn-arrow').removeClass(BOUNCY_ARROW);
        $('.easyir-walkthrough-mike-point1').removeClass(POINT_HIDDEN);

        setTimeout(function() {
            mikeNode.find('.easyir-ani-open').addClass(ANI_OPEN_APP);

            mike2();
        }, TIME_NEXT_SLIDE);
    };

    var mike2 = function () {
        setTimeout(function () {
            mikeNode.find('.easyir-progress-checkbox-quater-1').addClass('easyir-progress-checkbox-checked');
            mikeNode.find('.easyir-ani-swipe-gesture').addClass('easyir-ani-gesture-press-zero');

            setTimeout(function () {
                mikeNode.find('.easyir-progress-checkbox-quater-2').addClass('easyir-progress-checkbox-checked');

                setTimeout(function () {
                    mikeNode.find('.easyir-progress-checkbox-quater-3').addClass('easyir-progress-checkbox-checked');

                    setTimeout(function () {
                        mikeNode.find('.easyir-progress-checkbox-quater-4').addClass('easyir-progress-checkbox-checked');

                        mike3();
                    }, TIME_CLICK);

                }, TIME_CLICK);

            }, TIME_CLICK);

        }, TIME_NEXT_SLIDE);
    };

    var mike3 = function () {
        setTimeout(function () {
            aniPrevSlide([
                mikeNode.find('.easyir-ani-dashboard1'),
                mikeNode.find('.easyir-ani-menu-bar-dashboard1'),
                mikeNode.find('.easyir-ani-checkbox-bar1')
            ]);

            aniNextSlide([
                mikeNode.find('.easyir-ani-dashboard2'),
                mikeNode.find('.easyir-ani-menu-bar-dashboard2'),
                mikeNode.find('.easyir-ani-dashboard-profile'),
                mikeNode.find('.easyir-ani-dashboard-bottom')
            ]);
            $('.easyir-walkthrough-mike-point2').removeClass(POINT_HIDDEN);

            mike4();
        }, TIME_NEXT_SLIDE);
    };

    var mike4 = function () {
        setTimeout(function () {
            mikeNode.find('.easyir-ani-dashboard2').addClass('easyir-ani-open-dash-board');
            mikeNode.find('.easyir-ani-dashboard-profile').addClass('easyir-ani-open-dash-board-profile');
            mikeNode.find('.easyir-ani-dashboard-bottom').addClass('easyir-ani-open-dash-board-bottom');

            mike5();
        }, 1000);
    };

    var mike5 = function () {
        setTimeout(function () {
            mikeNode.find('.easyir-ani-press-dashboard').addClass('easyir-press-dashboard-button');
            $('.easyir-walkthrough-mike-point3').removeClass(POINT_HIDDEN);

            mike6();
        }, 1000);
    };

    var mike6 = function () {
        setTimeout(function () {
            mikeNode.find('.easyir-ani-dashboard2').addClass('easyir-ani-open-dash-board2');
            mikeNode.find('.easyir-ani-dashboard-profile').addClass('easyir-ani-open-dash-board-profile2');

            mike7();
        }, 600);
    };

    var mike7 = function () {
        setTimeout(function () {
            mikeBtn.removeClass(BTN_DISABLED);
            mikeBtn.find('.easyir-btn-arrow').addClass(BOUNCY_ARROW);
            mikeBtn.find('.easyir-btn-text').html('Go Again!');
        }, TIME_HELP);
    };

    mikeBtn.on('click', mike1);
}());
