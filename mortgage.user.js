// ==UserScript==
// @name         Filter mortgage
// @namespace    #
// @version      1.0
// @description  Filters mortgages on money supermarket
// @author       Rolandas Valantinas
// @supportURL   #
// @include      *moneysavingexpert.com/mortgages/best-buys*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    setInterval(filterMortgages, 2000);

    function filterMortgages() {
        var feeBlock = document.querySelectorAll("[data-popup='popupMortgageFees']");
        var fee;
        for (var i = 1; i < feeBlock.length; i++) {
            fee = feeBlock[i].parentNode.getElementsByClassName("mainval");
            fee = fee[0].innerHTML.replace("£", '').replace(",", '');
            if (fee > 550) {
                feeBlock[i].parentNode.parentNode.parentNode.remove();
            }
        }
    }
})();
