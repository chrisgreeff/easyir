(function () {
    'use strict';

    /**
     * Gets the current slide node that is visible in the viewport.
     *
     * @method getSlideNode
     * @return {Node} The current slide node that is visible in the viewport.
     */
    function getSlideNode() {
        var mainNode = $('.easyir-main'),
        storyClass   = getCurrentClass(mainNode, 'easyir-main'),
        storyNumber  = getCurrentNumber(storyClass);

        return $('#easyir-story' + storyNumber);
    }

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
    function getCurrentClass(node, skipClass) {
        var currentClass;

        $.each(node.attr('class').split(' '), function (index, className) {
            if (className !== skipClass && !currentClass) {
                currentClass = className;
            }
        });

        return currentClass;
    }

    /**
     * Gets the current slide/story number of the passed class.
     *
     * @method getCurrentNumber
     * @param  currentClass {String}
     *         The class to get the current slide/story number of.
     *
     * @return {Number} The current slide/story number of the passed class.
     */
    function getCurrentNumber(currentClass) {
        var classLength;

        classLength = currentClass.length;
        return Number(currentClass.substring(classLength - 1, classLength));
    }

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
    function incrementNodeNumber(node, number, currentClass, className) {
        node.removeClass(currentClass);
        number += 1;
        node.addClass(className + number);
    }

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
    function decrementNodeNumber(node, number, currentClass, className) {
        node.removeClass(currentClass);
        number -= 1;
        node.addClass(className + number);
    }

    // ============================= Changing Slides =============================


    $('.easyir-slide-btn-prev').on('click', function (event) {
        var slideNode    = getSlideNode(),
            currentClass = getCurrentClass(slideNode, 'easyir-story'),
            slideNumber  = getCurrentNumber(currentClass);

        if (slideNumber > 1) {
            incrementNodeNumber(slideNode, slideNumber, currentClass, 'easyir-story-slide');
        }

        event.preventDefault();
    });

    $('.easyir-slide-btn-next').on('click', function (event) {
        var slideNode    = getSlideNode(),
            slides       = slideNode.data('slides'),
            currentClass = getCurrentClass(slideNode, 'easyir-story'),
            slideNumber  = getCurrentNumber(currentClass);

        if (slideNumber < slides) {
            incrementNodeNumber(slideNode, slideNumber, currentClass, 'easyir-story-slide');
        }

        event.preventDefault();
    });

    // ============================= Changing Story =============================

    $('.easyir-story-btn-prev').on('click', function (event) {
        var mainNode     = $('.easyir-main'),
            currentClass = getCurrentClass(mainNode, 'easyir-main'),
            storyNumber  = getCurrentNumber(currentClass);

        if (storyNumber > 1) {
            decrementNodeNumber(mainNode, storyNumber, currentClass, 'easyir-main-story');
        }

        event.preventDefault();
    });

    $('.easyir-story-btn-next').on('click', function (event) {
        var mainNode     = $('.easyir-main'),
            stories      = mainNode.data('stories'),
            currentClass = getCurrentClass(mainNode, 'easyir-main'),
            storyNumber  = getCurrentNumber(currentClass);

        if (storyNumber < stories) {
            incrementNodeNumber(mainNode, storyNumber, currentClass, 'easyir-main-story');
        }

        event.preventDefault();
    });

}());
