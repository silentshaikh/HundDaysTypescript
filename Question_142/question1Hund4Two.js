var promseTwo = function (str) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(str);
        }, 2000);
    });
};
var promseThree = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new Error("Promise Rejected"));
        }, 2000);
    });
};
Promise.all([promseTwo("Hello World!"), promseThree()])
    .then(function (res) {
    console.log(res);
})
    .catch(function (err) {
    console.error(err.message);
});
// It  is used to execute multiple Promises concurrently and wait for all of them to either resolve or reject.
