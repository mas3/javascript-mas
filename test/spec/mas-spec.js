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
            expect(2).toEqual(mas.ceil(1.4));
        });

        it("ceil(-1.4) = -1", function () {
            expect(-1).toEqual(mas.ceil(-1.4));
        });

        it("ceil(1.44, 1) = 1.5", function () {
            expect(1.5).toEqual(mas.ceil(1.44, 1));
        });

        it("ceil(-1.45, 1) = -1.4", function () {
            expect(-1.4).toEqual(mas.ceil(-1.45, 1));
        });

        it("ceil(314.1592, 3) = 314.16", function () {
            expect(314.16).toEqual(mas.ceil(314.1592, 3));
        });

        it("ceil(314.1592, -2) = 400", function () {
            expect(400).toEqual(mas.ceil(314.1592, -2));
        });

        it("ceil('10a') is NaN", function () {
            expect(true).toEqual(isNaN(mas.ceil('10a')));
        });

        it("ceil(314.1592, '2q') is NaN", function () {
            expect(true).toEqual(isNaN(mas.ceil(314.1592, '2q')));
        });

        it("ceil('10.5') = 11", function () {
            expect(11).toEqual(mas.ceil('10.5'));
        });
    });

    describe("floor()", function () {
        it("floor(1.4) = 1", function () {
            expect(1).toEqual(mas.floor(1.4));
        });

        it("floor(-1.4) = -2", function () {
            expect(-2).toEqual(mas.floor(-1.4));
        });

        it("floor(1.44, 1) = 1.4", function () {
            expect(1.4).toEqual(mas.floor(1.44, 1));
        });

        it("floor(-1.45, 1) = -1.5", function () {
            expect(-1.5).toEqual(mas.floor(-1.45, 1));
        });

        it("floor(314.1592, 3) = 314.159", function () {
            expect(314.159).toEqual(mas.floor(314.1592, 3));
        });

        it("floor(314.1592, -2) = 300", function () {
            expect(300).toEqual(mas.floor(314.1592, -2));
        });

        it("floor('10a') is NaN", function () {
            expect(true).toEqual(isNaN(mas.floor('10a')));
        });

        it("floor(314.1592, '2q') is NaN", function () {
            expect(true).toEqual(isNaN(mas.floor(314.1592, '2q')));
        });

        it("floor('10.5') = 10", function () {
            expect(10).toEqual(mas.floor('10.5'));
        });
    });

    describe("format()", function () {
        it("single format item only.", function () {
            expect("item1").toEqual(mas.format("{0}", "item1"));
        });

        it("single format item with other string.", function () {
            expect("This is item1.").toEqual(
                mas.format("This is {0}.", "item1"));
        });

        it("multi format items.", function () {
            expect("item1 item2 item3").toEqual(
                mas.format("{0} {1} {2}", "item1", "item2", "item3"));
        });

        it("duplicate format items.", function () {
            expect("item1 item2 item1").toEqual(
                mas.format("{0} {1} {0}", "item1", "item2"));
        });

        it("replace number value.", function () {
            expect("1.2 + 3.4 = 4.6").toEqual(
                mas.format("{0} + {1} = {2}", 1.2, 3.4, 4.6));
        });

        it("lack arguments.", function () {
            expect("item1,").toEqual(
                mas.format("{0},{1}", "item1"));
        });

        it("include undefined and null vlaues.", function () {
            expect("item1,,").toEqual(
                mas.format("{0},{1},{2}", "item1", undefined, null));
        });
    });

    describe("is_blank()", function () {
        it("undefined is blank.", function () {
            expect(true).toEqual(mas.is_blank(undefined));
        });

        it("null is blank.", function () {
            expect(true).toEqual(mas.is_blank(null));
        });

        it("empty string is blank.", function () {
            expect(true).toEqual(mas.is_blank(""));
        });

        it("0 isn't blank.", function () {
            expect(false).toEqual(mas.is_blank(0));
        });

        it("false isn't blank.", function () {
            expect(false).toEqual(mas.is_blank(0));
        });
    });

    describe("language()", function () {
        it("should be 2 character alphabetical.", function () {
            expect(mas.language()).toMatch(/^[a-z]{2}$/);
        });
    });

    describe("round()", function () {
        it("round(1.4) = 1", function () {
            expect(1).toEqual(mas.round(1.4));
        });

        it("round(1.5) = 2", function () {
            expect(2).toEqual(mas.round(1.5));
        });

        it("round(1.6, 0) = 2", function () {
            expect(2).toEqual(mas.round(1.6, 0));
        });

        it("round(-1.4) = -1", function () {
            expect(-1).toEqual(mas.round(-1.4));
        });

        it("round(-1.5) = -1", function () {
            expect(-1).toEqual(mas.round(-1.5));
        });

        it("round(-1.6) = -2", function () {
            expect(-2).toEqual(mas.round(-1.6));
        });

        it("round(1.44, 1) = 1.4", function () {
            expect(1.4).toEqual(mas.round(1.44, 1));
        });

        it("round(1.45, 1) = 1.5", function () {
            expect(1.5).toEqual(mas.round(1.45, 1));
        });

        it("round(-1.45, 1) = -1.4", function () {
            expect(-1.4).toEqual(mas.round(-1.45, 1));
        });

        it("round(-1.451, 1) = -1.5", function () {
            expect(-1.5).toEqual(mas.round(-1.451, 1));
        });

        it("round(314.1592, 3) = 314.159", function () {
            expect(314.159).toEqual(mas.round(314.1592, 3));
        });

        it("round(314.1592, -2) = 300", function () {
            expect(300).toEqual(mas.round(314.1592, -2));
        });

        it("round('10a') is NaN", function () {
            expect(true).toEqual(isNaN(mas.round('10a')));
        });

        it("round(314.1592, '2q') is NaN", function () {
            expect(true).toEqual(isNaN(mas.round(314.1592, '2q')));
        });

        it("round('10.5') = 11", function () {
            expect(11).toEqual(mas.round('10.5'));
        });
    });
});
