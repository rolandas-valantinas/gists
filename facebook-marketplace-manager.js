// ==UserScript==
// @author       Rolandas Valantinas
// @description  removes entries not matching user filters, auto-scrolls to load more items
// @include      *facebook.com/marketplace*
// @exclude      *facebook.com/marketplace/buying
// @exclude      *facebook.com/marketplace/saved
// @exclude      *facebook.com/marketplace/selling
// @name         Facebook marketplace date filter
// @namespace    https://greasyfork.org/users/157178
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @supportURL   https://github.com/rolandas-valantinas/gists/issues
// @version      1.0
// ==/UserScript==

(function () {
    var mode = `
        Mode: <select id="fb-manager-mode">
          <option value="day">day</option>
          <option value="hours">hours</option>
          <option value="week">week</option>
        </select>
    `;

    var hours = `<br/>Hours: <select id="fb-manager-hours">`;

    for (var i = 2; i < 24; i++) {
        hours += `<option value="${i}">${i}</option>`;
    }

    hours += `</select>`;

    var start = `<br/><input type="button" id="fb-manager-start" value="start">`;

    var stop = `<input type="button" id="fb-manager-stop" value="stop">`;

    var times = {
        week: '._uc9:contains("over a week ago")',
        days: '._uc9:contains("days ago")',
        day: '._uc9:contains("day ago")',
        hours: '._uc9:contains("hours ago")',
    };

    var intervalButton = setInterval(addButton, 3000);
    var intervalRemove = null;
    var attempts = 0;

    function removeItem() {
        var items = null;
        var selectVal = $('#fb-manager-mode').val();

        if (selectVal === 'day') {
            items = $('._1oem').has([times.week, times.days, times.day].join());
        } else if (selectVal === 'week') {
            items = $('._1oem').has([times.week].join());
        } else {
            var regex = null;
            var hoursVal = $('#fb-manager-hours').val();

            if (hoursVal > 19) {
                regex = new RegExp(`(^[2-9]{1}|^1[0-9]{1}|^2[0-${hoursVal - 20}]{1}) hours ago`);
            } else if (hoursVal > 9) {
                regex = new RegExp(`(^[2-9]{1}|^1[0-${hoursVal - 10}]{1}) hours ago`);
            } else {
                regex = new RegExp(`^[2-${hoursVal}]{1} hours ago`);
            }

            $('._1oem').has('._uc9').each(function (index) {
                var text = $(this).find('._uc9').text();

                if (!text.contains('minutes') && !text.contains('about an hour')) {
                    if (!regex.test(text)) {
                        $(this).remove();
                        attempts = 0;
                    } else {
                        console.log(text);
                    }
                }
            });
        }

        if (items !== null) {
            if (items.length > 0) {
                attempts = 0;
                items.remove();
            } else {
                attempts++;
            }
        }

        window.scrollTo(0, $(document).height());

        if (attempts > 5) {
            clearInterval(interval);
        }
    }

    function addButton() {
        var categories = $('._3rne:contains("Categories")').parent();

        if (categories.length > 0) {
            categories.append(mode);
            categories.append(hours);
            categories.append(start);
            categories.append(stop);

            $('#fb-manager-start').click(fbStart);
            $('#fb-manager-stop').click(fbStop);

            toggleHours();

            $(document).on('change', '#fb-manager-mode', function () {
                toggleHours();
            });

            clearInterval(intervalButton);
        }
    }

    function fbStart() {
        intervalRemove = setInterval(removeItem, 3000);
        $('#fb-manager-start, #fb-manager-mode, #fb-manager-hours').prop('disabled', true);
    }

    function fbStop() {
        if (intervalRemove !== null) {
            clearInterval(intervalRemove);
            $('#fb-manager-start, #fb-manager-mode, #fb-manager-hours').prop('disabled', false);

            toggleHours();
        }
    }

    function toggleHours() {
        if ($('#fb-manager-mode').val() === 'hours') {
            $('#fb-manager-hours').prop('disabled', false);
        } else {
            $('#fb-manager-hours').prop('disabled', true);
        }
    }
})();
