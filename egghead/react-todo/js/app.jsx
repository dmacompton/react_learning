/** @jsx React.DOM */

var app = app || {};

(function () {
    'use strict';

    app.init = function () {
        var TodoApp = app.components.TodoApp;

        React.renderComponent(
            <TodoApp />,
            document.getElementById('app')
        );
    };

    app.retrieveData = function() {
        return app.FIXTURES;
    };

    app.init();
})();