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

mas.dateLocales = {
    en: {
        ddd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dddd: [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
            'Saturday'],
        MMM: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'],
        MMMM: [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'],
        tt: ['AM', 'PM']
    },
    ja: {
        ddd: ['日', '月', '火', '水', '木', '金', '土'],
        dddd: [
            '日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日',
            '土曜日'],
        MMM: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        MMMM: [
            '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月',
            '10月', '11月', '12月'],
        tt: ['午前', '午後']
    }
};

/**
 * Returns the smallest integer greater than or equal to a value.
 * @param  {Number} val value.
 * @param  {Number} [precision=0] number of fractional digits.
 * @return {Number} rounded up value.
 */
mas.ceil = function (val, precision) {
    precision = precision || 0;
    return Math.ceil(val * Math.pow(10, precision)) / Math.pow(10, precision);
};

/**
 * Add thousands separator.
 * (default separator is a comma.)
 * @param  {String} val value.
 * @param  {String} [separator=','] separator string.
 * @return {String} formatted string with thousands separator.
 */
mas.commaFormat = function (val, separator) {
    if (mas.isBlank(val))  {
        return "";
    }
    separator = separator || ',';
    return ("" + val).replace(
        /([0-9])(?=([0-9]{3})+(?![0-9]))/g, '$1' + separator);
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
    var dateLocale = mas.dateLocales[lang] || mas.dateLocales.en,
        pad = function (val, length) { return mas.lpad(val, length, '0'); },
        f;

    f = {
        d: function (date) { return date.getDate() + ""; },
        dd: function (date) { return pad(date.getDate(), 2); },
        ddd: function (date, lang) { return dateLocale.ddd[date.getDay()]; },
        dddd: function (date, lang) { return dateLocale.dddd[date.getDay()]; },
        H: function (date) { return date.getHours() + ""; },
        HH: function (date) { return pad(date.getHours(), 2); },
        h: function (date) { return (date.getHours() % 12 || 12) + ""; },
        hh: function (date) { return pad(f.h(date), 2); },
        M: function (date) { return date.getMonth() + 1 + ""; },
        MM: function (date) { return pad(date.getMonth() + 1, 2); },
        MMM: function (date, lang) { return dateLocale.MMM[date.getMonth()]; },
        MMMM: function (date, lang) {
                return dateLocale.MMMM[date.getMonth()];
            },
        m: function (date) { return date.getMinutes() + ""; },
        mm: function (date) {return pad(date.getMinutes(), 2); },
        s: function (date) { return date.getSeconds() + ""; },
        ss: function (date) {return pad(date.getSeconds(), 2); },
        t: function (date, lang) { return f.tt(date, lang).charAt(0); },
        tt: function (date, lang) {
                return dateLocale.tt[date.getHours() < 12 ? 0 : 1];
            },
        yy: function (date) {
               return pad(Math.abs(date.getFullYear() % 100), 2);
            },
        yyyy: function (date) { return date.getFullYear() + ""; }
    };

    return format.replace(
        /(dddd|ddd|dd|d|HH|H|hh|h|MMMM|MMM|MM|M|mm|m|ss|s|tt|t|yyyy|yy)/g,
        function (specifier) {
            return f[specifier](date, lang) || specifier;
        });
};

/**
 * Returns the largest integer less than or equal to a value.
 * @param  {Number} val value.
 * @param  {Number} [precision=0] number of fractional digits.
 * @return {Number} rounded down value.
 */
mas.floor = function (val, precision) {
    precision = precision || 0;
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
 * @return {Boolean} true if the val parameter is blank; otherwise, false.
 */
mas.isBlank = function (val) {
    return val === undefined || val === null || val === "";
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
    precision = precision || 0;
    return Math.round(val * Math.pow(10, precision)) / Math.pow(10, precision);
};

/**
 * Sum numbers.
 * @param  {...Number} var_args numbers.
 * @return {Number} sum of numbers.
 * @example
 * mas.sum(1, 2, 3);
 * // if you want to give an array parameter, use apply method.
 * mas.sum.apply(null, [1, 2, 3]);
 */
mas.sum = function (var_args) {
    var i,
        sum,
        len;

    for (i = 0, sum = 0, len = arguments.length; i < len; i++) {
        sum += arguments[i];
    }

    return sum;
};
