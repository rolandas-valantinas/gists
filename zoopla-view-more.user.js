// ==UserScript==
// @author       Rolandas Valantinas
// @description  Click view more on Zoopla listing
// @include      *zoopla.co.uk/for-sale/details*
// @name         Zoopla view more
// @namespace    https://greasyfork.org/users/157178
// @supportURL   https://github.com/rolandas-valantinas/gists/issues
// @version      1.0
// ==/UserScript==

(function() {
    window.addEventListener('load', (event) => {
        document.querySelector("[data-trigger='desc-expanded']").click();
    });
})();
