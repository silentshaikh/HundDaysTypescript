var multParam = function () {
    var numArr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numArr[_i] = arguments[_i];
    }
    var productArr = numArr.reduce(function (prev, curr) {
        return prev * curr;
    });
    console.log(productArr);
};
multParam(5, 6, 7, 8);
