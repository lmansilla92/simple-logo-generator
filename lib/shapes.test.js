const {Circle, Square, Triangle} = require('./shapes');

it('Should render a shape based on user input', () => {

    let shapeColor = 'Blue'
    let shape = new Circle(shapeColor);
    let svg = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${shapeColor}"></circle>`;
    let newSvg = shape.renderShape();
    

    expect(svg).toBe(newSvg);
})