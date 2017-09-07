// ==UserScript==
// @name         Hide ebay range listings
// @namespace    #
// @version      1.0
// @description  Remove ebay listings that have range values
// @author       Rolandas Valantinas
// @supportURL   #
// @include      *ebay.co.uk/sch*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    var interval = setInterval(hideListings, 2000);

    function hideListings() {
        var price = document.getElementsByClassName("prRange");

        for (var i = 0; i < price.length; i++) {
            price[i].parentNode.parentNode.parentNode.parentNode.remove();
        }

        console.log('cleaning');

        if (price.length === 0) {
            clearInterval(interval);
        }
    }
})();
