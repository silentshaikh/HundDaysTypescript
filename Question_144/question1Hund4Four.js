var numArr = [20, 4, 3, 5, 6, 7, 2, 10, 15, 78, 90];
var filtArr = function (num) {
    return num > 10;
};
var numArrFiltCallb = numArr.filter(filtArr);
console.log(numArrFiltCallb);
// It is an efficient way to filter arrays based on specific criteria defined by a callback function 
