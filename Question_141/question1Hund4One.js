var promseOne = function (str) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                resolve(str);
            }
            catch (error) {
                reject(error);
            }
        }, 2000);
    });
};
promseOne('Hello World!').then(function (res) {
    console.log(res);
}).catch(function (error) {
    console.log(error);
});
