// outer function
var student3 = {
    name: 'Ben',
    country: 'USA',
    callName: function () {
        console.log("The name of the student is ".concat(this.name, ". He live in ").concat(this.country, "."));
    },
};
student3.callName();
//inner function
var student4 = {
    name: 'Ben',
    country: 'USA',
    callName: function () {
        function innerFunc() {
            console.log("The name of the student is ".concat(this.name, ". He live in ").concat(this.country, "."));
        }
        ;
        innerFunc();
    },
};
student4.callName();
