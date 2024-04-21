var mixedArr = ['Hello', true, null, 12, undefined, 'World'];
var filtMixedArr = mixedArr.filter(function (e) { return typeof e === 'string'; });
console.log(filtMixedArr);
