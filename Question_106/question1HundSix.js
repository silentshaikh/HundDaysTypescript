var compareStr = function (a, b) {
    return a.toLowerCase() === b.toLowerCase();
};
var checksBool = compareStr('HELLO', 'hello');
var checksBool2 = compareStr('hello', 'world');
console.log(checksBool);
console.log(checksBool2);
