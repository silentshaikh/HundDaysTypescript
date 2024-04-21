var _this = this;
var tradFunc2 = function () {
    console.log(this);
};
tradFunc2();
var arrowFunc2 = function () {
    console.log(_this);
};
arrowFunc2();
