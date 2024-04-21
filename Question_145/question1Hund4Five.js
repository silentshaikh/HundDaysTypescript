var readData = function (data, callbck) {
    setTimeout(function () {
        var ourErr = new Error('Data not Found');
        callbck(ourErr, data);
    }, 3000);
};
readData('', function (err, data) {
    if (data === '') {
        console.error(err === null || err === void 0 ? void 0 : err.message);
    }
    else {
        console.log(data);
    }
});
