/*global $, document */
(function () {
    'use strict';

    var getStoryNode,
        getCurrentClass,
        getCurrentNumber,
        incrementNodeNumber,
        decrementNodeNumber,
        prevSlide,
        nextSlide,
        nextStory,
        prevStory,
        startStory,
        setStory,
        setSlide;

    /**
     * Gets the current slide node that is visible in the viewport.
     *
     * @method getStoryNode
     * @return {Node} The current slide node that is visible in the viewport.
     */
    getStoryNode = function () {
        var mainNode    = $('.easyir-main'),
            storyClass  = getCurrentClass(mainNode, 'easyir-main'),
            storyNumber = getCurrentNumber(storyClass);

        return $('#easyir-story' + storyNumber);
    };

    /**
     * Gets the current slide/story class of the passed node.
     *
     * @method getCurrentClass
     * @param  node {Node}
     *         The node to get the current slide/story class of.
     *
     * @param  skipClass {String}
     *         The class to skip when searching for the current slide/story class.
     *
     * @return {String} The current slide/story class of the passed node.
     */
    getCurrentClass = function (node, skipClass) {
        var currentClass;

        $.each(node.attr('class').split(' '), function (index, className) {
            if (className !== skipClass && !currentClass) {
                currentClass = className;
            }
        });

        return currentClass;
    };

    /**
     * Gets the current slide/story number of the passed class.
     *
     * @method getCurrentNumber
     * @param  currentClass {String}
     *         The class to get the current slide/story number of.
     *
     * @return {Number} The current slide/story number of the passed class.
     */
    getCurrentNumber = function (currentClass) {
        var classLength;

        classLength = currentClass.length;
        return Number(currentClass.substring(classLength - 1, classLength));
    };

    /**
     * Increments the slide/story number of the passed node
     *
     * @method incrementNodeNumber
     * @param  node {Node}
     *         The node to increment the current slide/story number on.
     *
     * @param  number {Number}
     *         The current slide/story number of the passed node
     *
     * @param  currentClass {String}
     *         The current slide/story class of the passed node.
     *
     * @param  className {String}
     *         The current slide/story class prefix (i.e. the class name without the slide/story number).
     */
    incrementNodeNumber = function (node, number, currentClass, className) {
        node.removeClass(currentClass);
        number += 1;
        node.addClass(className + number);
    };

    /**
     * Decrements the slide/story number of the passed node
     *
     * @method decrementNodeNumber
     * @param  node {Node}
     *         The node to decrement the current slide/story number on.
     *
     * @param  number {Number}
     *         The current slide/story number of the passed node
     *
     * @param  currentClass {String}
     *         The current slide/story class of the passed node.
     *
     * @param  className {String}
     *         The current slide/story class prefix (i.e. the class name without the slide/story number).
     */
    decrementNodeNumber = function (node, number, currentClass, className) {
        node.removeClass(currentClass);
        number -= 1;
        node.addClass(className + number);
    };

    // ============================= Changing Slides =============================

    /**
     * Navigates to the previous slide.
     *
     * @method nextSlide
     */
    prevSlide = function () {
        var storyNode    = getStoryNode(),
            currentClass = getCurrentClass(storyNode, 'easyir-story'),
            slideNumber  = getCurrentNumber(currentClass);

        if (slideNumber > 1) {
            decrementNodeNumber(storyNode, slideNumber, currentClass, 'easyir-story-slide');
        }
    };

    /**
     * Navigates to the next slide.
     *
     * @method nextSlide
     */
    nextSlide = function () {
        var storyNode    = getStoryNode(),
            slides       = storyNode.data('slides'),
            currentClass = getCurrentClass(storyNode, 'easyir-story'),
            slideNumber  = getCurrentNumber(currentClass);

        if (slideNumber < slides) {
            incrementNodeNumber(storyNode, slideNumber, currentClass, 'easyir-story-slide');
        }
    };

    // ============================= Changing Story =============================

    /**
     * Navigates to the prev story.
     *
     * @method prevStory
     */
    prevStory = function () {
        var mainNode     = $('.easyir-main'),
            currentClass = getCurrentClass(mainNode, 'easyir-main'),
            storyNumber  = getCurrentNumber(currentClass);

        if (storyNumber > 1) {
            decrementNodeNumber(mainNode, storyNumber, currentClass, 'easyir-main-story');
        }
    };

    /**
     * Navigates to the next story.
     *
     * @method nextStory
     */
    nextStory = function () {
        var mainNode     = $('.easyir-main'),
            stories      = mainNode.data('stories'),
            currentClass = getCurrentClass(mainNode, 'easyir-main'),
            storyNumber  = getCurrentNumber(currentClass);

        if (storyNumber < stories) {
            incrementNodeNumber(mainNode, storyNumber, currentClass, 'easyir-main-story');
        }
    };

    /**
     * Sets the story to the passed number, and restarts the slides.
     *
     * @method startStory
     * @param story {Number}
     *        The story to start.
     */
    startStory = function (story) {
        setStory(story);
        setSlide(story, 1);
    };

    /**
     * Sets the story to the passed number.
     *
     * @method setStory
     * @param story {Number}
     *        The story to set.
     */
    setStory = function (story) {
        var mainNode     = $('.easyir-main'),
            currentClass = getCurrentClass(mainNode, 'easyir-main');

        mainNode.removeClass(currentClass);
        mainNode.addClass('easyir-main-story' + story);
    };

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
    setSlide = function (story, slide) {
        var storyNode    = $('#easyir-story' + story),
            currentClass = getCurrentClass(storyNode, 'easyir-story');

        storyNode.removeClass(currentClass);
        storyNode.addClass('easyir-story-slide' + slide);
    };

    // ============================= Event Handlers =============================

    $('.easyir-slide-btn-prev').on('click', function (event) {
        prevSlide();
        event.preventDefault();
    });

    $('.easyir-slide-btn-next').on('click', function (event) {
        nextSlide();
        event.preventDefault();
    });

    $('.easyir-header-nav').on('click', '.easyir-nav', function () {
        var targetNode  = $(this),
            navClass    = getCurrentClass(targetNode, 'easyir-nav'),
            storyNumber = getCurrentNumber(navClass);

        startStory(storyNumber);
    });

    $(document).keydown(function (event) {
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
    });

}());
