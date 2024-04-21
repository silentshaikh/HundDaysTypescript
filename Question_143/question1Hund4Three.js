var funcCallb = function (a, b, calbck) {
    var sum = a + 5;
    calbck(sum);
};
funcCallb(2, 3, function (sum) {
    funcCallb(sum, 5, function (sum2) {
        console.log(sum2);
    });
});
