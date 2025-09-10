class ColorPair {
    constructor(majorColor, minorColor) {
        this.majorColor = majorColor;
        this.minorColor = minorColor;
    }
    toString() {
        return `MajorColor:${this.majorColor},MinorColor:${this.minorColor}`;
    }
}

module.exports = ColorPair;