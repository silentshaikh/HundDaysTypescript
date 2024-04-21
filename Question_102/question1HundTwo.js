var randColorGen = function () {
    var rand = Math.floor(Math.random() * 16777215);
    var randCode = "#".concat(rand.toString(16));
    return randCode;
};
var randColor = randColorGen();
console.log(randColor);
