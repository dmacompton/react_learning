var app = app || {};

(function () {
    'use strict';

    app.init = function () {
        var HelloMessage = app.components.HelloMessage;

        ReactDOM.render(
            <HelloMessage name="John" />,
            document.getElementById('apps')
        );
    };

    app.init();
})();