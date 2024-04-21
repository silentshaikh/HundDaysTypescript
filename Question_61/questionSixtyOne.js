var findType = function (shape) {
    if (shape.type === 'circle') {
        console.log("The Radius of Circle is ".concat(shape.radius, " radius."));
    }
    else if (shape.type === 'rectangular') {
        console.log("The height of Rectangular is ".concat(shape.height, " and width is ").concat(shape.width, "."));
    }
    else {
        console.log('This type is unavailable.');
    }
};
var typeCircle = {
    type: 'circle',
    radius: 10
};
var typeRectangular = {
    type: 'rectangular',
    height: 10,
    width: 5,
};
findType(typeCircle);
findType(typeRectangular);
