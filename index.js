// Imports fs to work with the file system
const fs = require('fs');
// Imports inquirer to prompt user for input
const inquirer = require('inquirer');
// Imports shape classes from shapes.js
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
            // Logs message to console if user entered more than 3 characters
            console.log('Logo text must up to 3 characters.');
            return;
        }

        let fileData = svg(answers.shape.renderShape(), logoText, textColor);

        writeToFile('logo.svg', fileData);
    })



    .catch((error) => {
        console.log(error);
    });