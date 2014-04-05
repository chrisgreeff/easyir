(function () {
    'use strict';

    // ============================= Changing Slides =============================

    function getCurrentSlideClass(slideNode) {
        var currentClass;

        $.each(slideNode.attr('class').split(' '), function (index, className) {
            if (className !== 'easyir-story') {
                currentClass = className;
            }
        });

        return currentClass;
    }

    function getCurrentSlideNumber(currentClass) {
        var classLength;

        classLength = currentClass.length;

        return Number(currentClass.substring(classLength - 1, classLength));
    }

    $('.easyir-slide-btn-prev').on('click', function (event) {
        var targetNode   = $(this),
            slideNode    = targetNode.parent('.easyir-story'),
            currentClass = getCurrentSlideClass(slideNode),
            slideNumber  = getCurrentSlideNumber(currentClass);

        if (slideNumber > 1) {
            slideNode.removeClass(currentClass);

            slideNumber -= 1;

            slideNode.addClass('easyir-story-slide' + slideNumber);
        }

        event.preventDefault();
    });

    $('.easyir-slide-btn-next').on('click', function (event) {
        var targetNode   = $(this),
            slideNode    = targetNode.parent('.easyir-story'),
            slides       = slideNode.data('slides'),
            currentClass = getCurrentSlideClass(slideNode),
            slideNumber  = getCurrentSlideNumber(currentClass);

        if (slideNumber < slides) {
            slideNode.removeClass(currentClass);

            slideNumber += 1;

            slideNode.addClass('easyir-story-slide' + slideNumber);
        }

        event.preventDefault();
    });

    // ============================= Changing Story =============================

    function getCurrentStoryClass(slideNode) {
        var currentClass;

        $.each(slideNode.attr('class').split(' '), function (index, className) {
            if (className !== 'easyir-story') {
                currentClass = className;
            }
        });

        return currentClass;
    }

    function getCurrentStoryNumber(currentClass) {
        var classLength;

        classLength = currentClass.length;

        return Number(currentClass.substring(classLength - 1, classLength));
    }

    $('.easyir-story-btn-prev').on('click', function (event) {
        var storyNode    = $('.easyir-main'),
            currentClass = getCurrentStoryClass(storyNode),
            storyNumber  = getCurrentStoryNumber(currentClass);

        if (storyNumber > 1) {
            storyNode.removeClass(currentClass);

            storyNumber -= 1;

            storyNode.addClass('easyir-main-story' + storyNumber);
        }

        event.preventDefault();
    });

    $('.easyir-story-btn-next').on('click', function (event) {
        var storyNode    = $('.easyir-main'),
            stories      = storyNode.data('stories'),
            currentClass = getCurrentStoryClass(storyNode),
            storyNumber  = getCurrentStoryNumber(currentClass);

        if (storyNumber < stories) {
            storyNode.removeClass(currentClass);

            storyNumber += 1;

            storyNode.addClass('easyir-main-story' + storyNumber);
        }

        event.preventDefault();
    });

}());
