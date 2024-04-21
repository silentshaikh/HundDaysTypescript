var rstParam = function (name) {
    var hobby = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        hobby[_i - 1] = arguments[_i];
    }
    hobby.forEach(function (e) {
        console.log("".concat(name, ", You Enjoy that ").concat(e, "."));
    });
};
rstParam('Ben', 'Coding', 'Cricket', 'Games', 'Travelling');
