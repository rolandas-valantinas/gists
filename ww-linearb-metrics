// ==UserScript==
// @author       Rolandas Valantinas
// @description  Add metrics WW is striving for
// @include      *app.linearb.io/performance*
// @name         LinearB metrics comparison
// @namespace    https://greasyfork.org/users/157178
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @supportURL   https://github.com/rolandas-valantinas/gists/issues
// @version      1.0
// ==/UserScript==

(function () {
    var metricsButton = `<input type="button" id="add-ww-metrics" value="Add WW Metrics">`;
    var intervalButton = setInterval(addButton, 2000);
    var attempts = 0;

    function addMetrics() {
        console.log('add addMetrics');

        $("p:contains('CODING TIME')").first().parent().siblings().children().first().append(' / <24h');
        $("p:contains('PICKUP TIME')").first().parent().siblings().children().first().append(' / <12h');
        $("p:contains('REVIEW TIME')").first().parent().siblings().children().first().append(' / <4h');
        $("p:contains('PRS OPENED')").first().parent().siblings().children().first().append(' / >2 per day');
        $("p:contains('PR SIZE')").first().parent().siblings().children().first().append(' / <500');
        $("p:contains('REVIEW DEPTH')").first().parent().siblings().children().first().append(' / 2-4');
        $("p:contains('NEW CODE')").first().parent().siblings().children().first().append(' / >70%');
        $("p:contains('REFACTOR')").first().parent().siblings().children().first().append(' / <25%');
        $("p:contains('REWORK')").first().parent().siblings().children().first().append(' / <5%');

        $("p:contains('CYCLE TIME')").first().parent().siblings().children().first().append(' / <2 days');
        $("p:contains('DEPLOY FREQUENCY')").first().parent().siblings().children().first().append(' / >1 per day');
        $("p:contains('DEPLOY TIME')").first().parent().siblings().children().first().append(' / <6h');
        $("p:contains('MTTR')").first().parent().siblings().children().first().append(' / <4h');
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
