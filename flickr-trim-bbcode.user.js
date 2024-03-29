// ==UserScript==
// @name         Trim BBCode in flickr
// @author       Rolandas Valantinas
// @description  Trim BBCode in flickr by only leaving image linking back to site
// @include      *flickr.com/photos*
// @namespace    https://greasyfork.org/users/157178
// @supportURL   https://github.com/rolandas-valantinas/gists/issues
// @version      1.0
// ==/UserScript==

(function () {
    var interval = setInterval(hideListings, 1000);

    function hideListings() {
        var bbcode = document.getElementsByClassName("bb-code-text-field");

        if (bbcode.length > 0) {
            let value = bbcode[0].value;
            value = value.slice(0,value.lastIndexOf('img'));
            value += 'img][/url]';
            bbcode[0].value = value;
        }
    }
})();
