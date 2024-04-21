console.log('Original Function');
function calculateArea(height, width) {
    console.log("Area: ".concat(height * width));
}
calculateArea(3, 5);
console.log('Refactor into a Arrow Function');
var calculateArea2 = function (height, width) {
    console.log("Area: ".concat(height * width));
};
calculateArea2(3, 5);
