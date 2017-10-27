// ==UserScript==
// @author       Rolandas Valantinas
// @description  remove entries posted more than one day ago
// @include      *facebook.com/marketplace*
// @name         Facebook marketplace (day)
// @namespace    https://greasyfork.org/users/157178
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @supportURL   https://github.com/rolandas-valantinas/gists/issues
// @version      1.0
// ==/UserScript==

(function () {
    setInterval(removeItem, 2000);

    function removeItem() {
        $('._1oem').has('._uc9:contains("over a week ago"), ._uc9:contains("days ago")').remove();
    }
})();
