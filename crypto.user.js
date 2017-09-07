// ==UserScript==
// @name         Crypto filter
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       rolandas-valantinas
// @include      *coinmarketcap.com/all/views/all/
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    var currencies = [
        '#id-ripple',
        '#id-dogecoin',
        '#id-reddcoin',
        '#id-bitshares',
        '#id-golem-network-tokens',
        '#id-status',
        '#id-funfair',
    ];

    setInterval(removeCoin, 2000);

    function removeCoin() {
        var rows = $(currencies.join(", "));
        var tbody = $('table.dataTable tbody');
        tbody.empty();
        rows.each(function() {
            tbody.append($(this));
        });
    }
})();
