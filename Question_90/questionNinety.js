var removeAndReturnValue = function (arr) {
    var remVal = arr.pop();
    console.log(arr);
    return remVal;
};
var remAndReturn = removeAndReturnValue(['Apple', 'Banana', 'Orange', 'Guava']);
console.log(remAndReturn);
