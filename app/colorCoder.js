

const { MajorColorNames, MinorColorNames } = require("./colorConstants");
const ColorPair = require("./colorPair");

function getColorFromPairNumber(pairNumber) {
    const majorSize = MajorColorNames.length;
    const minorSize = MinorColorNames.length;
    if (pairNumber < 1 || pairNumber > majorSize * minorSize) {
        throw new Error(`Argument PairNumber:${pairNumber} is outside the allowed range`);
    }
    const zeroBasedPairNumber = pairNumber - 1;
    const majorIndex = Math.floor(zeroBasedPairNumber / minorSize);
    const minorIndex = zeroBasedPairNumber % minorSize;
    return new ColorPair(MajorColorNames[majorIndex], MinorColorNames[minorIndex]);
}

function getPairNumberFromColor(pair) {
    const majorIndex = MajorColorNames.indexOf(pair.majorColor);
    const minorIndex = MinorColorNames.indexOf(pair.minorColor);
    if (majorIndex === -1 || minorIndex === -1) {
        throw new Error(`Unknown Colors: ${pair.toString()}`);
    }
    return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
}

function getColorCodeManual() {
    const lines = [];
    lines.push("Pair No. | Major Color | Minor Color");
    lines.push("---------|-------------|------------");
    let pairNumber = 1;
    for (let major of MajorColorNames) {
        for (let minor of MinorColorNames) {
            lines.push(
                `${pairNumber.toString().padEnd(8)}| ${major.padEnd(11)}| ${minor}`
            );
            pairNumber++;
        }
    }
    return lines.join("\n");
}
	 
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

