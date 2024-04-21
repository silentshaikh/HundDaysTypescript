var student2 = {
    name: 'Ben',
    country: 'USA',
    callName: function () {
        console.log("The name of the student is ".concat(this.name, ". He live in ").concat(this.country, "."));
    },
};
student2.callName();
