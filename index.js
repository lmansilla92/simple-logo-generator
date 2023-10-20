// Imports inquirer to prompt user for input
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text to be displayed in logo. Cannot be more than 3 characters long.'

        },
        {
            type: 'input',
            name: 'color',
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
            name: 'shape-color',
            message: 'Enter the color of the shape. You may enter a color keyword or a hexidecimal number.'
        }
    ])

    
    .then((answers) => {
        console.log(answers);
        console.log('Generated logo.svg');
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