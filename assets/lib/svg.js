class SVG {
    constructor(){
        this.svgText = "";
        this.svgShape = "";
        this.svgTextColor = "";
        this.svgShapeColor = "";
    }
    setText(text, color) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
     
    }
}