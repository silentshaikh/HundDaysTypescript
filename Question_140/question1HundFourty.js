var promseOne = function (str) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(str);
        }, 2000);
    });
};
promseOne('Hello World!').then(function (res) {
    console.log(res);
});
