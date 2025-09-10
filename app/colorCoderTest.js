const { getColorFromPairNumber, getPairNumberFromColor, getColorCodeManual } = require("./colorCoder");
const ColorPair = require("./colorPair");

function test() {
    let pairNumber;
    let testPair1;
    // Test 1
    pairNumber = 4;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor === "WHITE");
    console.assert(testPair1.minorColor === "BROWN");
    // Test 2
    pairNumber = 5;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor === "WHITE");
    console.assert(testPair1.minorColor === "SLATE");
    // Test 3
    pairNumber = 23;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor === "RED");
    console.assert(testPair1.minorColor === "GREEN");
    // Test 4
    let testPair2 = new ColorPair("YELLOW", "GREEN");
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber === 18);
    // Test 5
    testPair2 = new ColorPair("RED", "BLUE");
    pairNumber = getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber === 6);
    // Print the color code manual
    console.log("\nColor Code Reference Manual:\n" + getColorCodeManual());
}

test();
