// ==UserScript==
// @name         LinearB metrics comparison
// @author       Rolandas Valantinas
// @description  Add metrics WW is striving for
// @include      *app.linearb.io/performance*
// @namespace    https://greasyfork.org/users/157178
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @supportURL   https://github.com/rolandas-valantinas/gists/issues
// @version      1.2
// ==/UserScript==

(function () {
    var metricsButton = `<input type="button" id="add-ww-metrics" value="Add WW Metrics">`;
    var intervalButton = setInterval(addButton, 2000);
    var attempts = 0;

    function appendData(title, value) {
        $("p:contains('"+title+"')").first().parent().siblings().children().first().children().first().append(value);
    };

    function addMetrics() {
        console.log('add addMetrics');

        appendData('CODING TIME', ' / <24h');
        appendData('PICKUP TIME', ' / <12h');
        appendData('REVIEW TIME', ' / <4h');
        appendData('PRS OPENED', ' / >2 per day');
        appendData('PR SIZE', ' / <500');
        appendData('REVIEW DEPTH', ' / 2-4');
        appendData('NEW CODE', ' / >70%');
        appendData('REFACTOR', ' / <25%');
        appendData('REWORK', ' / <5%');

        appendData('CYCLE TIME', ' / <2 days');
        appendData('DEPLOY FREQUENCY', ' / >1 per day');
        appendData('DEPLOY TIME', ' / <6h');
        appendData('MTTR', ' / <4h');
    }


    function addButton() {
        console.log('add button');
        attempts++;
        var toolbar = $('div.MuiInputBase-root');

        if (toolbar.length > 0) {
            toolbar.parent().parent().append(metricsButton);
            $('#add-ww-metrics').click(addMetrics);
            attempts = 10;
        }

        if (attempts > 5) {
            clearInterval(intervalButton);
        }
    }
})();
