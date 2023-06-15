// parent class to inherit set color from
class Shape {
    constructor () {
        this.shapeColor = "";
    }
    setColor(color) {
        this.shapeColor = color;
    }
}

// circle class
class Circle extends Shape {
    super(color) {
        this.shapeColor = color;
    }
        render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

// triangle class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

// square class
class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`
    }
}

module.exports = { Circle, Triangle, Square };