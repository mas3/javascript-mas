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

describe("mas", function () {

    describe("ceil()", function () {
        it("ceil(1.4) = 2", function () {
            expect(mas.ceil(1.4)).toEqual(2);
        });

        it("ceil(-1.4) = -1", function () {
            expect(mas.ceil(-1.4)).toEqual(-1);
        });

        it("ceil(1.44, 1) = 1.5", function () {
            expect(mas.ceil(1.44, 1)).toEqual(1.5);
        });

        it("ceil(-1.45, 1) = -1.4", function () {
            expect(mas.ceil(-1.45, 1)).toEqual(-1.4);
        });

        it("ceil(314.1592, 3) = 314.16", function () {
            expect(mas.ceil(314.1592, 3)).toEqual(314.16);
        });

        it("ceil(314.1592, -2) = 400", function () {
            expect(mas.ceil(314.1592, -2)).toEqual(400);
        });

        it("ceil('10a') is NaN", function () {
            expect(isNaN(mas.ceil('10a'))).toBeTruthy();
        });

        it("ceil(314.1592, '2q') is NaN", function () {
            expect(isNaN(mas.ceil(314.1592, '2q'))).toBeTruthy();
        });

        it("ceil('10.5') = 11", function () {
            expect(mas.ceil('10.5')).toEqual(11);
        });
    });

    describe("floor()", function () {
        it("floor(1.4) = 1", function () {
            expect(mas.floor(1.4)).toEqual(1);
        });

        it("floor(-1.4) = -2", function () {
            expect(mas.floor(-1.4)).toEqual(-2);
        });

        it("floor(1.44, 1) = 1.4", function () {
            expect(mas.floor(1.44, 1)).toEqual(1.4);
        });

        it("floor(-1.45, 1) = -1.5", function () {
            expect(mas.floor(-1.45, 1)).toEqual(-1.5);
        });

        it("floor(314.1592, 3) = 314.159", function () {
            expect(mas.floor(314.1592, 3)).toEqual(314.159);
        });

        it("floor(314.1592, -2) = 300", function () {
            expect(mas.floor(314.1592, -2)).toEqual(300);
        });

        it("floor('10a') is NaN", function () {
            expect(isNaN(mas.floor('10a'))).toBeTruthy();
        });

        it("floor(314.1592, '2q') is NaN", function () {
            expect(isNaN(mas.floor(314.1592, '2q'))).toBeTruthy();
        });

        it("floor('10.5') = 10", function () {
            expect(mas.floor('10.5')).toEqual(10);
        });
    });

    describe("format()", function () {
        it("single format item only.", function () {
            expect(mas.format("{0}", "item1")).toEqual("item1");
        });

        it("single format item with other string.", function () {
            expect(mas.format("This is {0}.", "item1")).toEqual(
                "This is item1.");
        });

        it("multi format items.", function () {
            expect(
                mas.format("{0} {1} {2}", "item1", "item2", "item3")
                ).toEqual("item1 item2 item3");
        });

        it("duplicate format items.", function () {
            expect(mas.format("{0} {1} {0}", "item1", "item2")).toEqual(
                "item1 item2 item1");
        });

        it("replace number value.", function () {
            expect(mas.format("{0} + {1} = {2}", 1.2, 3.4, 4.6)).toEqual(
                "1.2 + 3.4 = 4.6");
        });

        it("lack arguments.", function () {
            expect(mas.format("{0},{1}", "item1")).toEqual(
                "item1,");
        });

        it("include undefined and null vlaues.", function () {
            expect(mas.format("{0},{1},{2}", "item1", undefined, null)
                ).toEqual("item1,,");
        });
    });

    describe("is_blank()", function () {
        it("undefined is blank.", function () {
            expect(mas.is_blank(undefined)).toBeTruthy();
        });

        it("null is blank.", function () {
            expect(mas.is_blank(null)).toBeTruthy();
        });

        it("empty string is blank.", function () {
            expect(mas.is_blank("")).toBeTruthy();
        });

        it("0 isn't blank.", function () {
            expect(mas.is_blank(0)).toBeFalsy();
        });

        it("false isn't blank.", function () {
            expect(mas.is_blank(0)).toBeFalsy();
        });
    });

    describe("language()", function () {
        it("should be 2 character alphabetical.", function () {
            expect(mas.language()).toMatch(/^[a-z]{2}$/);
        });
    });

    describe("round()", function () {
        it("round(1.4) = 1", function () {
            expect(mas.round(1.4)).toEqual(1);
        });

        it("round(1.5) = 2", function () {
            expect(mas.round(1.5)).toEqual(2);
        });

        it("round(1.6, 0) = 2", function () {
            expect(mas.round(1.6, 0)).toEqual(2);
        });

        it("round(-1.4) = -1", function () {
            expect(mas.round(-1.4)).toEqual(-1);
        });

        it("round(-1.5) = -1", function () {
            expect(mas.round(-1.5)).toEqual(-1);
        });

        it("round(-1.6) = -2", function () {
            expect(mas.round(-1.6)).toEqual(-2);
        });

        it("round(1.44, 1) = 1.4", function () {
            expect(mas.round(1.44, 1)).toEqual(1.4);
        });

        it("round(1.45, 1) = 1.5", function () {
            expect(mas.round(1.45, 1)).toEqual(1.5);
        });

        it("round(-1.45, 1) = -1.4", function () {
            expect(mas.round(-1.45, 1)).toEqual(-1.4);
        });

        it("round(-1.451, 1) = -1.5", function () {
            expect(mas.round(-1.451, 1)).toEqual(-1.5);
        });

        it("round(314.1592, 3) = 314.159", function () {
            expect(mas.round(314.1592, 3)).toEqual(314.159);
        });

        it("round(314.1592, -2) = 300", function () {
            expect(mas.round(314.1592, -2)).toEqual(300);
        });

        it("round('10a') is NaN", function () {
            expect(isNaN(mas.round('10a'))).toBeTruthy();
        });

        it("round(314.1592, '2q') is NaN", function () {
            expect(isNaN(mas.round(314.1592, '2q'))).toBeTruthy();
        });

        it("round('10.5') = 11", function () {
            expect(mas.round('10.5')).toEqual(11);
        });
    });
});
