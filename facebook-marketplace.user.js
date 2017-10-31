// ==UserScript==
// @author       Rolandas Valantinas
// @description  remove entries posted more than one day ago
// @include      *facebook.com/marketplace*
// @exclude      *facebook.com/marketplace/buying
// @exclude      *facebook.com/marketplace/saved
// @exclude      *facebook.com/marketplace/selling
// @name         Facebook marketplace (day)
// @namespace    https://greasyfork.org/users/157178
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @supportURL   https://github.com/rolandas-valantinas/gists/issues
// @version      1.3
// ==/UserScript==

(function () {
    var interval = setInterval(removeItem, 3000);
    var attempts = 0;

    function removeItem() {
        var items = $('._1oem')
            .has('._uc9:contains("over a week ago"), ._uc9:contains("days ago")');

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
