// ==UserScript==
// @name         Zoopla view more
// @author       Rolandas Valantinas
// @description  Click view more on Zoopla listing
// @include      *zoopla.co.uk/for-sale/details*
// @namespace    https://greasyfork.org/users/157178
// @supportURL   https://github.com/rolandas-valantinas/gists/issues
// @version      1.1
// ==/UserScript==

(function() {
    window.addEventListener('load', (event) => {
        document.querySelector("[data-trigger='desc-expanded']").click();
    });
})();
