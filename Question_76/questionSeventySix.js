function squareFunc(num) {
    console.log(Math.pow(num, 2));
}
console.log('Function Declarations');
squareFunc(5);
var squareFunc2 = function (num) {
    console.log(Math.pow(num, 2));
};
console.log('Function Expressions');
squareFunc2(5);
