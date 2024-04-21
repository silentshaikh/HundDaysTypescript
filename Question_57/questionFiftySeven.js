var addNum = function (addOne) { return function (addTwo) { return function (addThree) {
    return addOne + addTwo + addThree;
}; }; };
var addThree = addNum(3);
var addFive = addThree(5);
var addSix = addFive(6);
console.log(addSix);
