/**
 * Copyright © Nathanjosiah. All rights reserved.
 */

define([
    'jquery',
    'jquery.simplexml'
], function ($) {
    'use strict';

    return function LayoutDebuggerDumpComponent (data, element) {
        var $window = $(element),
            $dump = $window.find('.layout-debugger-dump'),
            xml = $dump.text(),
            $fullscreenToggle = $window.find('.fullscreen-toggle'),
            $body = $('body');

        $dump.empty();

        $dump.simpleXML(
            {
                xmlString: xml
            }
        );

        $window.find('.btn').on('click', function () {
            $window.toggleClass('open');
        });

        $fullscreenToggle.on('click', function () {
            $body.toggleClass('layout_debugger-fullscreen');

            if ($body.hasClass('fullscreen')) {
                $fullscreenToggle.text('exit fullscreen');
            } else if ($window.get(0).exitFullscreen) {
                $fullscreenToggle.text('view fullscreen');
            }
        });
    };
});
