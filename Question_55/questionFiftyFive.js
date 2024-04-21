var avergeNum = [50, 60, 70, 80, 90, 100, 200];
// avergeNum = [];
var sumGrades = avergeNum.reduce(function (prev, curr) {
    return prev + curr;
}, 0);
// console.log(sumGrades);
var findAverage = sumGrades / avergeNum.length;
if (avergeNum.length === 0) {
    findAverage = 0;
    console.log('Average : ', findAverage);
}
else {
    console.log('Average : ', findAverage.toFixed(2));
}
