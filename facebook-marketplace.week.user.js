// ==UserScript==
// @author       Rolandas Valantinas
// @description  remove entries posted over a week ago
// @include      *facebook.com/marketplace*
// @name         Facebook marketplace (week)
// @namespace    https://greasyfork.org/users/157178
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @supportURL   https://github.com/rolandas-valantinas/gists/issues
// @version      1.2
// ==/UserScript==

(function () {
    var interval = setInterval(removeItem, 3000);
    var attempts = 0;

    function removeItem() {
        var items = $('._1oem')
            .has('._uc9:contains("over a week ago")');

        if (items.length > 0) {
            attempts = 0;
            items.remove();
        } else {
            attempts++;
        }

        window.scrollTo(0, $(document).height());

        if (attempts > 5) {
            clearInterval(interval);
        }
    }
})();
