// prompt user for txt (up to 3 chars)
// prompt user for color of text
// prompt user for shape
// prompt user for color of shape
// take user input and render svg
// print 'generated logo.svg' to console
// open logo.svg in browser shows logo

const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./assets/lib/svg.js');

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
    .then( function ({text, textColor, shape, shapeColor}) {
        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        svg.setShapeColor(shapeColor);
        fs.writeFileSync('./logo.svg', svg.render());
        console.log('generated logo.svg');
        console.log('opening logo.svg in browser');
        const { exec } = require('child_process');
        exec('start chrome logo.svg');     

    })
    
    
    
    
    
    .catch(error => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log('Something else went wrong');
        }
    });