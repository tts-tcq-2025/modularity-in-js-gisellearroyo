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

module.exports = {
    getColorFromPairNumber,
    getPairNumberFromColor,
    getColorCodeManual
};
    // Test 1

    pairNumber = 4;
