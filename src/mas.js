/*
JavaScript misc library.
https://github.com/mas3/javascript-mas

The MIT License (MIT)

Copyright (c) 2013 MASUDA Takashi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @namespace
 */
var mas = {};

mas.ABBREVIATED_DAYS = {};
mas.ABBREVIATED_DAYS['en'] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
mas.ABBREVIATED_DAYS['ja'] = ['日', '月', '火', '水', '木', '金', '土'];

mas.DAYS = {};
mas.DAYS['en'] = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday'];
mas.DAYS['ja'] = [
    '日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日',
    '土曜日'];

mas.ABBREVIATED_MONTHS = {};
mas.ABBREVIATED_MONTHS['en'] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'];
mas.ABBREVIATED_MONTHS['ja'] = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

mas.MONTHS = {};
mas.MONTHS['en'] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
mas.MONTHS['ja'] = [
    '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月',
    '11月', '12月'];

mas.AMPM = {};
mas.AMPM['en'] = ['AM', 'PM'];
mas.AMPM['ja'] = ['午前', '午後'];

/**
 * Returns the smallest integer greater than or equal to a value.
 * @param  {Number} val value.
 * @param  {Number} [precision=0] number of fractional digits.
 * @return {Number} rounded up value.
 */
mas.ceil = function (val, precision) {
    if (mas.isBlank(precision)) {
        precision = 0;
    }

    return Math.ceil(val * Math.pow(10, precision)) / Math.pow(10, precision);
};

/**
 * Date Formatting.
 * @param  {Date} date date.
 * @param  {String} format format string.
 * @param  {String} [lang='en'] language.
 * @return {String} formatted string.
 * @example
 * mas.dateFormat(date, "yyyy-MM-dd HH:mm:ss");
 * // Format:
 * //   d    Day of month(1-31)
 * //   dd   Day of month(01-31)
 * //   ddd  Day name(abbreviated)
 * //   dddd Day name(full)
 * //   H    Hours(0-23)
 * //   HH   Hours(01-23)
 * //   h    Hours(1-12)
 * //   hh   Hours(01-12)
 * //   M    Month of year(1-12)
 * //   MM   Month of year(01-12)
 * //   MMM  Month name(abbreviated)
 * //   MMMM Month name(full)
 * //   m    Minutes(0-59)
 * //   mm   Minutes(00-59)
 * //   s    Seconds(0-59)
 * //   ss   Seconds(00-59)
 * //   t    AM/PM(first character)
 * //   tt   AM/PM
 * //   yy   Year(00-99)
 * //   yyyy Year
 */
mas.dateFormat = function (date, format, lang) {
    var f = {};
    var hHours = function (date) {
        var hour = date.getHours();
        hour = hour % 12;
        hour = hour === 0 ? 12 : hour;
        return hour;
    };

    if (mas.isBlank(lang)) {
        lang = 'en';
    }

    f['dddd'] = function (date, lang) {
        var days = mas.DAYS[lang];
        if (days === undefined) {
            days = mas.DAYS['en'];
        }
        return days[date.getDay()];
    };
    f['ddd'] = function (date, lang) {
        var days = mas.ABBREVIATED_DAYS[lang];
        if (days === undefined) {
            days = mas.ABBREVIATED_DAYS['en'];
        }
        return days[date.getDay()];
    };
    f['dd'] = function (date) { return mas.lpad(date.getDate(), 2, '0'); };
    f['d'] = function (date) { return date.getDate() + ""; };
    f['HH'] = function (date) { return mas.lpad(date.getHours(), 2, '0'); };
    f['H'] = function (date) { return date.getHours() + ""; };
    f['hh'] = function (date) { return mas.lpad(hHours(date), 2, '0'); };
    f['h'] = function (date) { return hHours(date) + ""; };
    f['MMMM'] = function (date, lang) {
        var months = mas.MONTHS[lang];
        if (months === undefined) {
            months = mas.MONTHS['en'];
        }
        return months[date.getMonth()];
    };
    f['MMM'] = function (date, lang) {
        var months = mas.ABBREVIATED_MONTHS[lang];
        if (months === undefined) {
            months = mas.ABBREVIATED_MONTHS['en'];
        }
        return months[date.getMonth()];
    };
    f['MM'] = function (date) {
        return mas.lpad(date.getMonth() + 1, 2, '0');
    };
    f['M'] = function (date) { return date.getMonth() + 1 + ""; };
    f['mm'] = function (date) {return mas.lpad(date.getMinutes(), 2, '0'); };
    f['m'] = function (date) { return date.getMinutes() + ""; };
    f['ss'] = function (date) {return mas.lpad(date.getSeconds(), 2, '0'); };
    f['s'] = function (date) { return date.getSeconds() + ""; };
    f['tt'] = function (date, lang) {
        var ampm = mas.AMPM[lang];
        if (ampm === undefined) {
            ampm = mas.AMPM['en'];
        }
        return ampm[date.getHours() >= 12 ? 1 : 0];
    };
    f['t'] = function (date, lang) {
        return f['tt'](date, lang).substr(0, 1);
    };
    f['yy'] = function (date) {
        return mas.lpad(Math.abs(date.getFullYear() % 100), 2, '0');
    };
    f['yyyy'] = function (date) { return date.getFullYear() + ""; };

    return format.replace(/(dddd|ddd|dd|d|HH|H|hh|h|MMMM|MMM|MM|M|mm|m|ss|s|tt|t|yyyy|yy)/g, function () {
        var specifier = arguments[1],
            replaced;
        replaced = f[specifier](date, lang);
        if (replaced === undefined) {
            replaced = specifier;
        }
        return replaced;
    });
};

/**
 * Returns the largest integer less than or equal to a value.
 * @param  {Number} val value.
 * @param  {Number} [precision=0] number of fractional digits.
 * @return {Number} rounded down value.
 */
mas.floor = function (val, precision) {
    if (mas.isBlank(precision)) {
        precision = 0;
    }

    return Math.floor(val * Math.pow(10, precision)) / Math.pow(10, precision);
};

/**
 * Replaces each format item in values.
 * @param  {String} format format string.
 * @param  {...*} var_args replace values.
 * @return {String} replaced string.
 * @example
 * mas.format("{0} = {1}", key, value);
 */
mas.format = function (format, var_args) {
    var items = arguments;
    return format.replace(/\{([0-9]+)\}/g, function () {
        var replaceString = items[+arguments[1] + 1];
        if (mas.isBlank(replaceString)) {
            return "";
        }
        return replaceString;
    });
};

/**
 * Indicates whether the specified value is blank(undefined or null or
 * empty string).
 * @param  {String} val value.
 * @return {String} true if the val parameter is blank; otherwise, false.
 */
mas.isBlank = function (val) {
    if (val === undefined || val === null || val === "") {
        return true;
    }

    return false;
};

/**
 * Browser language.
 * @return {String} 2 character language code.
 */
mas.language = function () {
    return (
        navigator.browserLanguage ||
        navigator.language ||
        navigator.userLanguage).substr(0,2);
};

/**
 * Pad a string with a set of characters from the left side.
 * @param  {String} val base value.
 * @param  {String} paddedLength number of characters.
 * @param  {String} [padChar= SPACE] pad character.
 * @return {String} padded value.
 */
mas.lpad = function (val, paddedLength, padChar) {
    var str = val + "",
        length = str.length,
        i;
    if (length >= paddedLength) {
        return str;
    }
    if (mas.isBlank(padChar)) {
        padChar = ' ';
    }
    for (i = length; i < paddedLength; i++) {
        str = padChar + str;
    }
    return str;
};

/**
 * Rounds a value.
 * @param  {Number} val value.
 * @param  {Number} [precision=0] number of fractional digits.
 * @return {Number} rounded value.
 */
mas.round = function (val, precision) {
    if (mas.isBlank(precision)) {
        precision = 0;
    }

    return Math.round(val * Math.pow(10, precision)) / Math.pow(10, precision);
};
