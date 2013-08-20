/*
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

/**
 * Returns the smallest integer greater than or equal to a value.
 * @param  {Number} val value.
 * @param  {Number} [precision=0] number of fractional digits.
 * @return {Number} rounded up value.
 */
mas.ceil = function (val, precision) {
    if (mas.is_blank(precision)) {
        precision = 0;
    }

    return Math.ceil(val * Math.pow(10, precision)) / Math.pow(10, precision);
};

/**
 * Returns the largest integer less than or equal to a value.
 * @param  {Number} val value.
 * @param  {Number} [precision=0] number of fractional digits.
 * @return {Number} rounded down value.
 */
mas.floor = function (val, precision) {
    if (mas.is_blank(precision)) {
        precision = 0;
    }

    return Math.floor(val * Math.pow(10, precision)) / Math.pow(10, precision);
};

/**
 * Indicates whether the specified value is blank(undefined or null or
 * empty string).
 * @param  {String} val value.
 * @return {String} true if the val parameter is blank; otherwise, false.
 */
mas.is_blank = function (val) {
    if (val === undefined || val === null || val === "") {
        return true;
    }

    return false;
};

/**
 * Rounds a value.
 * @param  {Number} val value.
 * @param  {Number} [precision=0] number of fractional digits.
 * @return {Number} rounded value.
 */
mas.round = function (val, precision) {
    if (mas.is_blank(precision)) {
        precision = 0;
    }

    return Math.round(val * Math.pow(10, precision)) / Math.pow(10, precision);
};
