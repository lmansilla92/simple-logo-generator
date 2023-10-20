// Imports fs to work with the file system
const fs = require('fs');
// Imports inquirer to prompt user for input
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');

let svg = (shape, text, textColor) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shape}
        <text x="150" y="121.21212121212122" text-anchor="middle" fill="${textColor}" font-size="58">${text}</text>
</svg>`;
}

// Creates a function to write a logo.svg file
function writeToFile(fileName, fileData) {
    fs.writeFile(fileName, fileData, (err) =>
    // Uses ternary operator to check if there's an error, if not then 'Successfully created index.js' is logged.
      err ? console.log(err) : console.log('Generated logo.svg'))
};



inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text to be displayed in logo. Cannot be more than 3 characters long.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the color of the text. You may enter a color keyword or a hexadecimal number.'

        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like?',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color of the shape. You may enter a color keyword or a hexidecimal number.'
        }
    ])

    .then((answers) => {

        let logoText = answers.text.toUpperCase();
        let textColor = answers.textColor.toLowerCase();
        const shapeColor = answers.shapeColor.toLowerCase();
        console.log('Logo text: ', logoText);
        console.log('Text color: ', textColor);
        console.log('Shape: ', answers.shape);
        console.log('Shape color: ', shapeColor);

        switch (answers.shape) {
            case 'Circle':
                answers.shape = new Circle(answers.shapeColor);
                break;
            case 'Triangle':
                answers.shape = new Triangle(answers.shapeColor);
                break;
            case 'Square':
                answers.shape = new Square(answers.shapeColor);
                break;
                default:
                    return;
        }
        
        console.log('Shape code after switch case: ', answers.shape.renderShape());

        // Checks to make sure user didn't enter more than 3 characters for logo text
        if(answers.text.length < 4){
            console.log(answers);
        }else {
            console.log('Logo text must up to 3 characters.');
            return;
        }

        let fileData = svg(answers.shape.renderShape(), logoText, textColor);

        writeToFile('logo.svg', fileData);
    })



    .catch((error) => {
        console.log(error);
    });










// User Story
// AS a freelance web developer
// I WANT to generate a simple logo for my projects
// SO THAT I don't have to pay a graphic designer
// Acceptance Criteria
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered