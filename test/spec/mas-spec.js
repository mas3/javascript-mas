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

    describe("dateFormat()", function () {
        var targetDate = new Date(2003, 8, 1, 8, 5, 2);

        it("format: d; Day of month(1-31)", function () {
            expect(mas.dateFormat(targetDate, 'd')).toEqual('1');
        });

        it("format: dd; Day of month(01-31)", function () {
            expect(mas.dateFormat(targetDate, 'dd')).toEqual('01');
        });

        it("format: ddd; Day name(abbreviated)", function () {
            expect(mas.dateFormat(targetDate, 'ddd')).toEqual('Mon');
        });

        it("format: ddd; Day name(abbreviated); Japanese", function () {
            expect(mas.dateFormat(targetDate, 'ddd', 'ja')).toEqual('月');
        });

        it("format: dddd; Day name(full)", function () {
            expect(mas.dateFormat(targetDate, 'dddd')).toEqual('Monday');
        });

        it("format: dddd; Day name(full); Japanese", function () {
            expect(mas.dateFormat(targetDate, 'dddd', 'ja')).toEqual('月曜日');
        });

        it("format: H; Hours(0-23)", function () {
            expect(mas.dateFormat(targetDate, 'H')).toEqual('8');
        });

        it("format: HH; Hours(01-23)", function () {
            expect(mas.dateFormat(targetDate, 'HH')).toEqual('08');
        });

        it("format: h; Hours(1-12)", function () {
            expect(mas.dateFormat(targetDate, 'h')).toEqual('8');
        });

        it("format: hh; Hours(01-12)", function () {
            expect(mas.dateFormat(targetDate, 'hh')).toEqual('08');
        });

        it("format: hh; 18 -> 06", function () {
            expect(
                mas.dateFormat(new Date(2003, 8, 1, 18, 5, 2), 'hh')
            ).toEqual('06');
        });

        it("format: hh; 0 -> 12", function () {
            expect(
                mas.dateFormat(new Date(2003, 8, 1, 0, 15, 2), 'hh')
            ).toEqual('12');
        });

        it("format: M; Month of year(1-12)", function () {
            expect(mas.dateFormat(targetDate, 'M')).toEqual('9');
        });

        it("format: MM; Month of year(01-12)", function () {
            expect(mas.dateFormat(targetDate, 'MM')).toEqual('09');
        });

        it("format: MMM; Month name(abbreviated)", function () {
            expect(mas.dateFormat(targetDate, 'MMM')).toEqual('Sep');
        });

        it("format: MMM; Month name(abbreviated); Japanese", function () {
            expect(mas.dateFormat(targetDate, 'MMM', 'ja')).toEqual('9');
        });

        it("format: MMMM; Month name(full)", function () {
            expect(mas.dateFormat(targetDate, 'MMMM')).toEqual('September');
        });

        it("format: MMMM; Month name(full); Japanese", function () {
            expect(mas.dateFormat(targetDate, 'MMMM', 'ja')).toEqual('9月');
        });

        it("format: m; Minutes(0-59)", function () {
            expect(mas.dateFormat(targetDate, 'm')).toEqual('5');
        });

        it("format: mm; Minutes(00-59)", function () {
            expect(mas.dateFormat(targetDate, 'mm')).toEqual('05');
        });

        it("format: s; Seconds(0-59)", function () {
            expect(mas.dateFormat(targetDate, 's')).toEqual('2');
        });

        it("format: ss; Seconds(00-59)", function () {
            expect(mas.dateFormat(targetDate, 'ss')).toEqual('02');
        });

        it("format: t; AM/PM(first character)", function () {
            expect(mas.dateFormat(targetDate, 't')).toEqual('A');
        });

        it("format: t; AM/PM(first character); Japanese", function () {
            expect(mas.dateFormat(targetDate, 't', 'ja')).toEqual('午');
        });

        it("format: tt; AM/PM", function () {
            expect(mas.dateFormat(targetDate, 'tt')).toEqual('AM');
        });

        it("format: tt; AM/PM; Japanese", function () {
            expect(mas.dateFormat(targetDate, 'tt', 'ja')).toEqual('午前');
        });

        it("format: yy; Year(00-99)", function () {
            expect(mas.dateFormat(targetDate, 'yy')).toEqual('03');
        });

        it("format: yyyy; Year", function () {
            expect(mas.dateFormat(targetDate, 'yyyy')).toEqual('2003');
        });

        it("format: yyyy-MM-dd HH:mm:ss", function () {
            expect(mas.dateFormat(
                targetDate, 'yyyy-MM-dd HH:mm:ss')
            ).toEqual('2003-09-01 08:05:02');
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

    describe("isBlank()", function () {
        it("undefined is blank.", function () {
            expect(mas.isBlank(undefined)).toBeTruthy();
        });

        it("null is blank.", function () {
            expect(mas.isBlank(null)).toBeTruthy();
        });

        it("empty string is blank.", function () {
            expect(mas.isBlank("")).toBeTruthy();
        });

        it("0 isn't blank.", function () {
            expect(mas.isBlank(0)).toBeFalsy();
        });

        it("false isn't blank.", function () {
            expect(mas.isBlank(0)).toBeFalsy();
        });
    });

    describe("language()", function () {
        it("should be 2 character alphabetical.", function () {
            expect(mas.language()).toMatch(/^[a-z]{2}$/);
        });
    });

    describe("lpad()", function () {
        it("no padding if the value length is enough.", function () {
            expect(mas.lpad("123", 3, "0")).toEqual("123");
        });

        it("padding if the value length is lack.", function () {
            expect(mas.lpad("123", 5, "0")).toEqual("00123");
        });

        it("default padding space.", function () {
            expect(mas.lpad("123", 5)).toEqual("  123");
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
