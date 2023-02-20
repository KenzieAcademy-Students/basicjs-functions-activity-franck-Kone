// Unit Tests ------------------------------------------------------------------------
// Do not modify these tests.  They will automatically run in the console and test your code.

import {
    getNumberFive,
    add,
    multiply,
    concatenate,
    areaOfTriangle,
} from "./code.js";

function kenzieAssert(paramObject) {
    let actual = paramObject.actual;
    let expected = paramObject.expected;
    if (actual === expected) {
        console.log(`PASS Test #${paramObject.testNumber} ${paramObject.testFunction}`);
    } else {
        console.error(`FAIL Test #${paramObject.testNumber} ${paramObject.testFunction}`, {
			test: paramObject.failureMessage,
			expected: expected,
			actual: actual,
		});
    }
}

console.group("Unit Tests - getNumberFive");
{
    kenzieAssert({
        actual: getNumberFive(),
        expected: 5,
        testNumber: 1,
        testFunction: "getNumberFive",
        failureMessage: "getNumberFive should return the number 5",
    });
}
console.groupEnd();

console.group("Unit Tests - add");
{
    kenzieAssert({
        actual: add(2, 4),
        expected: 6,
        testNumber: 1,
        testFunction: "add",
        failureMessage: "Adding 2 and 4 returns 6",
    });
    kenzieAssert({
        actual: add(5, 8),
        expected: 13,
        testNumber: 2,
        testFunction: "add",
        failureMessage: "Adding 5 and 8 returns 13",
    });
}
console.groupEnd();

console.group("Unit Tests - multiply");
{
    kenzieAssert({
        actual: multiply(4, 5, 6),
        expected: 120,
        testNumber: 1,
        testFunction: "multiply",
        failureMessage: "The product of 4, 5, and 6 is 120",
    });
    kenzieAssert({
        actual: multiply(2, -3, 9),
        expected: -54,
        testNumber: 2,
        testFunction: "multiply",
        failureMessage: "The product of 2, -3 and 9 is -54",
    });
}
console.groupEnd();

console.group("Unit Tests - concatenate");
{
    kenzieAssert({
        actual: concatenate("This is a ", "string!"),
        expected: "This is a string!",
        testNumber: 1,
        testFunction: "concatenate",
        failureMessage: `Concatenating two strings forms a sentence, and this test returns, "This is a string!"`,
    });
    kenzieAssert({
        actual: concatenate("", "New text!"),
        expected: "New text!",
        testNumber: 2,
        testFunction: "concatenate",
        failureMessage: `The initial string can be empty and it still works, and this test returns, "New text!"`,
    });
}
console.groupEnd();

console.group("Unit Tests - areaOfTriangle");
{
    kenzieAssert({
        actual: areaOfTriangle(12, 6),
        expected: "The total area of the triangle is 36",
        testNumber: 1,
        testFunction: "areaOfTriangle",
        failureMessage: `With a base of 12 and height of 6, this test returns, "The total area of the triangle is 36"`,
    });
    kenzieAssert({
        actual: areaOfTriangle(20, 10),
        expected: "The total area of the triangle is 100",
        testNumber: 2,
        testFunction: "areaOfTriangle",
        failureMessage: `With a base of 20 and height of 10, this test returns, "The total area of the triangle is 100"`,
    });
    kenzieAssert({
        actual: areaOfTriangle(12, 12),
        expected: "The total area of the triangle is 72",
        testNumber: 3,
        testFunction: "areaOfTriangle",
        failureMessage: `With a base of 12 and height of 12, this test returns, "The total area of the triangle is 72"`,
    });
}
console.groupEnd();
