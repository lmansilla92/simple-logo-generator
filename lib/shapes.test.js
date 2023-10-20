const {Circle, Square, Triangle} = require('./shapes');


describe ('Shapes', () => {

    it('Should render a circle code based on user input', () => {

        let shapeColor = 'Blue';
        let shape = new Circle(shapeColor);
        let svg = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${shapeColor}"></circle>`;
        let newSvg = shape.renderShape();
        
        expect(svg).toBe(newSvg);
    });

    it('Should render a square code based on user input', () => {
        
        let shapeColor = 'Blue';
        let shape = new Square(shapeColor);
        let svg = `<rect x="50" height="200" width="200" fill="${shapeColor}">`;
        let newSvg = shape.renderShape();

        expect(svg).toBe(newSvg);
    });

    it('Should render a triangle code based on user input', () => {
        
        let shapeColor = 'Blue';
        let shape = new Triangle(shapeColor);
        let svg = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${shapeColor}"/>`;
        let newSvg = shape.renderShape();

        expect(svg).toBe(newSvg);
    });
})
