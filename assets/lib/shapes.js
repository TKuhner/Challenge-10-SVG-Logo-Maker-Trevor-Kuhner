class Shape {
    constructor () {
        this.shapeColor = "";
    }
    setColor(color) {
        this.shapeColor = color;
    }
}


class Circle extends Shape {
    super(color) {
        this.shapeColor = color;
    }
        render() {
        // console.log(this.shapeColor + "circle color");
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    render() {
        // console.log(this.shapeColor + "triangle color");
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    render() {
        // console.log(this.shapeColor + "square color");
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`
    }
}

module.exports = { Circle, Triangle, Square };