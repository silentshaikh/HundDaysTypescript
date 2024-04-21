var sumArr = [10, 20, 40, 5, 3, 45, 32, 60];
var reducSumArr = sumArr.reduce(function (prev, curr) {
    return prev + curr;
}, 0);
console.log(reducSumArr);
