/*global $, document, setTimeout */
(function (document) {
    'use strict';

    var transitionInProgress = false,
        documentNode         = $(document),
        getStoryNode,
        updateNodeNumber,
        setSlide,
        prevSlide,
        nextSlide,
        startStory,
        setStory,
        nextStory,
        prevStory,
        mouseWheelEventHandler,
        keydownEventHandler,
        headerNavItemClickHandler;

    /**
     * Gets the current slide node that is visible in the viewport.
     *
     * @method getStoryNode
     * @return {Node} The current slide node that is visible in the viewport.
     */
    getStoryNode = function () {
        var mainNode    = $('.easyir-main'),
            storyNumber = mainNode.data('story');

        return $('#easyir-story' + storyNumber);
    };

    /**
     * Updates the passed parent and transition nodes with the passed properties.
     *
     * @method updateNodeNumber
     * @param config {Object}
     *        @param config.parentNode {Node}
     *               The parent node that contains the transition nodes.
     *
     *        @param config.transitionNodes {NodeList}
     *               The transition nodes to update the inline styles of.
     *
     *        @param config.dataProperty {String}
     *               The data property of the parent node to update.
     *
     *        @param config.dataValue {Number}
     *               The data value to set the passed data property to.
     *
     *        @param config.cssProperty {String}
     *               The inline css property to update the inline style of transition nodes to.
     */
    updateNodeNumber = function (config) {
        var parentNode      = config.parentNode,
            transitionNodes = config.transitionNodes,
            dataProperty    = config.dataProperty,
            dataValue       = config.dataValue,
            cssProperty     = config.cssProperty,
            cssValue        = (dataValue * 100) - 100;

        parentNode.data(dataProperty, dataValue);
        transitionNodes.css(cssProperty, '-' + cssValue + '%');
    };

    // ============================= Changing Slides =============================

    /**
     * Sets the slide of the passed story to the to the passed number.
     *
     * @method setSlide
     * @param story {Number}
     *        The story to update.
     *
     * @param slide {Number}
     *        The slide to set.
     */
    setSlide = function (slide) {
        var storyNode = getStoryNode();

        updateNodeNumber({
            parentNode: storyNode,
            transitionNodes: storyNode.find('.easyir-slide'),
            dataProperty: 'slide',
            dataValue: slide,
            cssProperty: 'left'
        });
    };

    /**
     * Navigates to the previous slide.
     *
     * @method nextSlide
     */
    prevSlide = function () {
        var storyNode    = getStoryNode(),
            totalSlides  = storyNode.find('.easyir-slide').length,
            currentSlide = storyNode.data('slide'),
            nextSlide;

        if (currentSlide > 1) {
            nextSlide = currentSlide - 1;
            setSlide(nextSlide);

            if (nextSlide === 1) {
                storyNode.find('.easyir-story-side-bar').removeClass('easyir-story-side-bar-visible');
                storyNode.find('.easyir-slide-btn-prev').removeClass('easyir-slide-btn-prev-visible');
            }

            if (nextSlide < totalSlides) {
                storyNode.find('.easyir-slide-btn-next').removeClass('easyir-slide-btn-next-hidden');
            }

            return true;
        }
    };

    /**
     * Navigates to the next slide.
     *
     * @method nextSlide
     */
    nextSlide = function () {
        var storyNode    = getStoryNode(),
            totalSlides  = storyNode.find('.easyir-slide').length,
            currentSlide = storyNode.data('slide'),
            nextSlide    = currentSlide + 1;

        if (currentSlide < totalSlides) {
            setSlide(nextSlide);
            storyNode.find('.easyir-story-side-bar').addClass('easyir-story-side-bar-visible');
            storyNode.find('.easyir-slide-btn-prev').addClass('easyir-slide-btn-prev-visible');

            if (nextSlide === totalSlides) {
                storyNode.find('.easyir-slide-btn-next').addClass('easyir-slide-btn-next-hidden');
            }

            return true;
        }

    };

    // ============================= Changing Story =============================

    /**
     * Sets the story to the passed number, and restarts the slides.
     *
     * @method startStory
     * @param story {Number}
     *        The story to start.
     */
    startStory = function (story) {
        setStory(story);
        setSlide(1);
    };

    /**
     * Sets the story to the passed number.
     *
     * @method setStory
     * @param story {Number}
     *        The story to set.
     */
    setStory = function (story) {
        var mainNode   = $('.easyir-main'),
            headerNode = $('.easyir-header');

        updateNodeNumber({
            parentNode: mainNode,
            transitionNodes: mainNode.find('.easyir-story'),
            dataProperty: 'story',
            dataValue: story,
            cssProperty: 'top'
        });

        if (story === 1) {
            headerNode.removeClass('easyir-header-visible');
        } else {
            headerNode.addClass('easyir-header-visible');
        }
    };
    /**
     * Navigates to the prev story.
     *
     * @method prevStory
     */
    prevStory = function () {
        var mainNode     = $('.easyir-main'),
            currentStory = mainNode.data('story');

        if (currentStory > 1) {
            setStory(currentStory - 1);
            return true;
        }
    };

    /**
     * Navigates to the next story.
     *
     * @method nextStory
     */
    nextStory = function () {
        var mainNode     = $('.easyir-main'),
            totalStories = mainNode.find('.easyir-story').length,
            currentStory = mainNode.data('story');

        if (currentStory < totalStories) {
            setStory(currentStory + 1);
            return true;
        }
    };

    // ============================= Event Handlers =============================

    /**
     * Handles the mouse wheel event for iterating stories.
     *
     * @method mouseWheelEventHandler
     * @param event {Event}
     *         The event object.
     */
    mouseWheelEventHandler = function (event) {
        var deltaY = event.deltaY,
            start  = false;

        if (!transitionInProgress) {

            if (deltaY < 0) {
                start = nextStory();

            } else if (deltaY > 0) {
                start = prevStory();
            }

            if (start) {
                transitionInProgress = true;
                documentNode.off('mousewheel', mouseWheelEventHandler);

                setTimeout(function () {
                    transitionInProgress = false;
                    documentNode.on('mousewheel', mouseWheelEventHandler);
                }, 1000);
            }
        }
    };

    /**
     * Handles the global keydown event for iterating stories and slides.
     *
     * @method keydownEventHandler
     * @param event {Event}
     *         The event object.
     */
    keydownEventHandler = function (event) {
        switch (event.which) {
        case 40: // Down
            nextStory();
            break;
        case 38: // Up
            prevStory();
            break;
        case 39: // Right
            nextSlide();
            break;
        case 37: // Left
            prevSlide();
            break;
        }
    };

    /**
     * Handles header nav item clicks to start a particular story.
     *
     * @method headerNavItemClickHandler
     */
    headerNavItemClickHandler = function () {
        var targetNode  = $(this),
            storyNumber = targetNode.data('story');

        startStory(storyNumber);
    };

    $('.easyir-slide-btn-prev').on('click', prevSlide);
    $('.easyir-slide-btn-next').on('click', nextSlide);
    $('.easyir-story-nav-bar').on('click', '.easyir-story-nav', headerNavItemClickHandler);
    documentNode.keydown(keydownEventHandler);
    documentNode.on('mousewheel', mouseWheelEventHandler);

    // ============================= Animations =============================

    $('.easyir-btn-start-animation').on('click', function () {
        $('.easyir-ani-open').addClass('easyir-ani-open-app');
        setTimeout(function () {
            $('.easyir-ani-apply-button').addClass('easyir-ani-click-teal-button');

             setTimeout(function () {
                $('.easyir-ani-app').addClass('easyir-ani-slide-next-frame');
                $('.easyir-ani-registration').addClass('easyir-ani-slide-prev-frame');

                setTimeout(function () {
                    $('.easyir-ani-pre-1').addClass('easyir-ani-show-help');
                    $('.easyir-ani-swipe-gesture').addClass('easyir-ani-gesture-show-help');

                    setTimeout(function () {
                        $('.easyir-ani-options-yes').addClass('easyir-ani-click-gray-button');
                    }, 800);
                }, 400);
            }, 400);

        }, 300);
    });

    $('.easyir-btn-reset-animation').on('click', function () {
        $('.easyir-ani-open').removeClass('easyir-ani-open-app');
        $('.easyir-ani-apply-button').removeClass('easyir-ani-click-teal-button');
        $('.easyir-ani-app').removeClass('easyir-ani-slide-next-frame');
        $('.easyir-ani-registration').removeClass('easyir-ani-slide-prev-frame');
        $('.easyir-ani-pre-1').removeClass('easyir-ani-show-help');
        $('.easyir-ani-swipe-gesture').removeClass('easyir-ani-gesture-show-help');
        $('.easyir-ani-options-yes').removeClass('easyir-ani-click-gray-button');
    });

}(document));
