// paths to the files that are required
const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./assets/lib/svg.js');
const { Square, Triangle, Circle } = require("./assets/lib/shapes");

// Prompt the user for input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What is your text? Note: 3 characters max.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What is your text color?'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What is your shape?',
            choices: ['square', 'triangle', 'circle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What is your shape color?'
        }
    ])
    .then(function ({ text, textColor, shape, shapeColor }) {
        const svg = new SVG();

        // Set the text and its color in the SVG
        svg.setText(text, textColor);
        svg.setColor(shapeColor);

        // Set the shape based on user choice and its color in the SVG
        switch (shape) {
            case "square":
                const square = new Square();
                square.setColor(shapeColor);
                svg.setShape(square);
                break;
            case "triangle":
                const triangle = new Triangle();
                triangle.setColor(shapeColor);
                svg.setShape(triangle);
                break;
            case "circle":
                const circle = new Circle();
                circle.setColor(shapeColor);
                svg.setShape(circle);
                break;
        }

        // Write the SVG markup to a file
        fs.writeFile('logo.svg', svg.render(), function (err) {
            if (err) throw err;

            console.log('File is created successfully.');
        });
});