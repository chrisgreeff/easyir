(function () {
    'use strict';

    $('.easyir-main').on('click', '.js-expand', function(event) {
        var targetNode = $(this),
            expandableNode = targetNode.parent().find('.easyir-expandable');

        expandableNode.toggleClass('easyir-hidden');

        event.preventDefault();
    });
}());
