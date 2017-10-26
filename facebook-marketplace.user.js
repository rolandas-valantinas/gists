// ==UserScript==
// @name         Facebook marketplace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  drop older than week entries
// @author       You
// @include      *facebook.com/marketplace*
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    setInterval(removeItem, 2000);

    function removeItem() {
        $('._1oem').has('._uc9:contains("over a week ago")').remove();
    }
})();
