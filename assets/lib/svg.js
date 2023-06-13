const { Square } = require("./shapes");

class SVG {
    constructor(){
        this.svgText = "";
        this.svgShape = "";
        this.svgTextColor = "";
        this.svgShapeColor = "";
    }

    // set shape color
    setColor(color) {
        this.svgShapeColor = color;
    }

    // 
    setShape(shape) {
        switch (shape) {
            case "square":
                const square = new Square();              
                square.setColor(this.svgShapeColor);
                this.svgShape = square.render();
                break;

            case "triangle":
                const triangle = new Triangle();
                triangle.setColor(this.svgShapeColor);
                this.svgShape = triangle.render();
                break;

            case "circle":
                const circle = new Circle();
                circle.setColor(this.svgShapeColor);
                this.svgShape = circle.render();
                break;
        }

    }

    setText(text, color) {
        if (text.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
        console.log(this.svgText);
     
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.svgShape}${this.svgText}</svg>`;

    }

}

module.exports = SVG;