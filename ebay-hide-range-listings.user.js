// ==UserScript==
// @author       Rolandas Valantinas
// @description  Remove ebay listings that have range values
// @include      *ebay.co.uk/sch*
// @include      *ebay.com/sch*
// @name         Hide ebay range listings
// @namespace    https://greasyfork.org/users/157178
// @supportURL   https://github.com/rolandas-valantinas/gists/issues
// @version      1.0
// ==/UserScript==

(function () {
    var interval = setInterval(hideListings, 2000);

    function hideListings() {
        var price = document.getElementsByClassName("prRange");

        for (var i = 0; i < price.length; i++) {
            price[i].parentNode.parentNode.parentNode.parentNode.remove();
        }

        if (price.length === 0) {
            clearInterval(interval);
        }
    }
})();