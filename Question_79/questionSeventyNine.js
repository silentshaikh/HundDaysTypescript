var carObj3 = {
    make: 'Benlty',
    model: 'FLying Spur',
    year: 2022
};
var iterateObj = function (obj) {
    for (var x in obj) {
        console.log(obj[x]);
    }
};
iterateObj(carObj3);
